// Engine Game Analysis Module & PGN/FEN Inspector

import { chessEngine } from './engine.js';

export class AnalysisEngine {
  constructor() {
    this.historyMoves = [];
    this.currentStep = -1;
    this.autoPlaying = false;
    this.timer = null;
  }

  evaluateCurrentPosition(game) {
    const score = chessEngine.evaluateBoard(game);
    const bestMove = chessEngine.getBestMove(game, 'dumbledore');

    // Convert centipawns score to formatted string (+1.5, -2.3, M3, etc.)
    let evalText = '0.0';
    let fillPercentage = 50; // default 50% equilibrium

    if (Math.abs(score) > 5000) {
      evalText = score > 0 ? '# M' : '# -M';
      fillPercentage = score > 0 ? 100 : 0;
    } else {
      const pawnVal = (score / 100).toFixed(1);
      evalText = score > 0 ? `+${pawnVal}` : `${pawnVal}`;
      // Map [-10, +10] pawns to [0%, 100%] fill height
      fillPercentage = Math.max(0, Math.min(100, 50 + (score / 100) * 5));
    }

    // Move quality classification
    let classification = 'Neutral Position';
    if (Math.abs(score) > 300) {
      classification = score > 0 ? 'White Decisive Advantage 💎' : 'Black Decisive Advantage 💎';
    } else if (Math.abs(score) > 100) {
      classification = score > 0 ? 'White Slight Advantage 🎯' : 'Black Slight Advantage 🎯';
    } else {
      classification = 'Equal Position ⚖️';
    }

    return {
      score,
      evalText,
      fillPercentage,
      bestMove: bestMove ? `${bestMove.from} → ${bestMove.to}` : 'None',
      classification
    };
  }

  parsePGN(game, pgnString) {
    try {
      game.loadPgn(pgnString);
      this.historyMoves = game.history({ verbose: true });
      this.currentStep = this.historyMoves.length - 1;
      return true;
    } catch (e) {
      return false;
    }
  }
}

export const analysisEngine = new AnalysisEngine();
