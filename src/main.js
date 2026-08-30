// Main App Orchestrator for 3D Wizard's Chess & Learning Academy

import './style.css';
import { Chess } from 'chess.js';
import { WizardBoard } from './board.js';
import { WizardBoard3D } from './board3d.js';
import { soundEngine } from './audio.js';
import { particleEngine } from './particles.js';
import { chessEngine } from './engine.js';
import { puzzleManager, PuzzleManager } from './puzzles.js';
import { academyManager } from './academy.js';
import { analysisEngine } from './analysis.js';
import { ai, formatEval } from './ai.js';
import { gameReview, CLASSES } from './review.js';
import { ChessClock, formatClock, TIME_CONTROLS } from './clock.js';
import { identifyOpening } from './openings.js';
import { storage, exportPGN, downloadPGN } from './storage.js';

class WizardApp {
  constructor() {
    this.game = new Chess();
    this.currentMode = 'play'; // 'play', 'puzzles', 'academy', 'analysis'
    this.is3D = false; // Default to original carved stone 2D board
    this.aiOpponent = 'ron';
    this.isAiThinking = false;
    this.capturedPieces = { w: [], b: [] };
    this.twoPlayerMode = false;
    this.reviewData = null;
    this.playerColor = 'w';

    // Puzzle progress is persisted, so hand the manager the saved record.
    this.puzzles = new PuzzleManager(storage.puzzles);

    this.clock = new ChessClock({ initialMs: 0, incrementMs: 0 });
    this.clock.onTick = () => this.updateClockUI();
    this.clock.onFlag = (loser) => this.onFlagFall(loser);

    this.init();
  }

  init() {
    // 1. Initialize Canvas Particle Overlay
    particleEngine.init('magic-canvas');

    // 2. Initialize 2D Carved Stone Board as primary default
    this.board2d = new WizardBoard('chess-board', (moveResult) => this.onPlayerMove(moveResult));
    this.board3d = null;

    this.activeBoard = this.board2d;
    this.activeBoard.attachGame(this.game);

    this.bindNavigation();
    this.bindHeaderControls();
    this.bindBoardControls();
    this.bindAiSelector();
    this.bindPuzzles();
    this.bindAcademy();
    this.bindAnalysis();
    this.bindPromotionModal();
    this.bindGameOverModal();
    this.bindGameFeatures();

    this.updateEvaluationBar();
    this.updateMoveHistoryUI();
    this.updateTurnBanner();
    this.updatePuzzleStats();
    this.updateRecordUI();
    this.updateClockUI();

    // Bring up Stockfish in the background; the built-in engine covers play
    // until it is ready, so nothing blocks on this.
    this.initEngine();
  }

  async initEngine() {
    const backend = await ai.init();
    const badge = document.getElementById('engine-badge');
    if (badge) {
      badge.textContent = ai.usingStockfish ? '⚡ Stockfish' : '📜 Built-in engine';
      badge.title = ai.usingStockfish
        ? 'Stockfish 10 running in a Web Worker'
        : 'Stockfish unavailable — using the built-in engine';
      badge.classList.toggle('fallback', !ai.usingStockfish);
    }
    return backend;
  }

  // --- PROMOTION MODAL HANDLER ---
  bindPromotionModal() {
    const modal = document.getElementById('promotion-modal');
    const promoBtns = document.querySelectorAll('.promo-btn');

    const handlePromotion = (move, callback) => {
      modal.classList.remove('hidden');

      const onChoice = (e) => {
        const piece = e.currentTarget.dataset.piece || 'q';
        modal.classList.add('hidden');
        promoBtns.forEach(b => b.removeEventListener('click', onChoice));
        callback(piece);
      };

      promoBtns.forEach(b => b.addEventListener('click', onChoice));
    };

    // board3d is created lazily on first 3D toggle, so stash the handler and
    // apply it to whichever board exists now or later.
    this.promotionHandler = handlePromotion;
    this.board2d.onPromotionRequired = handlePromotion;
    if (this.board3d) this.board3d.onPromotionRequired = handlePromotion;
  }

  // --- GAME OVER CELEBRATION MODAL ---
  bindGameOverModal() {
    const modal = document.getElementById('game-over-modal');
    document.getElementById('modal-restart-btn')?.addEventListener('click', () => {
      modal.classList.add('hidden');
      this.resetGame();
    });

    document.getElementById('modal-analyze-btn')?.addEventListener('click', () => {
      modal.classList.add('hidden');
      const analysisNav = document.querySelector('.nav-btn[data-tab="analysis"]');
      if (analysisNav) analysisNav.click();
      this.runGameReview();
    });
  }

