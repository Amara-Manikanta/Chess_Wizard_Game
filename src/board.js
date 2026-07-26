// Wizard Chess Board Component & Interactive UI Engine

import { soundEngine } from './audio.js';
import { particleEngine } from './particles.js';

// Official Cburnett Staunton Chess Piece SVG Vectors (Pixel-perfect & universally recognizable)
const PIECE_SVGS = {
  w: {
    k: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5M22.5 25s4.5-7.5 3-10.5c-1.5-3-6-3-7.5 0-1.5 3 3 10.5 3 10.5M11.5 37c5.5 3.5 16.5 3.5 22 0v-7s9-4.5 6-10.5c-3-6-9.5-3.5-10.5-1 0 0-2.5-4-6.5-4s-6.5 4-6.5 4c-1-2.5-7.5-5-10.5 1-3 6 6 10.5 6 10.5v7z" fill="#ffffff"/><path d="M11.5 30c5.5-3 16.5-3 22 0M11.5 33.5c5.5-3 16.5-3 22 0M11.5 37c5.5-3 16.5-3 22 0"/></g></svg>`,
    q: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM33 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-13.5V25L7 14l2 12z" fill="#ffffff"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1.5 1 3.5 2.5 0 21.5 0 24 0 0-2 0-2 1-3.5 1-2 2.5-2 2.5-4M11.5 30c5.5-3 16.5-3 22 0M11.5 33.5c5.5-3 16.5-3 22 0M11.5 37c5.5-3 16.5-3 22 0"/></g></svg>`,
    r: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14h23l-2 6H13l-2-6zM14 20v12h17V20H14z" fill="#ffffff"/><path d="M9 14l3-6h5v3h3V8h5v3h3V8h5l3 6H9z"/><path d="M12 33.5c5.5-3 16.5-3 22 0"/></g></svg>`,
    b: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#ffffff" stroke="#000" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.46 13.5-2 3.39 2.46 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2-4-2.5-11-2.5-15 0 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M17.5 26c-2.5-11 4-16 5-16s7.5 5 5 16c1.5 2 2 3 1 4-1.5 1-10.5 1-12 0-1-1-.5-2 1-4z"/></g><path d="M20 10c2.5 0 2.5 2.5 2.5 2.5s0-2.5 2.5-2.5M17.5 26h10M22.5 15v7.5M18.75 18.75h7.5" stroke="#000"/></g></svg>`,
    n: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#ffffff" stroke-linecap="butt"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2s-4.003 1-4-4c0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-2 1 1.25.5 2 2 1.5s4.32-.5 5.5 1c0 0-.08-.67 1-1z" fill="#ffffff"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM15 15.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" fill="#000"/><path d="M9 39h27" stroke="#000"/></g></svg>`,
    p: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 9a4 4 0 1 0 0 8 4 4 0 1 0 0-8zM22.5 17c-2.76 0-5 2.24-5 5 0 .58.1 1.14.28 1.66-2.07.96-3.28 2.87-3.28 5.09 0 2.22 1.21 4.13 3.28 5.09A5.02 5.02 0 0 0 17.5 35h10c0-.41-.05-.8-.14-1.16 2.07-.96 3.28-2.87 3.28-5.09 0-2.22-1.21-4.13-3.28-5.09A5.02 5.02 0 0 0 27.5 22c0-2.76-2.24-5-5-5z" fill="#ffffff"/><path d="M11.5 37c5.5-3 16.5-3 22 0"/></g></svg>`
  },
  b: {
    k: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5M22.5 25s4.5-7.5 3-10.5c-1.5-3-6-3-7.5 0-1.5 3 3 10.5 3 10.5M11.5 37c5.5 3.5 16.5 3.5 22 0v-7s9-4.5 6-10.5c-3-6-9.5-3.5-10.5-1 0 0-2.5-4-6.5-4s-6.5 4-6.5 4c-1-2.5-7.5-5-10.5 1-3 6 6 10.5 6 10.5v7z" fill="#1e2235"/><path d="M11.5 30c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M11.5 33.5c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M11.5 37c5.5-3 16.5-3 22 0" stroke="#d4af37"/></g></svg>`,
    q: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM33 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" fill="#1e2235"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-13.5V25L7 14l2 12z" fill="#1e2235"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1.5 1 3.5 2.5 0 21.5 0 24 0 0-2 0-2 1-3.5 1-2 2.5-2 2.5-4" fill="#1e2235"/><path d="M11.5 30c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M11.5 33.5c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M11.5 37c5.5-3 16.5-3 22 0" stroke="#d4af37"/></g></svg>`,
    r: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14h23l-2 6H13l-2-6zM14 20v12h17V20H14z" fill="#1e2235"/><path d="M9 14l3-6h5v3h3V8h5v3h3V8h5l3 6H9z" fill="#1e2235"/><path d="M12 33.5c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M14 28.5c5.5-3 11 0 17 0" stroke="#d4af37"/></g></svg>`,
    b: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#1e2235" stroke="#d4af37" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.46 13.5-2 3.39 2.46 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2-4-2.5-11-2.5-15 0 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M17.5 26c-2.5-11 4-16 5-16s7.5 5 5 16c1.5 2 2 3 1 4-1.5 1-10.5 1-12 0-1-1-.5-2 1-4z"/></g><path d="M20 10c2.5 0 2.5 2.5 2.5 2.5s0-2.5 2.5-2.5M17.5 26h10M22.5 15v7.5M18.75 18.75h7.5" stroke="#d4af37"/></g></svg>`,
    n: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#1e2235" stroke="#d4af37" stroke-linecap="butt"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2s-4.003 1-4-4c0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-2 1 1.25.5 2 2 1.5s4.32-.5 5.5 1c0 0-.08-.67 1-1z" fill="#1e2235" stroke="#d4af37"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM15 15.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" fill="#d4af37" stroke="#d4af37"/><path d="M9 39h27" stroke="#d4af37"/></g></svg>`,
    p: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 9a4 4 0 1 0 0 8 4 4 0 1 0 0-8zM22.5 17c-2.76 0-5 2.24-5 5 0 .58.1 1.14.28 1.66-2.07.96-3.28 2.87-3.28 5.09 0 2.22 1.21 4.13 3.28 5.09A5.02 5.02 0 0 0 17.5 35h10c0-.41-.05-.8-.14-1.16 2.07-.96 3.28-2.87 3.28-5.09 0-2.22-1.21-4.13-3.28-5.09A5.02 5.02 0 0 0 27.5 22c0-2.76-2.24-5-5-5z" fill="#1e2235"/><path d="M11.5 37c5.5-3 16.5-3 22 0" stroke="#d4af37"/></g></svg>`
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
