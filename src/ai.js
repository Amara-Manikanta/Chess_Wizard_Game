// Unified AI facade.
//
// Everything in the app asks this module for moves and evaluations; it decides
// whether to use Stockfish (strong, off-thread, needs a 1.4MB WASM download) or
// the built-in engine (weaker, blocks the main thread, always available).
//
// Stockfish speaks FEN and coordinate moves; the rest of the app speaks chess.js
// move objects. Translating between the two lives here so callers never care
// which engine answered.

import { stockfish } from './stockfish.js';
import { chessEngine } from './engine.js';

class AIService {
  constructor() {
    this.backend = 'builtin';
    this.initPromise = null;
  }

  // Try to bring Stockfish up. Safe to call repeatedly; never throws.
  async init() {
    if (this.initPromise) return this.initPromise;
    this.initPromise = (async () => {
      try {
        const ok = await stockfish.init();
        this.backend = ok ? 'stockfish' : 'builtin';
      } catch (e) {
        console.warn('Falling back to the built-in engine:', e);
        this.backend = 'builtin';
      }
      return this.backend;
    })();
    return this.initPromise;
  }

  get usingStockfish() {
    return this.backend === 'stockfish';
  }

  backendName() {
    return this.usingStockfish ? 'Stockfish 10' : 'Built-in engine';
  }

  // Convert a coordinate move from Stockfish into the verbose chess.js move
  // object the board and move log expect. Returns null if it is not legal in
  // this position, which keeps a desynced engine from corrupting the game.
  resolveMove(game, coordMove) {
    if (!coordMove) return null;
    return game.moves({ verbose: true }).find(m =>
      m.from === coordMove.from &&
      m.to === coordMove.to &&
      (m.promotion || undefined) === (coordMove.promotion || undefined)
    ) || null;
  }

  // Pick an opponent move at the given difficulty.
  async getMove(game, difficulty = 'ron') {
    if (game.isGameOver()) return null;

    if (this.usingStockfish) {
      try {
        const coord = await stockfish.getBestMove(game.fen(), difficulty);
        const move = this.resolveMove(game, coord);
        if (move) return move;
        console.warn('Stockfish returned an unusable move; using built-in engine.');
      } catch (e) {
        console.warn('Stockfish move failed; using built-in engine:', e);
      }
    }

    return chessEngine.getBestMoveAsync(game, difficulty);
  }

  // Full-strength evaluation of a position, regardless of opponent difficulty.
  // Returns { score, mate, move, depth } with score in centipawns, positive
  // meaning White is better. `mate` is signed: +3 means White mates in 3.
  async analyse(game, { depth = 14, movetime = null } = {}) {
    if (this.usingStockfish) {
      try {
        const result = await stockfish.analyse(game.fen(), { depth, movetime });
        if (result) {
          return {
            score: result.score,
            mate: result.mate,
            depth: result.depth,
            move: this.resolveMove(game, result.move)
          };
        }
      } catch (e) {
        console.warn('Stockfish analysis failed; using built-in engine:', e);
      }
    }

    const result = chessEngine.analyse(game, { depth: Math.min(depth, 8), timeMs: movetime || 600 });
    return {
      score: result.score,
      mate: result.mate,
      depth: result.depth,
      move: result.move
    };
  }

  // Cheap synchronous evaluation for the live eval bar. Never runs a search —
  // this is called after every move, so it has to be effectively free.
  quickEval(game) {
    return chessEngine.evaluateBoard(game);
  }
}

export const ai = new AIService();

// Turn a centipawn/mate pair into the text and bar fill the UI shows.
export function formatEval(score, mate) {
  if (mate !== null && mate !== undefined) {
    return {
      text: mate > 0 ? `M${mate}` : `-M${Math.abs(mate)}`,
      fill: mate > 0 ? 100 : 0
    };
  }
  if (score === null || score === undefined) {
    return { text: '0.0', fill: 50 };
  }
  if (Math.abs(score) > 5000) {
    return { text: score > 0 ? 'M' : '-M', fill: score > 0 ? 100 : 0 };
  }

  const pawns = score / 100;
  const text = pawns > 0 ? `+${pawns.toFixed(1)}` : pawns.toFixed(1);
  // Saturating curve: keeps small edges visible without pinning the bar at a
  // couple of pawns' advantage.
  const fill = 50 + 50 * (2 / (1 + Math.exp(-pawns / 3)) - 1);
  return { text, fill: Math.max(2, Math.min(98, fill)) };
}
