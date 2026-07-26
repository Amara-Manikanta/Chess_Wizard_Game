// Main App Orchestrator for 3D Wizard's Chess & Learning Academy

import './style.css';
import { Chess } from 'chess.js';
import { WizardBoard } from './board.js';
import { WizardBoard3D } from './board3d.js';
import { soundEngine } from './audio.js';
import { particleEngine } from './particles.js';
import { chessEngine } from './engine.js';
import { puzzleManager } from './puzzles.js';
import { academyManager } from './academy.js';
import { analysisEngine } from './analysis.js';

class WizardApp {
  constructor() {
    this.game = new Chess();
    this.currentMode = 'play'; // 'play', 'puzzles', 'academy', 'analysis'
    this.is3D = false; // Default to original carved stone 2D board
    this.aiOpponent = 'ron';
    this.isAiThinking = false;
    this.capturedPieces = { w: [], b: [] };

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

    // 3. Bind Header Navigation Tabs
    this.bindNavigation();

    // 4. Bind Header Controls
    this.bindHeaderControls();

    // 5. Bind Board Controls
    this.bindBoardControls();

    // 6. Bind AI Opponent Cards
    this.bindAiSelector();

    // 7. Bind Daily Puzzles Controls
    this.bindPuzzles();

    // 8. Bind Academy Lessons
    this.bindAcademy();

    // 9. Bind Analysis Tools
    this.bindAnalysis();

    // 10. Bind Promotion & Celebration Modals
    this.bindPromotionModal();
    this.bindGameOverModal();

    // 11. Initial State Update
    this.updateEvaluationBar();
    this.updateMoveHistoryUI();
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

    this.board2d.onPromotionRequired = handlePromotion;
    this.board3d.onPromotionRequired = handlePromotion;
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
    });
  }

  showGameOverCelebration(isVictory) {
    const modal = document.getElementById('game-over-modal');
    const badge = document.getElementById('modal-badge');
    const title = document.getElementById('modal-title');
    const msg = document.getElementById('modal-message');
    const movesStat = document.getElementById('modal-stat-moves');
    const opponentStat = document.getElementById('modal-stat-opponent');

    if (!modal) return;

    if (isVictory) {
      badge.className = 'celebration-badge victory';
      badge.textContent = '🏆 VICTORY!';
      title.textContent = 'Checkmate Victory!';
      msg.textContent = `You have defeated ${this.getAiName(this.aiOpponent)} with spellbinding precision!`;
      soundEngine.playVictoryFanfare();
      particleEngine.createConfettiBurst();
    } else {
      badge.className = 'celebration-badge defeat';
      badge.textContent = '💀 DEFEAT';
      title.textContent = 'Wizard Duel Lost!';
      msg.textContent = `${this.getAiName(this.aiOpponent)} claimed victory this time. Re-arm your strategy and try again!`;
      soundEngine.playDefeatSound();
    }

    if (movesStat) movesStat.textContent = this.game.history().length;
    if (opponentStat) opponentStat.textContent = this.getAiName(this.aiOpponent);

    modal.classList.remove('hidden');
  }

  // --- NAVIGATION & TABS ---
  bindNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
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

  resetGame() {
    this.game.reset();
    this.capturedPieces = { w: [], b: [] };
    this.isAiThinking = false;
    this.activeBoard.attachGame(this.game);
    this.updateEvaluationBar();
    this.updateMoveHistoryUI();
    this.updateTurnBanner();
    this.updateCommentary('New game started! Choose your opponent and cast your first move.');
  }

  async castLumosHint() {
    if (this.game.isGameOver()) return;
    soundEngine.playSpellSelectSound();

    if (this.currentMode === 'puzzles') {
      const puzzle = puzzleManager.getCurrentPuzzle();
      if (puzzle && puzzle.solutionVerbose.length > 0) {
        const hintSquare = puzzle.solutionVerbose[0].from;
        this.activeBoard.setLumosHint(hintSquare);
      }
    } else {
      const bestMove = await chessEngine.getBestMoveAsync(this.game, 'dumbledore');
      if (bestMove) {
        this.activeBoard.setLumosHint(bestMove.from);
      }
    }
  }

  // --- AI OPPONENT SELECTOR ---
  bindAiSelector() {
    const cards = document.querySelectorAll('.opponent-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.aiOpponent = card.dataset.ai || 'ron';
        soundEngine.playSpellSelectSound();

        const names = {
          ron: 'Ron Weasley',
          hermione: 'Hermione Granger',
          snape: 'Severus Snape',
          dumbledore: 'Albus Dumbledore'
        };
        this.updateCommentary(`You are now dueling ${names[this.aiOpponent]}!`);
      });
    });
  }

  // --- PLAYER MOVE CALLBACK ---
  onPlayerMove(move) {
    if (move.captured) {
      const defender = move.color === 'w' ? 'b' : 'w';
      this.capturedPieces[defender].push(move.captured);
    }

    this.updateMoveHistoryUI();
    this.updateEvaluationBar();
    this.updateTurnBanner();

    // Check if in Puzzle mode
    if (this.currentMode === 'puzzles') {
      const isCorrect = puzzleManager.verifyMove(move);
      const statusEl = document.getElementById('puzzle-status');
      if (isCorrect) {
        soundEngine.playPuzzleSuccessSound();
        statusEl.className = 'puzzle-status success';
        statusEl.textContent = '✨ Spellbinding! Puzzle Solved Correctly! (+15 XP)';
        this.updatePuzzleStats();
      } else {
        statusEl.className = 'puzzle-status failed';
        statusEl.textContent = '❌ Incorrect Move! Try again or cast Lumos for a hint.';
        this.updatePuzzleStats();
      }
      return;
    }

    // Check game over
    if (this.game.isCheckmate()) {
      this.updateCommentary('⚡ CHECKMATE! Victory has been claimed on the enchanted board!');
      this.showGameOverCelebration(true); // User White Wins!
      return;
    } else if (this.game.isDraw()) {
      this.updateCommentary('Stalemate! The duel ends in an honorable draw.');
      return;
    }

    // Trigger AI response if playing vs AI and it's Black's turn
    if (this.currentMode === 'play' && this.game.turn() === 'b' && !this.isAiThinking) {
      this.triggerAiMove();
    }
  }

  // --- AI MOVE EXECUTION (OPTIMIZED ASYNC) ---
  async triggerAiMove() {
    this.isAiThinking = true;
    this.updateCommentary(`${this.getAiName(this.aiOpponent)} is contemplating their spell move...`);

    // Non-blocking async calculation
    const bestMove = await chessEngine.getBestMoveAsync(this.game, this.aiOpponent);

    if (bestMove && !this.game.isGameOver()) {
      this.activeBoard.executeWizardMove(bestMove);
    }

    this.isAiThinking = false;
    this.updateEvaluationBar();
    this.updateMoveHistoryUI();
    this.updateTurnBanner();

    if (this.game.isCheckmate()) {
      this.updateCommentary(`⚡ CHECKMATE! ${this.getAiName(this.aiOpponent)} wins the duel!`);
      this.showGameOverCelebration(false); // AI Wins -> User Defeat
    } else if (this.game.inCheck()) {
      this.updateCommentary(`Check! ${this.getAiName(this.aiOpponent)} puts your King under attack!`);
    } else {
      this.updateCommentary(this.getAiQuote(this.aiOpponent));
    }
  }

  getAiName(id) {
    const map = { ron: 'Ron', hermione: 'Hermione', snape: 'Snape', dumbledore: 'Dumbledore' };
    return map[id] || 'Opponent';
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
        const cat = btn.dataset.category || 'mate1';
        puzzleManager.setCategory(cat);
        this.loadCurrentPuzzle();
      });
    });

    document.getElementById('next-puzzle-btn')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      puzzleManager.nextPuzzle();
      this.loadCurrentPuzzle();
    });

    document.getElementById('solve-reveal-btn')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      const puzzle = puzzleManager.getCurrentPuzzle();
      if (puzzle && puzzle.solutionVerbose.length > 0) {
        this.game.load(puzzle.fen);
        this.activeBoard.attachGame(this.game);
        const solMove = puzzle.solutionVerbose[0];
        this.activeBoard.executeWizardMove(solMove);
      }
    });
  }

  loadCurrentPuzzle() {
    const puzzle = puzzleManager.getCurrentPuzzle();
    if (!puzzle) return;

    this.game.load(puzzle.fen);
    this.activeBoard.attachGame(this.game);

    document.getElementById('puzzle-title').textContent = puzzle.title;
    document.getElementById('puzzle-desc').textContent = puzzle.description;
    document.getElementById('puzzle-theme-badge').textContent = puzzle.category;

    const statusEl = document.getElementById('puzzle-status');
    statusEl.className = 'puzzle-status';
    statusEl.textContent = 'Find the winning move for White!';

    this.updatePuzzleStats();
    this.updateEvaluationBar();
  }

  updatePuzzleStats() {
    document.getElementById('puzzle-streak').textContent = `${puzzleManager.streak} 🔥`;
    document.getElementById('puzzle-rating').textContent = `${puzzleManager.score} ⚡`;
    document.getElementById('puzzles-solved').textContent = `${puzzleManager.solvedCount} 🎯`;
  }

  // --- TRAINING ACADEMY ---
  bindAcademy() {
    const tabBtns = document.querySelectorAll('.acad-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const sec = btn.dataset.section || 'openings';
        this.renderAcademySection(sec);
      });
    });
  }

  bindAcademy() {
    document.querySelectorAll('.acad-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.acad-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        soundEngine.playSpellSelectSound();
        const sec = btn.dataset.section || 'openings';
        this.renderAcademySection(sec);
      });
    });

    // Voice Tutor Control Buttons
    const toggleVoiceBtn = document.getElementById('tutor-voice-toggle');
    toggleVoiceBtn?.addEventListener('click', () => {
      this.voiceTutorEnabled = !this.voiceTutorEnabled;
      toggleVoiceBtn.classList.toggle('muted', !this.voiceTutorEnabled);
      toggleVoiceBtn.textContent = this.voiceTutorEnabled ? '🔊 Voice: ON' : '🔇 Voice: OFF';
      if (!this.voiceTutorEnabled) soundEngine.stopSpeech();
    });

    document.getElementById('tutor-reset')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      this.applyAcademyStep(0);
    });

    document.getElementById('tutor-prev')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      if (this.activeLessonStep > 0) {
        this.applyAcademyStep(this.activeLessonStep - 1);
      }
    });

    document.getElementById('tutor-next')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      if (this.activeLesson && this.activeLesson.moveSequence && this.activeLessonStep < this.activeLesson.moveSequence.length - 1) {
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
          if (this.activeLesson && this.activeLesson.moveSequence && this.activeLessonStep < this.activeLesson.moveSequence.length - 1) {
            this.applyAcademyStep(this.activeLessonStep + 1);
          } else {
            clearInterval(this.tutorAutoplayTimer);
            this.tutorAutoplayTimer = null;
            autoBtn.classList.remove('active');
          }
        }, 4500); // 4.5 seconds per move explanation
      }
    });
  }

  renderAcademySection(section) {
    const container = document.getElementById('academy-lesson-container');
    if (!container) return;

    container.innerHTML = '';
    const lessons = academyManager.getLessons(section);

    lessons.forEach((lesson, index) => {
      const card = document.createElement('div');
      card.className = `lesson-card ${index === 0 ? 'active' : ''}`;
      const moveList = lesson.moveSequence ? lesson.moveSequence.map(m => m.san).join(' ') : (lesson.moves || []).join(' ');
      card.innerHTML = `
        <h4>${lesson.title}</h4>
        <p>${lesson.description}</p>
        <div class="lesson-moves">Line: ${moveList}</div>
      `;

      card.addEventListener('click', () => {
        container.querySelectorAll('.lesson-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        soundEngine.playSpellSelectSound();
        this.loadAcademyLesson(lesson);
      });

      container.appendChild(card);
    });

    if (lessons.length > 0) {
      this.loadAcademyLesson(lessons[0]);
    }
  }

  loadAcademyLesson(lesson) {
    this.activeLesson = lesson;
    this.applyAcademyStep(0);
  }

  applyAcademyStep(stepIndex) {
    if (!this.activeLesson || !this.activeLesson.moveSequence) return;

    this.activeLessonStep = Math.max(0, Math.min(stepIndex, this.activeLesson.moveSequence.length - 1));
    const sequence = this.activeLesson.moveSequence;

    // Reset game and play moves up to stepIndex
    this.game.reset();
    for (let i = 0; i <= this.activeLessonStep; i++) {
      if (sequence[i] && sequence[i].san) {
        try {
          this.game.move(sequence[i].san);
        } catch (e) {
          console.warn('Academy move error:', e);
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

    if (titleEl) titleEl.textContent = this.activeLesson.title;
    if (badgeEl) badgeEl.textContent = `Move Step ${this.activeLessonStep + 1} of ${sequence.length}: ${currentData.title}`;
    if (speechEl) speechEl.textContent = `"${currentData.speech}"`;
    if (tipEl) tipEl.textContent = `💡 Tip: ${currentData.tip}`;

    // Speak explanation out loud line by line!
    if (this.voiceTutorEnabled) {
      soundEngine.speakExplanation(currentData.speech);
    }
  }

  // --- GAME ANALYSIS ---
  bindAnalysis() {
    document.getElementById('load-fen-btn')?.addEventListener('click', () => {
      const fenInput = document.getElementById('fen-input').value.trim();
      if (!fenInput) return;
      const success = analysisEngine.loadFEN(fenInput);
      if (success) {
        this.activeBoard.attachGame(analysisEngine.analysisGame);
        soundEngine.playSpellSelectSound();
        this.runAnalysisUpdate();
      } else {
        alert('Invalid FEN format!');
      }
    });

    document.getElementById('load-pgn-btn')?.addEventListener('click', () => {
      const pgnInput = document.getElementById('pgn-input').value.trim();
      if (!pgnInput) return;
      const success = analysisEngine.loadPGN(pgnInput);
      if (success) {
        this.activeBoard.attachGame(analysisEngine.analysisGame);
        soundEngine.playSpellSelectSound();
        this.runAnalysisUpdate();
      } else {
        alert('Invalid PGN format!');
      }
    });

    // Navigation buttons for Analysis replay
    document.getElementById('step-first')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      const game = analysisEngine.stepFirst();
      this.activeBoard.attachGame(game);
      this.runAnalysisUpdate();
    });

    document.getElementById('step-prev')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      const game = analysisEngine.stepPrev();
      this.activeBoard.attachGame(game);
      this.runAnalysisUpdate();
    });

    document.getElementById('step-next')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      const game = analysisEngine.stepNext();
      this.activeBoard.attachGame(game);
      this.runAnalysisUpdate();
    });

    document.getElementById('step-last')?.addEventListener('click', () => {
      soundEngine.playSpellSelectSound();
      const game = analysisEngine.stepLast();
      this.activeBoard.attachGame(game);
      this.runAnalysisUpdate();
    });

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

  runAnalysisUpdate() {
    const evalData = analysisEngine.evaluateCurrentPosition();

    const evalEl = document.getElementById('analysis-eval');
    const moveEl = document.getElementById('analysis-best-move');
    const classEl = document.getElementById('analysis-classification');
    const stepEl = document.getElementById('analysis-step-counter');

    if (evalEl) evalEl.textContent = evalData.evalText;
    if (moveEl) moveEl.textContent = evalData.bestMove;
    if (classEl) classEl.textContent = evalData.classification;
    if (stepEl) stepEl.textContent = evalData.stepText;

    this.updateEvaluationBar(evalData.fillPercentage, evalData.evalText);
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

    const evalData = analysisEngine.evaluateCurrentPosition(this.game);
    fillEl.style.height = `${evalData.fillPercentage}%`;
    textEl.textContent = evalData.evalText;
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
        const moveNum = Math.floor(i / 2) + 1;
        const whiteMove = moves[i];
        const blackMove = moves[i + 1] || '';
        html += `
          <div class="move-row">
            <span class="move-num">${moveNum}.</span>
            <span class="move-white">${whiteMove}</span>
            <span class="move-black">${blackMove}</span>
          </div>
        `;
      }
      historyBox.innerHTML = html;
      historyBox.scrollTop = historyBox.scrollHeight;
    }

    if (capturedSummary) {
      capturedSummary.textContent = `Captured: White ${this.capturedPieces.w.length} | Black ${this.capturedPieces.b.length}`;
    }
  }

  updateTurnBanner() {
    const banner = document.getElementById('turn-banner');
    if (!banner) return;

    const turn = this.game.turn();
    const isCheck = this.game.inCheck();

    if (this.game.isCheckmate()) {
      banner.innerHTML = `<span class="turn-dot ${turn === 'w' ? 'black' : 'white'}"></span> CHECKMATE! ${turn === 'w' ? 'Black' : 'White'} Wins!`;
    } else {
      banner.innerHTML = `<span class="turn-dot ${turn === 'w' ? 'white' : 'black'}"></span> ${turn === 'w' ? 'White' : 'Black'} to move ${isCheck ? '(CHECK!)' : ''}`;
    }
  }

  updateCommentary(text) {
    const el = document.getElementById('commentary-text');
    if (el) el.textContent = text;
  }
}

// Instantiate App when DOM loads
window.addEventListener('DOMContentLoaded', () => {
  window.wizardApp = new WizardApp();
});
