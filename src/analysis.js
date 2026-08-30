// Engine Game Analysis Module, PGN/FEN Inspector & Full Game Replay Engine

import { chessEngine } from './engine.js';
import { formatEval } from './ai.js';
import { Chess } from 'chess.js';

export class AnalysisEngine {
  constructor() {
    this.analysisGame = new Chess();
    this.historyMoves = []; // Array of verbose move objects
    this.currentStep = -1; // -1 is starting position
    this.autoPlayInterval = null;
  }

  // Load active played game into replay engine and start at beginning for easy step-by-step review
  loadGame(sourceGame) {
    this.analysisGame = new Chess();
    const history = sourceGame.history({ verbose: true });
    this.historyMoves = [...history];
    this.currentStep = -1;
    this.replayToStep(-1);
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
      this.currentStep = -1;
      this.replayToStep(-1);
      return true;
    } catch (e) {
      return false;
    }
  }

  replayToStep(stepIndex) {
    this.analysisGame.reset();
    const targetStep = Math.max(-1, Math.min(stepIndex, this.historyMoves.length - 1));
    for (let i = 0; i <= targetStep; i++) {
      const m = this.historyMoves[i];
      if (m) {
        try {
          if (typeof m === 'string') {
            this.analysisGame.move(m);
          } else if (m.san) {
            this.analysisGame.move(m.san);
          } else if (m.from && m.to) {
            this.analysisGame.move({ from: m.from, to: m.to, promotion: m.promotion || 'q' });
          }
        } catch (err) {
          console.warn('Replay step move error:', err);
        }
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

  // Cheap, synchronous snapshot of a position. Called after every move for the
  // eval bar, so it must not run a search — deep analysis goes through
  // ai.analyse() instead, which is async and runs off the main thread.
  // Defaults to the replay board, but callers may pass the live game.
  evaluateCurrentPosition(game = this.analysisGame) {
    const score = chessEngine.evaluateBoard(game);
    const { text: evalText, fill: fillPercentage } = formatEval(score, null);

    let classification = 'Neutral Position';
    if (Math.abs(score) > 400) {
      classification = score > 0 ? 'White Decisive Advantage 💎' : 'Black Decisive Advantage 💎';
    } else if (Math.abs(score) > 150) {
      classification = score > 0 ? 'White Advantage 🎯' : 'Black Advantage 🎯';
    } else {
      classification = 'Equal Position ⚖️';
    }

    let stepText = `Start (0 / ${this.historyMoves.length})`;
    if (this.currentStep >= 0 && this.historyMoves[this.currentStep]) {
      const lastMove = this.historyMoves[this.currentStep];
      stepText = `Move ${this.currentStep + 1}/${this.historyMoves.length} (${lastMove.san})`;
    }

    return { score, evalText, fillPercentage, classification, stepText };
  }
}

export const analysisEngine = new AnalysisEngine();
