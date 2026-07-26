// Wizard Chess Board Component & Interactive UI Engine

import { soundEngine } from './audio.js';
import { particleEngine } from './particles.js';

// Unicode carved stone piece representations
const PIECE_UNICODE = {
  w: { p: '♙', r: '♖', n: '♘', b: '♗', q: '♕', k: '♔' },
  b: { p: '♟', r: '♜', n: '♞', b: '♝', q: '♛', k: '♚' }
};

export class WizardBoard {
  constructor(containerId, onMoveCallback) {
    this.container = document.getElementById(containerId);
    this.onMoveCallback = onMoveCallback;
    this.selectedSquare = null;
    this.legalMoves = [];
    this.isFlipped = false;
    this.game = null;
    this.lumosSquare = null;
  }

  attachGame(game) {
    this.game = game;
    this.render();
  }

  flip() {
    this.isFlipped = !this.isFlipped;
    this.render();
  }

  setLumosHint(square) {
    this.lumosSquare = square;
    if (square) {
      const el = this.container.querySelector(`[data-square="${square}"]`);
      if (el) {
        const rect = el.getBoundingClientRect();
        particleEngine.createLumosBeam(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
    }
    this.render();
  }

  clearSelection() {
    this.selectedSquare = null;
    this.legalMoves = [];
    this.render();
  }

  render() {
    if (!this.container || !this.game) return;

    this.container.innerHTML = '';
    const boardState = this.game.board();
    const history = this.game.history({ verbose: true });
    const lastMove = history.length > 0 ? history[history.length - 1] : null;

    const ranks = this.isFlipped ? [0, 1, 2, 3, 4, 5, 6, 7] : [7, 6, 5, 4, 3, 2, 1, 0];
    const files = this.isFlipped ? [7, 6, 5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5, 6, 7];

    for (const r of ranks) {
      for (const c of files) {
        const squareName = String.fromCharCode(97 + c) + (r + 1);
        const isLight = (r + c) % 2 !== 0;
        
        const squareEl = document.createElement('div');
        squareEl.className = `square ${isLight ? 'light' : 'dark'}`;
        squareEl.dataset.square = squareName;

        // Last move highlight
        if (lastMove && (lastMove.from === squareName || lastMove.to === squareName)) {
          squareEl.classList.add('last-move');
        }

        // Selected square highlight
        if (this.selectedSquare === squareName) {
          squareEl.classList.add('selected');
        }

        // Lumos Hint highlight
        if (this.lumosSquare === squareName) {
          squareEl.classList.add('highlight');
        }

        // Legal move highlight
        const legalMove = this.legalMoves.find(m => m.to === squareName);
        if (legalMove) {
          if (legalMove.captured) {
            squareEl.classList.add('capture-highlight');
          } else {
            squareEl.classList.add('highlight');
          }
        }

        // Square Coordinates Labels (ranks on first column, files on last row)
        if ((!this.isFlipped && c === 0) || (this.isFlipped && c === 7)) {
          const rankLabel = document.createElement('span');
          rankLabel.className = 'square-coord rank';
          rankLabel.textContent = (r + 1);
          squareEl.appendChild(rankLabel);
        }
        if ((!this.isFlipped && r === 0) || (this.isFlipped && r === 7)) {
          const fileLabel = document.createElement('span');
          fileLabel.className = 'square-coord file';
          fileLabel.textContent = String.fromCharCode(97 + c);
          squareEl.appendChild(fileLabel);
        }

        // Render Chess Piece if present
        const piece = boardState[7 - r][c];
        if (piece) {
          const pieceEl = document.createElement('div');
          pieceEl.className = `piece ${piece.color === 'w' ? 'white-piece' : 'black-piece'}`;
          pieceEl.textContent = PIECE_UNICODE[piece.color][piece.type];

          if (this.selectedSquare === squareName) {
            pieceEl.classList.add('levitating');
          }

          squareEl.appendChild(pieceEl);
        }

        // Click Handler for moves
        squareEl.addEventListener('click', () => this.handleSquareClick(squareName));

        this.container.appendChild(squareEl);
      }
    }
  }

  handleSquareClick(squareName) {
    if (!this.game) return;

    soundEngine.init();

    // If square is already selected, unselect it
    if (this.selectedSquare === squareName) {
      this.clearSelection();
      return;
    }

    // If clicking on a legal target move square
    const move = this.legalMoves.find(m => m.to === squareName);
    if (move) {
      this.executeWizardMove(move);
      return;
    }

    // Otherwise, check if clicking on one of own pieces
    const piece = this.game.get(squareName);
    if (piece && piece.color === this.game.turn()) {
      soundEngine.playSpellSelectSound();
      this.selectedSquare = squareName;
      this.legalMoves = this.game.moves({ square: squareName, verbose: true });
      this.lumosSquare = null;
      this.render();
    } else {
      this.clearSelection();
    }
  }

  // Animated Move execution with Spell Effects & Sound
  executeWizardMove(move) {
    const fromEl = this.container.querySelector(`[data-square="${move.from}"]`);
    const toEl = this.container.querySelector(`[data-square="${move.to}"]`);

    if (fromEl && toEl) {
      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      // Trigger move particle trail
      particleEngine.createMoveTrail(
        fromRect.left + fromRect.width / 2,
        fromRect.top + fromRect.height / 2,
        toRect.left + toRect.width / 2,
        toRect.top + toRect.height / 2
      );

      // Play Sound FX
      if (move.captured) {
        soundEngine.playCaptureSound();
        particleEngine.createCaptureBurst(
          toRect.left + toRect.width / 2,
          toRect.top + toRect.height / 2
        );
      } else {
        soundEngine.playMoveSound();
      }
    }

    // Apply move in chess logic
    const moveResult = this.game.move(move);

    if (this.game.inCheck()) {
      soundEngine.playCheckSound();
    }

    this.selectedSquare = null;
    this.legalMoves = [];
    this.lumosSquare = null;
    this.render();

    if (this.onMoveCallback) {
      this.onMoveCallback(moveResult);
    }
  }
}