  showGameOverCelebration(outcome, reason = '') {
    const modal = document.getElementById('game-over-modal');
    const badge = document.getElementById('modal-badge');
    const title = document.getElementById('modal-title');
    const msg = document.getElementById('modal-message');
    const movesStat = document.getElementById('modal-stat-moves');
    const opponentStat = document.getElementById('modal-stat-opponent');

    if (!modal) return;

    this.clock.pause();
    storage.recordGameResult(outcome);
    this.updateRecordUI();

    if (outcome === 'win') {
      badge.className = 'celebration-badge victory';
      badge.textContent = '🏆 VICTORY!';
      title.textContent = 'Checkmate Victory!';
      msg.textContent = reason ||
        `You have defeated ${this.getAiName(this.aiOpponent)} with spellbinding precision!`;
      soundEngine.playVictoryFanfare();
      particleEngine.createConfettiBurst();
    } else if (outcome === 'draw') {
      badge.className = 'celebration-badge draw';
      badge.textContent = '🤝 DRAW';
      title.textContent = 'An Honourable Draw';
      msg.textContent = reason || 'Neither wizard could break the other\'s defences.';
    } else {
      badge.className = 'celebration-badge defeat';
      badge.textContent = '💀 DEFEAT';
      title.textContent = 'Wizard Duel Lost!';
      msg.textContent = reason ||
        `${this.getAiName(this.aiOpponent)} claimed victory this time. Re-arm your strategy and try again!`;
      soundEngine.playDefeatSound();
    }

    if (movesStat) movesStat.textContent = this.game.history().length;
    if (opponentStat) {
      opponentStat.textContent = this.twoPlayerMode
        ? 'Local opponent'
        : this.getAiName(this.aiOpponent);
    }

    modal.classList.remove('hidden');
  }

  // --- NAVIGATION & TABS ---
  bindNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        if (!tab) return;

        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        const activeTabEl = document.getElementById(`tab-${tab}`);
        if (activeTabEl) activeTabEl.classList.add('active');

