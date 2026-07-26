// Engine Game Analysis Module, PGN/FEN Inspector & Full Game Replay Engine

import { chessEngine } from './engine.js';
import { Chess } from 'chess.js';

export class AnalysisEngine {
  constructor() {
    this.analysisGame = new Chess();
    this.historyMoves = []; // Array of verbose move objects
    this.currentStep = -1; // -1 is starting position
    this.autoPlayInterval = null;
  }

  // Load active played game or imported PGN into replay engine
  loadGame(sourceGame) {
    this.analysisGame = new Chess();
    const history = sourceGame.history({ verbose: true });
    this.historyMoves = [...history];
    this.currentStep = this.historyMoves.length - 1;
    this.replayToStep(this.currentStep);
  }

  loadFEN(fenString) {
    try {
      this.analysisGame.load(fenString);
      this.historyMoves = [];
      this.currentStep = -1;
      return true;
    } catch (e) {
      return false;
    }
  }

  loadPGN(pgnString) {
    try {
      const tempGame = new Chess();
      tempGame.loadPgn(pgnString);
      this.analysisGame = new Chess();
      this.historyMoves = tempGame.history({ verbose: true });
      this.currentStep = this.historyMoves.length - 1;
      this.replayToStep(this.currentStep);
      return true;
    } catch (e) {
      return false;
    }
  }

  replayToStep(stepIndex) {
    this.analysisGame.reset();
    const targetStep = Math.max(-1, Math.min(stepIndex, this.historyMoves.length - 1));
    for (let i = 0; i <= targetStep; i++) {
      if (this.historyMoves[i]) {
        this.analysisGame.move(this.historyMoves[i]);
      }
    }
    this.currentStep = targetStep;
    return this.analysisGame;
  }

  stepFirst() {
    return this.replayToStep(-1);
  }

  stepPrev() {
    return this.replayToStep(this.currentStep - 1);
  }

  stepNext() {
    return this.replayToStep(this.currentStep + 1);
  }

  stepLast() {
    return this.replayToStep(this.historyMoves.length - 1);
  }

  toggleAutoplay(onStepCallback) {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
      return false; // Autoplay stopped
    } else {
      this.autoPlayInterval = setInterval(() => {
        if (this.currentStep < this.historyMoves.length - 1) {
          const game = this.stepNext();
          if (onStepCallback) onStepCallback(game);
        } else {
          clearInterval(this.autoPlayInterval);
          this.autoPlayInterval = null;
          if (onStepCallback) onStepCallback(this.analysisGame, true); // finished
        }
      }, 1000);
      return true; // Autoplay active
    }
  }

  evaluateCurrentPosition() {
    const score = chessEngine.evaluateBoard(this.analysisGame);
    const bestMove = chessEngine.getBestMove(this.analysisGame, 'dumbledore');

    let evalText = '0.0';
    let fillPercentage = 50;

    if (Math.abs(score) > 5000) {
      evalText = score > 0 ? '# M' : '# -M';
      fillPercentage = score > 0 ? 100 : 0;
    } else {
      const pawnVal = (score / 100).toFixed(1);
      evalText = score > 0 ? `+${pawnVal}` : `${pawnVal}`;
      fillPercentage = Math.max(0, Math.min(100, 50 + (score / 100) * 5));
    }

    let classification = 'Neutral Position';
    if (Math.abs(score) > 400) {
      classification = score > 0 ? 'White Decisive Advantage 💎' : 'Black Decisive Advantage 💎';
    } else if (Math.abs(score) > 150) {
      classification = score > 0 ? 'White Advantage 🎯' : 'Black Advantage 🎯';
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
}

export const analysisEngine = new AnalysisEngine();
