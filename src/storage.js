// Local persistence for puzzle progress and game records.
//
// Everything is best-effort: localStorage throws in private browsing modes and
// when the quota is full, and a stats save failing must never interrupt a game.

const KEY = 'wizard-chess-v1';

const DEFAULTS = {
  puzzles: { streak: 0, bestStreak: 0, score: 1200, solved: 0, attempted: 0, solvedIds: [] },
  record: { wins: 0, losses: 0, draws: 0 },
  preferences: { timeControl: 'unlimited', voiceTutor: false }
};

function read() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULTS);
    const parsed = JSON.parse(raw);
    // Merge so keys added in later versions get their defaults.
    return {
      puzzles: { ...DEFAULTS.puzzles, ...(parsed.puzzles || {}) },
      record: { ...DEFAULTS.record, ...(parsed.record || {}) },
      preferences: { ...DEFAULTS.preferences, ...(parsed.preferences || {}) }
    };
  } catch (e) {
    console.warn('Could not read saved progress; starting fresh.', e);
    return structuredClone(DEFAULTS);
  }
}

function write(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    return true;
  } catch (e) {
    console.warn('Could not save progress.', e);
    return false;
  }
}

class Storage {
  constructor() {
    this.state = read();
  }

  get puzzles() { return this.state.puzzles; }
  get record() { return this.state.record; }
  get preferences() { return this.state.preferences; }

  save() { return write(this.state); }

  updatePuzzles(patch) {
    Object.assign(this.state.puzzles, patch);
    this.save();
    return this.state.puzzles;
  }

  recordPuzzleResult(puzzleId, solved) {
    const p = this.state.puzzles;
    p.attempted++;
    if (solved) {
      p.streak++;
      p.bestStreak = Math.max(p.bestStreak, p.streak);
      p.score += 15;
      if (puzzleId && !p.solvedIds.includes(puzzleId)) {
        p.solvedIds.push(puzzleId);
        p.solved++;
      }
    } else {
      p.streak = 0;
      p.score = Math.max(0, p.score - 5);
    }
    this.save();
    return p;
  }

  recordGameResult(result) {
    if (result === 'win') this.state.record.wins++;
    else if (result === 'loss') this.state.record.losses++;
    else this.state.record.draws++;
    this.save();
    return this.state.record;
  }

  setPreference(key, value) {
    this.state.preferences[key] = value;
    this.save();
  }

  reset() {
    this.state = structuredClone(DEFAULTS);
    this.save();
  }
}

export const storage = new Storage();

// Build a PGN with proper seven-tag-roster headers, then hand it to the browser
// as a download. chess.js can produce the movetext, but not the metadata that
// makes a file importable into Lichess or a database.
export function exportPGN(game, { white = 'Player', black = 'Wizard AI', result = null, opening = null } = {}) {
  const now = new Date();
  const date = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;

  let outcome = result;
  if (!outcome) {
    if (game.isCheckmate()) outcome = game.turn() === 'w' ? '0-1' : '1-0';
    else if (game.isGameOver()) outcome = '1/2-1/2';
    else outcome = '*';
  }

  game.header(
    'Event', "Wizard's Chess Duel",
    'Site', 'Wizard\'s Chess Academy',
    'Date', date,
    'Round', '1',
    'White', white,
    'Black', black,
    'Result', outcome
  );
  if (opening) game.header('Opening', opening);

  return game.pgn();
}

export function downloadPGN(pgn, filename = 'wizard-chess-game.pgn') {
  try {
    const blob = new Blob([pgn], { type: 'application/x-chess-pgn' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Revoke on the next tick so the download has begun.
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return true;
  } catch (e) {
    console.warn('PGN download failed.', e);
    return false;
  }
}