        this.currentMode = tab;
        this.onTabSwitched(tab);
      });
    });
  }

  onTabSwitched(tab) {
    // Leaving play pauses the clock so time is not lost while browsing lessons.
    if (tab !== 'play') this.clock.pause();

    if (tab === 'puzzles') {
      this.loadCurrentPuzzle();
    } else if (tab === 'academy') {
      this.renderAcademySection('openings');
    } else if (tab === 'analysis') {
      analysisEngine.loadGame(this.game);
      this.activeBoard.attachGame(analysisEngine.analysisGame);
      this.runAnalysisUpdate();
    } else if (tab === 'play') {
      this.activeBoard.attachGame(this.game);
      this.updateEvaluationBar();
      this.updateTurnBanner();
      if (!this.game.isGameOver() && this.game.history().length > 0) {
        this.clock.start(this.game.turn());
      }
    }
  }

  // --- HEADER CONTROLS ---
  bindHeaderControls() {
    const soundBtn = document.getElementById('sound-toggle');
    const soundIcon = document.getElementById('sound-icon');

    soundBtn?.addEventListener('click', () => {
      const isMuted = soundEngine.toggleMute();
      soundIcon.textContent = isMuted ? '🔇' : '🔊';
    });

    const themeBtn = document.getElementById('theme-toggle');
    themeBtn?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      document.body.classList.toggle('dark-aura');
    });
  }

  // --- BOARD CONTROLS ---
  bindBoardControls() {
    const viewBtn = document.getElementById('view-mode-btn');
    viewBtn?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      this.is3D = !this.is3D;
      viewBtn.textContent = this.is3D ? '🧊 3D Mode (Active)' : '📜 Carved Stone Board';

      const boardContainer = document.getElementById('chess-board');
      if (this.is3D) {
        if (!this.board3d) {
          this.board3d = new WizardBoard3D('chess-board', (moveResult) => this.onPlayerMove(moveResult));
          this.board3d.onPromotionRequired = this.promotionHandler;
        }
        this.activeBoard = this.board3d;
        boardContainer?.classList.add('mode-3d');
      } else {
        this.activeBoard = this.board2d;
        boardContainer?.classList.remove('mode-3d');
      }

      this.activeBoard.attachGame(this.game);
    });

    document.getElementById('flip-board-btn')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      this.activeBoard.flip();
    });

    document.getElementById('reset-board-btn')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      this.resetGame();
    });

    document.getElementById('hint-btn')?.addEventListener('click', () => {
      this.castLumosHint();
    });
  }

  // --- CLOCK, UNDO, EXPORT, TWO-PLAYER ---
  bindGameFeatures() {
    // Time control selector
    const tcSelect = document.getElementById('time-control-select');
    if (tcSelect) {
      tcSelect.innerHTML = TIME_CONTROLS
        .map(tc => `<option value="${tc.id}">${tc.label}</option>`)
        .join('');
      tcSelect.value = storage.preferences.timeControl || 'unlimited';
      this.applyTimeControl(tcSelect.value, false);

      tcSelect.addEventListener('change', (e) => {
        soundEngine.playSpellSelectSound();
        storage.setPreference('timeControl', e.target.value);
        this.applyTimeControl(e.target.value, true);
      });
    }

    document.getElementById('undo-btn')?.addEventListener('click', () => this.undoMove());

    document.getElementById('export-pgn-btn')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      const opening = identifyOpening(this.game.history());
      const pgn = exportPGN(this.game, {
        white: this.twoPlayerMode ? 'White' : 'Player',
        black: this.twoPlayerMode ? 'Black' : this.getAiName(this.aiOpponent),
        opening: opening ? opening.name : null
      });
      const stamp = new Date().toISOString().slice(0, 10);
      downloadPGN(pgn, `wizard-chess-${stamp}.pgn`);
      this.updateCommentary('Duel transcript saved as a PGN file.');
    });

    const twoPlayerBtn = document.getElementById('two-player-btn');
    twoPlayerBtn?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      this.twoPlayerMode = !this.twoPlayerMode;
      twoPlayerBtn.classList.toggle('active', this.twoPlayerMode);
      twoPlayerBtn.textContent = this.twoPlayerMode
        ? '👥 Two Players (On)'
        : '👤 vs Wizard AI';
      document.getElementById('opponent-selector')?.classList.toggle('disabled', this.twoPlayerMode);
      this.updateCommentary(this.twoPlayerMode
        ? 'Local duel: both wizards share this board.'
        : `You are now dueling ${this.getAiName(this.aiOpponent)}!`);
      this.resetGame();
    });

    document.getElementById('review-btn')?.addEventListener('click', () => this.runGameReview());
  }

  applyTimeControl(id, restart) {
    const tc = TIME_CONTROLS.find(t => t.id === id) || TIME_CONTROLS[0];
    this.clock.reset({ initialMs: tc.initialMs, incrementMs: tc.incrementMs });
    document.getElementById('clock-panel')?.classList.toggle('hidden', !this.clock.enabled);
    this.updateClockUI();
    if (restart) this.resetGame();
  }

  onFlagFall(loser) {
    this.updateClockUI();
    const humanLost = this.twoPlayerMode ? false : loser === this.playerColor;
    const who = loser === 'w' ? 'White' : 'Black';
    if (this.twoPlayerMode) {
      this.showGameOverCelebration('draw', `${who} ran out of time — the other side wins!`);
    } else {
      this.showGameOverCelebration(humanLost ? 'loss' : 'win', `${who} ran out of time!`);
    }
  }

  updateClockUI() {
    const panel = document.getElementById('clock-panel');
    if (!panel || !this.clock.enabled) return;
    const whiteEl = document.getElementById('clock-white');
    const blackEl = document.getElementById('clock-black');
    if (whiteEl) {
      whiteEl.textContent = formatClock(this.clock.timeFor('w'));
      whiteEl.classList.toggle('running', this.clock.activeColor === 'w');
      whiteEl.classList.toggle('low', this.clock.timeFor('w') < 30000);
    }
    if (blackEl) {
      blackEl.textContent = formatClock(this.clock.timeFor('b'));
      blackEl.classList.toggle('running', this.clock.activeColor === 'b');
      blackEl.classList.toggle('low', this.clock.timeFor('b') < 30000);
    }
  }

  // Take back the last move. Against the AI that means two plies, so the human
  // gets their own move back rather than simply handing the AI another turn.
  undoMove() {
    if (this.isAiThinking) return;
    if (this.currentMode !== 'play') return;
    if (this.game.history().length === 0) return;

    soundEngine.playSpellSelectSound();

    const plies = (!this.twoPlayerMode && this.game.history().length >= 2) ? 2 : 1;
    for (let i = 0; i < plies; i++) {
      const undone = this.game.undo();
      if (!undone) break;
      // Keep the captured-piece tally in step with the board.
      if (undone.captured) {
        const defender = undone.color === 'w' ? 'b' : 'w';
        const list = this.capturedPieces[defender];
        const idx = list.lastIndexOf(undone.captured);
        if (idx !== -1) list.splice(idx, 1);
      }
    }

    this.activeBoard.attachGame(this.game);
    this.updateMoveHistoryUI();
    this.updateEvaluationBar();
    this.updateTurnBanner();
    this.updateOpeningUI();
    this.updateCommentary('Move rewound. The board remembers a different past.');
  }

  resetGame() {
    this.game.reset();
    this.capturedPieces = { w: [], b: [] };
    this.isAiThinking = false;
    this.reviewData = null;
    this.clock.reset();
    this.activeBoard.attachGame(this.game);
    this.updateEvaluationBar();
    this.updateMoveHistoryUI();
    this.updateTurnBanner();
    this.updateClockUI();
    this.updateOpeningUI();
    this.updateCommentary('New game started! Choose your opponent and cast your first move.');
  }

  async castLumosHint() {
    if (this.game.isGameOver()) return;
    soundEngine.playSpellSelectSound();

    if (this.currentMode === 'puzzles') {
      const puzzle = this.puzzles.getCurrentPuzzle();
      if (puzzle && puzzle.solutionVerbose.length > 0) {
        this.activeBoard.setLumosHint(puzzle.solutionVerbose[0].from);
      }
      return;
    }

    this.updateCommentary('Casting Lumos — consulting the engine...');
    const result = await ai.analyse(this.game, { depth: 14 });
    if (result && result.move) {
      this.activeBoard.setLumosHint(result.move.from);
      this.updateCommentary(`Lumos reveals a promising move from ${result.move.from}.`);
    } else {
      this.updateCommentary('Lumos flickers — no clear move found.');
    }
  }

  // --- AI OPPONENT SELECTOR ---
  bindAiSelector() {
    const cards = document.querySelectorAll('.opponent-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (this.twoPlayerMode) return;
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.aiOpponent = card.dataset.ai || 'ron';
        soundEngine.playSpellSelectSound();
        this.updateCommentary(`You are now dueling ${this.getAiName(this.aiOpponent, true)}!`);
      });
    });
  }

  // --- PLAYER MOVE CALLBACK ---
  onPlayerMove(move) {
    if (!move) return;

    if (move.captured) {
      const defender = move.color === 'w' ? 'b' : 'w';
      this.capturedPieces[defender].push(move.captured);
    }

    this.updateMoveHistoryUI();
    this.updateEvaluationBar();
    this.updateTurnBanner();
    this.updateOpeningUI();

    if (this.currentMode === 'puzzles') {
      this.handlePuzzleMove(move);
      return;
    }

    this.clock.press(move.color);
    this.updateClockUI();

    if (this.checkGameEnd()) return;

    // Trigger AI response when playing against the engine.
    if (this.currentMode === 'play' && !this.twoPlayerMode &&
        this.game.turn() !== this.playerColor && !this.isAiThinking) {
      this.triggerAiMove();
    }
  }

  // Returns true when the game is over and the modal has been shown.
  checkGameEnd() {
    if (!this.game.isGameOver()) return false;

    this.clock.pause();

    if (this.game.isCheckmate()) {
      // The side to move is the one that got mated.
      const loser = this.game.turn();
      if (this.twoPlayerMode) {
        const winner = loser === 'w' ? 'Black' : 'White';
        this.updateCommentary(`⚡ CHECKMATE! ${winner} wins the duel!`);
        this.showGameOverCelebration('win', `${winner} delivers checkmate!`);
      } else if (loser === this.playerColor) {
        this.updateCommentary(`⚡ CHECKMATE! ${this.getAiName(this.aiOpponent)} wins the duel!`);
        this.showGameOverCelebration('loss');
      } else {
        this.updateCommentary('⚡ CHECKMATE! Victory has been claimed on the enchanted board!');
        this.showGameOverCelebration('win');
      }
      return true;
    }

    let reason = 'The duel ends in an honourable draw.';
    if (this.game.isStalemate()) reason = 'Stalemate! No legal moves remain.';
    else if (this.game.isThreefoldRepetition()) reason = 'Threefold repetition — the position keeps returning.';
    else if (this.game.isInsufficientMaterial()) reason = 'Neither side has enough material to mate.';
    else if (this.game.isDraw()) reason = 'Fifty moves without a capture or pawn move.';

    this.updateCommentary(reason);
    this.showGameOverCelebration('draw', reason);
    return true;
  }

  // --- AI MOVE EXECUTION ---
  async triggerAiMove() {
    this.isAiThinking = true;
    this.setThinking(true);
    this.updateCommentary(`${this.getAiName(this.aiOpponent)} is contemplating their spell move...`);

    try {
      const bestMove = await ai.getMove(this.game, this.aiOpponent);

      if (bestMove && !this.game.isGameOver()) {
        this.activeBoard.executeWizardMove(bestMove);
        // executeWizardMove routes back through onPlayerMove, which advances
        // the clock, refreshes the UI and checks for game end.
      }
    } catch (e) {
      console.error('AI move failed:', e);
      this.updateCommentary('The engine faltered. Try another move.');
    } finally {
      this.isAiThinking = false;
      this.setThinking(false);
    }

    if (!this.game.isGameOver()) {
      if (this.game.inCheck()) {
        this.updateCommentary(`Check! ${this.getAiName(this.aiOpponent)} puts your King under attack!`);
      } else {
        this.updateCommentary(this.getAiQuote(this.aiOpponent));
      }
    }
  }

  setThinking(on) {
    document.getElementById('turn-banner')?.classList.toggle('thinking', on);
    const hint = document.getElementById('hint-btn');
    if (hint) hint.disabled = on;
  }

  getAiName(id, full = false) {
    const short = { ron: 'Ron', hermione: 'Hermione', snape: 'Snape', dumbledore: 'Dumbledore' };
    const long = {
      ron: 'Ron Weasley', hermione: 'Hermione Granger',
      snape: 'Severus Snape', dumbledore: 'Albus Dumbledore'
    };
    return (full ? long[id] : short[id]) || 'Opponent';
  }

  getAiQuote(id) {
    const quotes = {
      ron: 'Check this out! Knight tactics incoming!',
      hermione: 'According to grandmaster theory, this square gives superior piece activity.',
      snape: 'Foolish move. Your position begins to crumble.',
      dumbledore: 'A fascinating choice. Let us see how the position unfolds.'
    };
    return quotes[id] || 'Your turn to move!';
  }

  // --- DAILY PUZZLES CONTROLS ---
  bindPuzzles() {
    const categoryBtns = document.querySelectorAll('.puzzle-category-btn');
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.puzzles.setCategory(btn.dataset.category || 'mate1');
        this.loadCurrentPuzzle();
      });
    });

    document.getElementById('next-puzzle-btn')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      this.puzzles.nextPuzzle();
      this.loadCurrentPuzzle();
    });

    document.getElementById('solve-reveal-btn')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      const puzzle = this.puzzles.getCurrentPuzzle();
      if (puzzle && puzzle.solutionVerbose.length > 0) {
        this.game.load(puzzle.fen);
        this.activeBoard.attachGame(this.game);
        const target = puzzle.solutionVerbose[0];
        // Resolve against the real legal move list so promotions and captures
        // carry the right metadata.
        const move = this.game.moves({ verbose: true })
          .find(m => m.from === target.from && m.to === target.to);
        if (move) this.activeBoard.executeWizardMove(move);
      }
    });
  }

  handlePuzzleMove(move) {
    const puzzle = this.puzzles.getCurrentPuzzle();
    const { correct, alreadyScored } = this.puzzles.verifyMove(move);
    const statusEl = document.getElementById('puzzle-status');
    if (!statusEl) return;

    if (correct) {
      soundEngine.playPuzzleSuccessSound();
      statusEl.className = 'puzzle-status success';
      statusEl.textContent = alreadyScored
        ? '✨ Correct! (already attempted — no XP this time)'
        : '✨ Spellbinding! Puzzle Solved Correctly! (+15 XP)';
      if (!alreadyScored) storage.recordPuzzleResult(puzzle?.id, true);
    } else {
      statusEl.className = 'puzzle-status failed';
      statusEl.textContent = '❌ Incorrect Move! Try again or cast Lumos for a hint.';
      if (!alreadyScored) storage.recordPuzzleResult(puzzle?.id, false);
    }
    this.updatePuzzleStats();
  }

  loadCurrentPuzzle() {
    const puzzle = this.puzzles.getCurrentPuzzle();
    if (!puzzle) return;

    this.game.load(puzzle.fen);
    this.activeBoard.attachGame(this.game);

    document.getElementById('puzzle-title').textContent = puzzle.title;
    document.getElementById('puzzle-desc').textContent = puzzle.description;
    document.getElementById('puzzle-theme-badge').textContent = puzzle.category;

    const statusEl = document.getElementById('puzzle-status');
    if (statusEl) {
      statusEl.className = 'puzzle-status';
      const side = this.game.turn() === 'w' ? 'White' : 'Black';
      statusEl.textContent = this.puzzles.isSolved(puzzle.id)
        ? `✓ Already solved — find the winning move for ${side} again!`
        : `Find the winning move for ${side}!`;
    }

    this.updatePuzzleStats();
    this.updateEvaluationBar();
    this.updateTurnBanner();
  }

  updatePuzzleStats() {
    const p = storage.puzzles;
    const set = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };
    set('puzzle-streak', `${p.streak} 🔥`);
    set('puzzle-rating', `${p.score} ⚡`);
    set('puzzles-solved', `${p.solved}/${this.puzzles.totalPuzzles} 🎯`);
  }

  updateRecordUI() {
    const el = document.getElementById('player-record');
    if (!el) return;
    const r = storage.record;
    el.textContent = `${r.wins}W · ${r.losses}L · ${r.draws}D`;
  }

  // --- TRAINING ACADEMY ---
  bindAcademy() {
    document.querySelectorAll('.acad-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.acad-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        soundEngine.playSpellSelectSound();
        this.renderAcademySection(btn.dataset.section || 'openings');
      });
    });

    const varSelect = document.getElementById('tutor-variation-select');
    varSelect?.addEventListener('change', (e) => {
      soundEngine.playSpellSelectSound();
      const varId = e.target.value;
      if (this.activeLesson && this.activeLesson.variations) {
        const found = this.activeLesson.variations.find(v => v.id === varId);
        if (found) {
          this.activeVariation = found;
          this.applyAcademyStep(0);
        }
      }
    });

    const toggleVoiceBtn = document.getElementById('tutor-voice-toggle');
    this.voiceTutorEnabled = Boolean(storage.preferences.voiceTutor);
    if (toggleVoiceBtn) {
      toggleVoiceBtn.classList.toggle('muted', !this.voiceTutorEnabled);
      toggleVoiceBtn.textContent = this.voiceTutorEnabled ? '🔊 Voice: ON' : '🔇 Voice: OFF';
      toggleVoiceBtn.addEventListener('click', () => {
        this.voiceTutorEnabled = !this.voiceTutorEnabled;
        storage.setPreference('voiceTutor', this.voiceTutorEnabled);
        toggleVoiceBtn.classList.toggle('muted', !this.voiceTutorEnabled);
        toggleVoiceBtn.textContent = this.voiceTutorEnabled ? '🔊 Voice: ON' : '🔇 Voice: OFF';
        if (!this.voiceTutorEnabled) soundEngine.stopSpeech();
      });
    }

    document.getElementById('tutor-reset')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      this.applyAcademyStep(0);
    });

    document.getElementById('tutor-prev')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      if (this.activeLessonStep > 0) this.applyAcademyStep(this.activeLessonStep - 1);
    });

    document.getElementById('tutor-next')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      const seq = this.getActiveSequence();
      if (seq && this.activeLessonStep < seq.length - 1) {
        this.applyAcademyStep(this.activeLessonStep + 1);
      }
    });

    const autoBtn = document.getElementById('tutor-autoplay');
    autoBtn?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      if (this.tutorAutoplayTimer) {
        clearInterval(this.tutorAutoplayTimer);
        this.tutorAutoplayTimer = null;
        autoBtn.classList.remove('active');
      } else {
        autoBtn.classList.add('active');
        this.tutorAutoplayTimer = setInterval(() => {
          const seq = this.getActiveSequence();
          if (seq && this.activeLessonStep < seq.length - 1) {
            this.applyAcademyStep(this.activeLessonStep + 1);
          } else {
            clearInterval(this.tutorAutoplayTimer);
            this.tutorAutoplayTimer = null;
            autoBtn.classList.remove('active');
          }
        }, 4500);
      }
    });
  }

  getActiveSequence() {
    if (this.activeVariation && this.activeVariation.moveSequence) {
      return this.activeVariation.moveSequence;
    }
    if (this.activeLesson && this.activeLesson.moveSequence) {
      return this.activeLesson.moveSequence;
    }
    return [];
  }

  renderAcademySection(section) {
    const container = document.getElementById('academy-lesson-container');
    if (!container) return;

    container.innerHTML = '';
    const lessons = academyManager.getLessons(section);

    lessons.forEach((lesson, index) => {
      const card = document.createElement('div');
      card.className = `lesson-card ${index === 0 ? 'active' : ''}`;
      const varCount = lesson.variations ? lesson.variations.length : 1;
      card.innerHTML = `
        <h4>${lesson.title}</h4>
        <p>${lesson.description}</p>
        <div class="lesson-moves">Available Sub-Lines: ${varCount} variation(s)</div>
      `;

      card.addEventListener('click', () => {
        container.querySelectorAll('.lesson-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        soundEngine.playSpellSelectSound();
        this.loadAcademyLesson(lesson);
      });

      container.appendChild(card);
    });

    if (lessons.length > 0) this.loadAcademyLesson(lessons[0]);
  }

  loadAcademyLesson(lesson) {
    this.activeLesson = lesson;
    const varSelect = document.getElementById('tutor-variation-select');

    if (varSelect) {
      varSelect.innerHTML = '';
      if (lesson.variations && lesson.variations.length > 0) {
        lesson.variations.forEach(v => {
          const opt = document.createElement('option');
          opt.value = v.id;
          opt.textContent = v.name;
          varSelect.appendChild(opt);
        });
        this.activeVariation = lesson.variations[0];
        varSelect.style.display = 'inline-block';
      } else {
        this.activeVariation = null;
        varSelect.style.display = 'none';
      }
    }

    this.applyAcademyStep(0);
  }

  applyAcademyStep(stepIndex) {
    const sequence = this.getActiveSequence();
    if (!sequence || sequence.length === 0) return;

    this.activeLessonStep = Math.max(0, Math.min(stepIndex, sequence.length - 1));

    // Endgame lessons begin from a set position rather than the initial board.
    const startFen = (this.activeVariation && this.activeVariation.startFen) ||
                     this.activeLesson.startFen || null;
    if (startFen) {
      try {
        this.game.load(startFen);
      } catch (e) {
        console.warn('Academy start position invalid:', startFen, e);
        this.game.reset();
      }
    } else {
      this.game.reset();
    }

    for (let i = 0; i <= this.activeLessonStep; i++) {
      if (sequence[i] && sequence[i].san) {
        try {
          this.game.move(sequence[i].san);
        } catch (e) {
          console.warn('Academy move error:', sequence[i].san, e);
        }
      }
    }

    this.activeBoard.attachGame(this.game);
    this.updateEvaluationBar();

    const currentData = sequence[this.activeLessonStep];
    const titleEl = document.getElementById('tutor-lesson-title');
    const badgeEl = document.getElementById('tutor-step-badge');
    const speechEl = document.getElementById('tutor-speech-text');
    const tipEl = document.getElementById('tutor-tip-text');

    const varTitle = this.activeVariation
      ? `${this.activeLesson.title} — ${this.activeVariation.name}`
      : this.activeLesson.title;

    if (titleEl) titleEl.textContent = varTitle;
    if (badgeEl) badgeEl.textContent = `Move Step ${this.activeLessonStep + 1} of ${sequence.length}: ${currentData.title}`;
    if (speechEl) speechEl.textContent = `"${currentData.speech}"`;
    if (tipEl) tipEl.textContent = `💡 Tip: ${currentData.tip}`;

    if (this.voiceTutorEnabled) soundEngine.speakExplanation(currentData.speech);
  }

  // --- GAME ANALYSIS ---
  bindAnalysis() {
    document.getElementById('load-fen-btn')?.addEventListener('click', () => {
      const fenInput = document.getElementById('fen-input').value.trim();
      if (!fenInput) return;
      if (analysisEngine.loadFEN(fenInput)) {
        this.activeBoard.attachGame(analysisEngine.analysisGame);
        soundEngine.playSpellSelectSound();
        this.runAnalysisUpdate();
      } else {
        this.setAnalysisNotice('Invalid FEN format — check the position string.', true);
      }
    });

    document.getElementById('load-pgn-btn')?.addEventListener('click', () => {
      const pgnInput = document.getElementById('pgn-input').value.trim();
      if (!pgnInput) return;
      if (analysisEngine.loadPGN(pgnInput)) {
        this.activeBoard.attachGame(analysisEngine.analysisGame);
        soundEngine.playSpellSelectSound();
        this.runAnalysisUpdate();
      } else {
        this.setAnalysisNotice('Invalid PGN — could not read that game transcript.', true);
      }
    });

    const step = (fn) => {
      soundEngine.playSpellSelectSound();
      const game = fn();
      this.activeBoard.attachGame(game);
      this.runAnalysisUpdate();
    };

    document.getElementById('step-first')?.addEventListener('click', () => step(() => analysisEngine.stepFirst()));
    document.getElementById('step-prev')?.addEventListener('click', () => step(() => analysisEngine.stepPrev()));
    document.getElementById('step-next')?.addEventListener('click', () => step(() => analysisEngine.stepNext()));
    document.getElementById('step-last')?.addEventListener('click', () => step(() => analysisEngine.stepLast()));

    const autoBtn = document.getElementById('auto-play-btn');
    autoBtn?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      const isPlaying = analysisEngine.toggleAutoplay((game) => {
        this.activeBoard.attachGame(game);
        this.runAnalysisUpdate();
      });
      autoBtn.classList.toggle('active', isPlaying);
    });
  }

  setAnalysisNotice(text, isError = false) {
    const el = document.getElementById('analysis-notice');
    if (!el) return;
    el.textContent = text;
    el.classList.toggle('error', isError);
    el.classList.toggle('hidden', !text);
  }

  async runAnalysisUpdate() {
    const evalData = analysisEngine.evaluateCurrentPosition();

    const stepEl = document.getElementById('analysis-step-counter');
    if (stepEl) stepEl.textContent = evalData.stepText;

    const classEl = document.getElementById('analysis-classification');
    if (classEl) classEl.textContent = evalData.classification;

    this.updateEvaluationBar(evalData.fillPercentage, evalData.evalText);

    // Then refresh with a real engine evaluation, which is async.
    const moveEl = document.getElementById('analysis-best-move');
    const evalEl = document.getElementById('analysis-eval');
    if (moveEl) moveEl.textContent = 'thinking…';

    const token = Symbol('analysis');
    this.analysisToken = token;
    const result = await ai.analyse(analysisEngine.analysisGame, { depth: 14 });
    // A newer request superseded this one; drop the stale answer.
    if (this.analysisToken !== token) return;

    const { text, fill } = formatEval(result.score, result.mate);
    if (evalEl) evalEl.textContent = text;
    if (moveEl) moveEl.textContent = result.move ? result.move.san : '—';
    this.updateEvaluationBar(fill, text);
  }

  // --- POST-GAME REVIEW ---
  async runGameReview() {
    const container = document.getElementById('review-container');
    if (!container) return;

    const history = this.game.history();
    if (history.length === 0) {
      container.innerHTML = '<div class="placeholder-text">Play a game first, then review it here.</div>';
      return;
    }

    container.innerHTML = '<div class="review-progress">Reviewing game… <span id="review-progress-text">0%</span></div>';

    const depth = ai.usingStockfish ? 12 : 6;
    const data = await gameReview.run(this.game, {
      depth,
      onProgress: ({ done, total }) => {
        const el = document.getElementById('review-progress-text');
        if (el) el.textContent = `${Math.round((done / total) * 100)}%`;
      }
    });

    if (!data) {
      container.innerHTML = '<div class="placeholder-text">Review cancelled.</div>';
      return;
    }

    this.reviewData = data;
    this.renderReview(data);
  }

  renderReview(data) {
    const container = document.getElementById('review-container');
    if (!container) return;

    const opening = identifyOpening(this.game.history());
    const sideRow = (label, side) => {
      const chips = CLASSES.map(c =>
        `<span class="rv-chip rv-${c.id}" title="${c.label}">${c.icon} ${side.counts[c.id]}</span>`
      ).join('');
      return `
        <div class="review-side">
          <div class="rv-head">
            <span class="rv-name">${label}</span>
            <span class="rv-acc">${side.accuracy}%</span>
          </div>
          <div class="rv-sub">Average loss: ${side.averageLoss} centipawns</div>
          <div class="rv-chips">${chips}</div>
        </div>
      `;
    };

    const worst = data.worst;
    const worstHtml = worst && worst.loss > 0
      ? `<div class="review-worst">
           <strong>Turning point:</strong> ${worst.moveNumber}${worst.color === 'w' ? '.' : '...'}
           ${worst.san} <span class="rv-${worst.classification}">${worst.label}</span>
           ${worst.bestSan ? `— ${worst.bestSan} was stronger` : ''}
         </div>`
      : '';

    container.innerHTML = `
      ${opening ? `<div class="review-opening">📖 ${opening.label}</div>` : ''}
      <div class="review-sides">
        ${sideRow('White', data.white)}
        ${sideRow('Black', data.black)}
      </div>
      ${worstHtml}
      ${this.renderEvalGraph(data.evalCurve)}
      <div class="review-moves">
        ${data.moves.map(m => `
          <div class="rv-move rv-${m.classification}" data-ply="${m.ply}">
            <span class="rv-num">${m.color === 'w' ? m.moveNumber + '.' : ''}</span>
            <span class="rv-san">${m.san}</span>
            <span class="rv-icon">${m.icon}</span>
            <span class="rv-loss">${m.loss > 0 ? '-' + (m.loss / 100).toFixed(2) : ''}</span>
          </div>
        `).join('')}
      </div>
    `;

    // Clicking a move jumps the replay board to that position.
    container.querySelectorAll('.rv-move').forEach(el => {
      el.addEventListener('click', () => {
        const ply = parseInt(el.dataset.ply, 10);
        const game = analysisEngine.replayToStep(ply - 1);
        this.activeBoard.attachGame(game || analysisEngine.analysisGame);
        this.runAnalysisUpdate();
      });
    });
  }

  // Inline SVG eval graph: white advantage above the midline, black below.
  renderEvalGraph(curve) {
    if (!curve || curve.length < 2) return '';
    const width = 100;
    const height = 40;
    const clamp = (cp) => Math.max(-1000, Math.min(1000, cp));

    const points = curve.map((p, i) => {
      const x = (i / (curve.length - 1)) * width;
      const y = height / 2 - (clamp(p.cp) / 1000) * (height / 2);
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(' ');

    return `
      <div class="review-graph">
        <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img"
             aria-label="Evaluation over the course of the game">
          <rect x="0" y="0" width="${width}" height="${height}" class="rv-graph-bg"/>
          <line x1="0" y1="${height / 2}" x2="${width}" y2="${height / 2}" class="rv-graph-mid"/>
          <polyline points="${points}" class="rv-graph-line"/>
        </svg>
      </div>
    `;
  }

  // --- UI UPDATERS ---
  updateEvaluationBar(customFill = null, customText = null) {
    const fillEl = document.getElementById('eval-bar-fill');
    const textEl = document.getElementById('eval-bar-text');
    if (!fillEl || !textEl) return;

    if (customFill !== null && customText !== null) {
      fillEl.style.height = `${customFill}%`;
      textEl.textContent = customText;
      return;
    }

    // Cheap static evaluation of the live game — no search, so it stays
    // responsive after every move.
    const score = ai.quickEval(this.game);
    const { text, fill } = formatEval(score, null);
    fillEl.style.height = `${fill}%`;
    textEl.textContent = text;
  }

  updateOpeningUI() {
    const el = document.getElementById('opening-name');
    if (!el) return;
    const opening = identifyOpening(this.game.history());
    el.textContent = opening ? `📖 ${opening.label}` : '';
    el.classList.toggle('hidden', !opening);
  }

  updateMoveHistoryUI() {
    const historyBox = document.getElementById('move-history');
    const capturedSummary = document.getElementById('captured-summary');
    if (!historyBox) return;

    const moves = this.game.history();
    if (moves.length === 0) {
      historyBox.innerHTML = '<div class="placeholder-text">Moves will appear here as spell tokens are moved...</div>';
    } else {
      let html = '';
      for (let i = 0; i < moves.length; i += 2) {
        html += `
          <div class="move-row">
            <span class="move-num">${Math.floor(i / 2) + 1}.</span>
            <span class="move-white">${moves[i]}</span>
            <span class="move-black">${moves[i + 1] || ''}</span>
          </div>
        `;
      }
      historyBox.innerHTML = html;
      historyBox.scrollTop = historyBox.scrollHeight;
    }

    if (capturedSummary) {
      capturedSummary.textContent =
        `Captured: White ${this.capturedPieces.w.length} | Black ${this.capturedPieces.b.length}`;
    }

    const undoBtn = document.getElementById('undo-btn');
    if (undoBtn) undoBtn.disabled = moves.length === 0;
  }

  updateTurnBanner() {
    const banner = document.getElementById('turn-banner');
    if (!banner) return;

    const turn = this.game.turn();
    const isCheck = this.game.inCheck();

    if (this.game.isCheckmate()) {
      banner.innerHTML = `<span class="turn-dot ${turn === 'w' ? 'black' : 'white'}"></span> CHECKMATE! ${turn === 'w' ? 'Black' : 'White'} Wins!`;
    } else if (this.game.isGameOver()) {
      banner.innerHTML = `<span class="turn-dot"></span> Game over — draw`;
    } else {
      banner.innerHTML = `<span class="turn-dot ${turn === 'w' ? 'white' : 'black'}"></span> ${turn === 'w' ? 'White' : 'Black'} to move ${isCheck ? '(CHECK!)' : ''}`;
    }
  }

  updateCommentary(text) {
    const el = document.getElementById('commentary-text');
    if (el) el.textContent = text;
  }
}

// Guaranteed App Initialization (handles deferred ES modules & readyState)
function initWizardApp() {
  if (!window.wizardApp) {
    window.wizardApp = new WizardApp();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWizardApp);
} else {
  initWizardApp();
}
