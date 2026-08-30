// Stockfish UCI driver.
//
// Stockfish runs as a Web Worker, so the search happens off the main thread and
// the board stays responsive no matter how long it thinks — the single biggest
// difference from the built-in engine, which blocks the UI while it searches.
//
// Communication is the UCI text protocol: we post command strings and parse the
// lines it posts back. Every request is serialised through a queue because a
// UCI engine handles exactly one search at a time.

// Lives in public/, so Vite serves it as a static asset at the site root and
// leaves it unbundled — which matters, because Stockfish loads stockfish.wasm
// by a path relative to itself. Resolved against BASE_URL so it also works
// under the GitHub Pages subdirectory.
const ENGINE_URL = `${import.meta.env.BASE_URL}engine/stockfish.js`;

// Maps the four wizard opponents onto Stockfish's strength controls.
//
// Stockfish 10 predates UCI_LimitStrength/UCI_Elo, so the only built-in
// weakener is Skill Level (0-20), which adds randomness to move choice. Skill
// Level alone bottoms out around 1350 Elo, and this build searches at over a
// million nodes/sec — even a 300ms budget reaches depth 13. So the weaker
// opponents are capped by *depth* as well; that is what actually makes them
// miss things. Verified by head-to-head play: each tier beats the one below it
// as both colours.
export const STOCKFISH_LEVELS = {
  ron:        { approxElo: 800,  skill: 0,  depth: 1  },
  hermione:   { approxElo: 1400, skill: 3,  depth: 4  },
  snape:      { approxElo: 1900, skill: 12, depth: 8  },
  dumbledore: { approxElo: 2600, skill: 20, depth: 14 }
};

export class StockfishEngine {
  constructor() {
    this.worker = null;
    this.ready = false;
    this.readyPromise = null;
    this.queue = Promise.resolve();
    this.listeners = new Set();
    this.failed = false;
  }

  // Boots the worker and waits for `uciok` / `readyok`. Resolves false rather
  // than throwing if the engine cannot start, so callers can fall back.
  async init() {
    if (this.readyPromise) return this.readyPromise;

    this.readyPromise = new Promise((resolve) => {
      let settled = false;
      const finish = (ok) => {
        if (settled) return;
        settled = true;
        this.ready = ok;
        this.failed = !ok;
        resolve(ok);
      };

      try {
        this.worker = new Worker(ENGINE_URL);
      } catch (e) {
        console.warn('Stockfish worker failed to start:', e);
        finish(false);
        return;
      }

      this.worker.onerror = (e) => {
        console.warn('Stockfish worker error:', e.message || e);
        finish(false);
      };

      this.worker.onmessage = (event) => {
        const line = typeof event.data === 'string' ? event.data : '';
        for (const listener of this.listeners) listener(line);
        if (line === 'uciok') {
          this.send('setoption name Ponder value false');
          this.send('isready');
        } else if (line === 'readyok') {
          finish(true);
        }
      };

      // If the engine never reports ready, treat it as unavailable instead of
      // leaving the caller waiting forever.
      setTimeout(() => finish(false), 10000);

      this.send('uci');
    });

    return this.readyPromise;
  }

  send(cmd) {
    if (this.worker) this.worker.postMessage(cmd);
  }

  // Runs one UCI command and collects output until `isDone` accepts a line.
  // Serialised through this.queue: UCI is single-search-at-a-time, and
  // overlapping `go` commands would interleave their output.
  run(commands, isDone, timeoutMs = 20000) {
    const task = () => new Promise((resolve) => {
      const lines = [];
      let finished = false;

      const cleanup = () => {
        this.listeners.delete(listener);
        clearTimeout(timer);
      };

      const listener = (line) => {
        lines.push(line);
        if (!finished && isDone(line)) {
          finished = true;
          cleanup();
          resolve(lines);
        }
      };

      const timer = setTimeout(() => {
        if (finished) return;
        finished = true;
        cleanup();
        // Ask the engine to stop so it is not left searching forever.
        this.send('stop');
        resolve(lines);
      }, timeoutMs);

      this.listeners.add(listener);
      for (const cmd of commands) this.send(cmd);
    });

    // Chain onto the queue, and keep the queue alive if one task rejects.
    const result = this.queue.then(task);
    this.queue = result.catch(() => {});
    return result;
  }

  setLevel(difficulty) {
    const level = STOCKFISH_LEVELS[difficulty] || STOCKFISH_LEVELS.ron;
    this.send(`setoption name Skill Level value ${level.skill}`);
    return level;
  }

  // Ask for a move at the given difficulty. Returns { from, to, promotion }.
  async getBestMove(fen, difficulty = 'ron') {
    if (!this.ready) return null;
    const level = this.setLevel(difficulty);

    const lines = await this.run(
      [`position fen ${fen}`, `go depth ${level.depth}`],
      (line) => line.startsWith('bestmove'),
      15000
    );

    return parseBestMove(lines);
  }

  // Analyse a position at a fixed depth. Returns the evaluation from White's
  // point of view plus the engine's preferred move.
  async analyse(fen, { depth = 14, movetime = null } = {}) {
    if (!this.ready) return null;

    // Analysis must never be weakened, whatever the opponent is currently set
    // to — the same worker serves both, so this has to be reset every time.
    this.send('setoption name Skill Level value 20');

    const goCmd = movetime ? `go movetime ${movetime}` : `go depth ${depth}`;
    const lines = await this.run(
      [`position fen ${fen}`, goCmd],
      (line) => line.startsWith('bestmove'),
      (movetime || 2000) + 20000
    );

    const info = parseLastInfo(lines);
    const best = parseBestMove(lines);
    const sideToMove = (fen.split(' ')[1] === 'b') ? -1 : 1;

    return {
      // UCI scores are from the side to move; normalise to White-positive.
      score: info.cp === null ? null : info.cp * sideToMove,
      mate: info.mate === null ? null : info.mate * sideToMove,
      depth: info.depth,
      move: best
    };
  }

  destroy() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
    this.ready = false;
    this.readyPromise = null;
    this.listeners.clear();
  }
}

// "bestmove e2e4 ponder e7e5" -> { from:'e2', to:'e4', promotion:undefined }
function parseBestMove(lines) {
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i];
    if (!line.startsWith('bestmove')) continue;
    const token = line.split(/\s+/)[1];
    if (!token || token === '(none)') return null;
    return {
      from: token.slice(0, 2),
      to: token.slice(2, 4),
      promotion: token.length > 4 ? token[4] : undefined
    };
  }
  return null;
}

// Pull score/depth from the deepest `info` line that carries a score.
function parseLastInfo(lines) {
  const result = { cp: null, mate: null, depth: 0 };
  for (const line of lines) {
    if (!line.startsWith('info') || !line.includes(' score ')) continue;

    const depthMatch = line.match(/\bdepth (\d+)/);
    const cpMatch = line.match(/\bscore cp (-?\d+)/);
    const mateMatch = line.match(/\bscore mate (-?\d+)/);

    const depth = depthMatch ? parseInt(depthMatch[1], 10) : 0;
    if (depth < result.depth) continue;

    result.depth = depth;
    if (mateMatch) {
      result.mate = parseInt(mateMatch[1], 10);
      result.cp = null;
    } else if (cpMatch) {
      result.cp = parseInt(cpMatch[1], 10);
      result.mate = null;
    }
  }
  return result;
}

export const stockfish = new StockfishEngine();
