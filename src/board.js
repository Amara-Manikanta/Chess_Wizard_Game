// Wizard Chess Board Component & Interactive UI Engine

import { soundEngine } from './audio.js';
import { particleEngine } from './particles.js';

// SVG vector piece representations with distinct White (Ivory/Gold) vs Black (Obsidian/Violet) graphics
const PIECE_SVGS = {
  w: {
    p: '<svg viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-5.41 3.32-6.41 6.47h20.99c-1-3.15-3.41-5.41-6.41-6.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#FFF8E7" stroke="#3a2e05" stroke-width="1.5"/></svg>',
    r: '<svg viewBox="0 0 45 45"><path d="M9 39h27v-3H9v3zm3-3h21v-4H12v4zm0-23h3v5h3v-5h3v5h3v-5h3v5h3v-5h3v9H12v-9zm2 10h17v7H14v-7z" fill="#FFF8E7" stroke="#3a2e05" stroke-width="1.5"/></svg>',
    n: '<svg viewBox="0 0 45 45"><path d="M22 10c-3 0-6 2-7 5-2 1-3 4-2 7 1 2 3 3 5 3 0 2 2 4 4 4s4-2 4-4c2 0 4-1 5-3 1-3 0-6-2-7-1-3-4-5-7-5z" fill="#FFF8E7" stroke="#3a2e05" stroke-width="1.5"/></svg>',
    b: '<svg viewBox="0 0 45 45"><path d="M22.5 6c-3 0-5 3-5 7 0 2 1 4 2 5-3 2-4.5 5-4.5 9h15c0-4-1.5-7-4.5-9 1-1 2-3 2-5 0-4-2-7-5-7z" fill="#FFF8E7" stroke="#3a2e05" stroke-width="1.5"/></svg>',
    q: '<svg viewBox="0 0 45 45"><path d="M9 26c0 2 1.5 4 3.5 4h20c2 0 3.5-2 3.5-4L38 14l-6 5-4.5-8L22.5 17 18 11l-4.5 8L7.5 14 9 26z" fill="#FFF8E7" stroke="#3a2e05" stroke-width="1.5"/></svg>',
    k: '<svg viewBox="0 0 45 45"><path d="M22.5 6v3m-2-1.5h4M22.5 11c-4 0-7 3-7 7 0 3 2 5 4 7h6c2-2 4-4 4-7 0-4-3-7-7-7z" fill="#FFF8E7" stroke="#3a2e05" stroke-width="1.5"/></svg>'
  },
  b: {
    p: '<svg viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-5.41 3.32-6.41 6.47h20.99c-1-3.15-3.41-5.41-6.41-6.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#0f111a" stroke="#d4af37" stroke-width="2"/></svg>',
    r: '<svg viewBox="0 0 45 45"><path d="M9 39h27v-3H9v3zm3-3h21v-4H12v4zm0-23h3v5h3v-5h3v5h3v-5h3v5h3v-5h3v9H12v-9zm2 10h17v7H14v-7z" fill="#0f111a" stroke="#d4af37" stroke-width="2"/></svg>',
    n: '<svg viewBox="0 0 45 45"><path d="M22 10c-3 0-6 2-7 5-2 1-3 4-2 7 1 2 3 3 5 3 0 2 2 4 4 4s4-2 4-4c2 0 4-1 5-3 1-3 0-6-2-7-1-3-4-5-7-5z" fill="#0f111a" stroke="#d4af37" stroke-width="2"/></svg>',
    b: '<svg viewBox="0 0 45 45"><path d="M22.5 6c-3 0-5 3-5 7 0 2 1 4 2 5-3 2-4.5 5-4.5 9h15c0-4-1.5-7-4.5-9 1-1 2-3 2-5 0-4-2-7-5-7z" fill="#0f111a" stroke="#d4af37" stroke-width="2"/></svg>',
    q: '<svg viewBox="0 0 45 45"><path d="M9 26c0 2 1.5 4 3.5 4h20c2 0 3.5-2 3.5-4L38 14l-6 5-4.5-8L22.5 17 18 11l-4.5 8L7.5 14 9 26z" fill="#0f111a" stroke="#d4af37" stroke-width="2"/></svg>',
    k: '<svg viewBox="0 0 45 45"><path d="M22.5 6v3m-2-1.5h4M22.5 11c-4 0-7 3-7 7 0 3 2 5 4 7h6c2-2 4-4 4-7 0-4-3-7-7-7z" fill="#0f111a" stroke="#d4af37" stroke-width="2"/></svg>'
  }
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
          pieceEl.innerHTML = PIECE_SVGS[piece.color][piece.type];

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
    const matchingMoves = this.legalMoves.filter(m => m.to === squareName);
    if (matchingMoves.length > 0) {
      // Check if any matching move requires promotion
      const promoMove = matchingMoves.find(m => m.promotion);
      if (promoMove && this.onPromotionRequired) {
        this.onPromotionRequired(promoMove, (chosenPiece) => {
          const finalMove = matchingMoves.find(m => m.promotion === chosenPiece) || promoMove;
          this.executeWizardMove(finalMove);
        });
      } else {
        this.executeWizardMove(matchingMoves[0]);
      }
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
