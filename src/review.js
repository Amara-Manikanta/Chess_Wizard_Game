// Post-game review: walks a finished game, evaluates every position, and
// classifies each move by how much it threw away compared to the best
// available move.
//
// The measure is centipawn loss, always from the point of view of the player
// who moved: evaluate the position before the move and after it, and the
// difference is what that choice cost. A move that keeps the evaluation is
// good; one that drops it by four pawns is a blunder.

import { Chess } from 'chess.js';
import { ai } from './ai.js';

// Thresholds in centipawns of loss. Roughly aligned with what online chess
// sites report, so the labels mean what players expect them to mean.
const CLASSES = [
  { id: 'best',       label: 'Best',        icon: '★', maxLoss: 10 },
  { id: 'excellent',  label: 'Excellent',   icon: '◆', maxLoss: 25 },
  { id: 'good',       label: 'Good',        icon: '●', maxLoss: 50 },
  { id: 'inaccuracy', label: 'Inaccuracy',  icon: '?!', maxLoss: 100 },
  { id: 'mistake',    label: 'Mistake',     icon: '?', maxLoss: 250 },
  { id: 'blunder',    label: 'Blunder',     icon: '??', maxLoss: Infinity }
];

function classify(loss) {
  return CLASSES.find(c => loss <= c.maxLoss) || CLASSES[CLASSES.length - 1];
}

// Convert a mate score into a large centipawn value so the two are comparable.
// Capped rather than infinite, so "mate in 5" vs "mate in 3" does not swamp the
// accuracy maths.
function toCentipawns(score, mate) {
  if (mate !== null && mate !== undefined) {
    return mate > 0 ? 10000 - mate * 100 : -10000 - mate * 100;
  }
  return score ?? 0;
}

// Per-move accuracy curve. Maps centipawn loss onto 0-100 in a way that is
// forgiving of small errors and harsh on large ones.
function moveAccuracy(loss) {
  return Math.max(0, Math.min(100, 103 * Math.exp(-0.004 * loss) - 3));
}

export class GameReview {
  constructor() {
    this.running = false;
    this.cancelled = false;
  }

  cancel() {
    this.cancelled = true;
  }

  // Analyse every move of `sourceGame`.
  // `onProgress({ done, total })` is called as it goes, since a full review of a
  // long game takes a few seconds even at modest depth.
  async run(sourceGame, { depth = 12, onProgress = null } = {}) {
    if (this.running) return null;
    this.running = true;
    this.cancelled = false;

    try {
      const history = sourceGame.history({ verbose: true });
      const total = history.length;
      if (total === 0) return null;

      const board = new Chess();
      const moves = [];

      // Evaluation of the starting position, before any move is played.
      let prev = await ai.analyse(board, { depth });
      let prevCp = toCentipawns(prev.score, prev.mate);
      const evalCurve = [{ ply: 0, cp: prevCp }];

      for (let i = 0; i < total; i++) {
        if (this.cancelled) return null;

        const move = history[i];
        // Whose move this is decides the sign of "loss": the evaluation is
        // always White-positive, so Black losing ground means it went up.
        const mover = move.color;
        const bestMove = prev.move;

        board.move(move.san);
        const after = await ai.analyse(board, { depth });
        const afterCp = toCentipawns(after.score, after.mate);

        const loss = mover === 'w'
          ? Math.max(0, prevCp - afterCp)
          : Math.max(0, afterCp - prevCp);

        // Only one legal move means there was nothing to get wrong.
        const forced = bestMove === null;
        const playedBest = bestMove &&
          bestMove.from === move.from && bestMove.to === move.to;

        const cls = forced ? CLASSES[0] : classify(playedBest ? 0 : loss);

        moves.push({
          ply: i + 1,
          moveNumber: Math.floor(i / 2) + 1,
          color: mover,
          san: move.san,
          from: move.from,
          to: move.to,
          loss: playedBest ? 0 : Math.round(loss),
          classification: cls.id,
          label: cls.label,
          icon: cls.icon,
          evalAfter: afterCp,
          bestSan: bestMove ? bestMove.san : null,
          playedBest: Boolean(playedBest)
        });

        evalCurve.push({ ply: i + 1, cp: afterCp });

        prev = after;
        prevCp = afterCp;

        if (onProgress) onProgress({ done: i + 1, total });
      }

      return this.summarise(moves, evalCurve);
    } finally {
      this.running = false;
    }
  }

  summarise(moves, evalCurve) {
    const perSide = {};

    for (const color of ['w', 'b']) {
      const own = moves.filter(m => m.color === color);
      const counts = {};
      for (const c of CLASSES) counts[c.id] = 0;
      for (const m of own) counts[m.classification]++;

      const accuracy = own.length === 0
        ? 100
        : own.reduce((sum, m) => sum + moveAccuracy(m.loss), 0) / own.length;

      // Cap each move's contribution before averaging. A single blunder that
      // walks into mate carries a ~9600cp loss, which would otherwise drag the
      // average to a meaningless number: losing a queen and losing to mate in
      // three are both simply "as bad as it gets" for this statistic.
      const LOSS_CAP = 1000;
      const avgLoss = own.length === 0
        ? 0
        : own.reduce((sum, m) => sum + Math.min(m.loss, LOSS_CAP), 0) / own.length;

      perSide[color] = {
        counts,
        accuracy: Math.round(accuracy * 10) / 10,
        averageLoss: Math.round(avgLoss),
        moveCount: own.length
      };
    }

    // The single worst moment of the game, useful as a headline.
    const worst = moves.reduce(
      (acc, m) => (acc === null || m.loss > acc.loss ? m : acc),
      null
    );

    return { moves, evalCurve, white: perSide.w, black: perSide.b, worst };
  }
}

export const gameReview = new GameReview();
export { CLASSES };
