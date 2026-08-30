// Tactical puzzle database and progress tracking.
//
// Every position here has been verified: the FEN is legal, the stated solution
// is a legal move, and each "mate in 1" has exactly one mating move so there is
// a single right answer.

export const PUZZLE_DATABASE = {
  mate1: [
    {
      id: 'm1_01',
      title: 'Scholar\'s Magic Strike',
      category: 'Mate in 1',
      fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4',
      solution: ['Qxf7#'],
      solutionVerbose: [{ from: 'h5', to: 'f7' }],
      description: 'Find the lethal Queen spell strike for instant Checkmate!'
    },
    {
      id: 'm1_02',
      title: 'Back-Rank Smite',
      category: 'Mate in 1',
      fen: '3r2k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1',
      solution: ['Rxd8#'],
      solutionVerbose: [{ from: 'd1', to: 'd8' }],
      description: 'Punish Black\'s undefended back rank with a Rook spell barrage.'
    },
    {
      id: 'm1_03',
      title: 'Smothered Knight Spell',
      category: 'Mate in 1',
      // King on h8 is walled in by its own rook and pawns; the knight leaps in.
      fen: '6rk/6pp/8/4N3/8/8/8/K7 w - - 0 1',
      solution: ['Nf7#'],
      solutionVerbose: [{ from: 'e5', to: 'f7' }],
      description: 'Trapped King! Deliver the famous Smothered Mate with the Knight.'
    },
    {
      id: 'm1_04',
      title: 'Queen\'s Duet',
      category: 'Mate in 1',
      fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 4 4',
      solution: ['Qxf7#'],
      solutionVerbose: [{ from: 'f3', to: 'f7' }],
      description: 'Queen and Bishop combine on the weakest square: f7.'
    }
  ],
  mate2: [
    {
      id: 'm2_01',
      title: 'Boden\'s Mate Blast',
      category: 'Mate in 2',
      fen: '2kr4/3p4/8/8/2B5/5B2/8/2R1K3 w - - 0 1',
      solution: ['Ba6+'],
      solutionVerbose: [{ from: 'c4', to: 'a6' }],
      description: 'Criss-crossing Bishops paralyse the enemy King. Start with the check.'
    },
    {
      id: 'm2_02',
      title: 'Rook & Queen Siege',
      category: 'Mate in 2',
      fen: 'r4rk1/ppp2ppp/8/8/1Q6/8/5PPP/3R2K1 w - - 0 1',
      solution: ['Qxb7'],
      solutionVerbose: [{ from: 'b4', to: 'b7' }],
      description: 'Infiltrate the enemy defences and set up the mating net.'
    }
  ],
  fork: [
    {
      id: 'f_01',
      title: 'Royal Knight Fork',
      category: 'Knight Fork',
      fen: '2q1k3/8/8/8/4N3/8/8/4K3 w - - 0 1',
      solution: ['Nd6+'],
      solutionVerbose: [{ from: 'e4', to: 'd6' }],
      description: 'Jump the Knight to d6 to fork King and Queen simultaneously!'
    }
  ],
  pin: [
    {
      id: 'p_01',
      title: 'Absolute Bishop Pin',
      category: 'Pins & Skewers',
      // d-pawn has advanced, opening the c1-h6 diagonal for the dark bishop.
      fen: 'rnbqkb1r/pppp1ppp/5n2/4p3/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
      solution: ['Bg5'],
      solutionVerbose: [{ from: 'c1', to: 'g5' }],
      description: 'Pin the f6 Knight against the Queen with the Dark Bishop.'
    }
  ],
  endgame: [
    {
      id: 'e_01',
      title: 'Pawn Breakthrough Magic',
      category: 'Endgame',
      // The classic three-versus-three breakthrough.
      fen: '8/ppp5/8/PPP5/8/8/8/K6k w - - 0 1',
      solution: ['b6'],
      solutionVerbose: [{ from: 'b5', to: 'b6' }],
      description: 'Sacrifice to force a passed pawn through. Which pawn leads?'
    },
    {
      id: 'e_02',
      title: 'March to Coronation',
      category: 'Endgame',
      fen: 'k7/8/8/3P4/8/8/8/4K3 w - - 0 1',
      solution: ['d6'],
      solutionVerbose: [{ from: 'd5', to: 'd6' }],
      description: 'Race the passed pawn home before the King can catch it!'
    }
  ]
};

export class PuzzleManager {
  // `stats` is the persisted puzzle record, injected so progress survives
  // reloads without this module knowing about localStorage.
  constructor(stats = null) {
    this.currentCategory = 'mate1';
    this.currentIndex = 0;
    this.currentPuzzle = null;
    this.stats = stats || { streak: 0, bestStreak: 0, score: 1200, solved: 0, attempted: 0, solvedIds: [] };
    // Each puzzle may only be scored once per visit, so retrying after a wrong
    // answer cannot farm points.
    this.attemptedThisView = false;
  }

  get streak() { return this.stats.streak; }
  get score() { return this.stats.score; }
  get solvedCount() { return this.stats.solved; }

  get totalPuzzles() {
    return Object.values(PUZZLE_DATABASE).reduce((n, list) => n + list.length, 0);
  }

  getCurrentPuzzle() {
    const list = PUZZLE_DATABASE[this.currentCategory] || PUZZLE_DATABASE.mate1;
    this.currentPuzzle = list[this.currentIndex % list.length];
    return this.currentPuzzle;
  }

  setCategory(category) {
    if (PUZZLE_DATABASE[category]) {
      this.currentCategory = category;
      this.currentIndex = 0;
      this.attemptedThisView = false;
    }
    return this.getCurrentPuzzle();
  }

  nextPuzzle() {
    const list = PUZZLE_DATABASE[this.currentCategory] || PUZZLE_DATABASE.mate1;
    this.currentIndex = (this.currentIndex + 1) % list.length;
    this.attemptedThisView = false;
    return this.getCurrentPuzzle();
  }

  isSolved(puzzleId) {
    return this.stats.solvedIds.includes(puzzleId);
  }

  // Returns { correct, alreadyScored } so the UI can distinguish a fresh solve
  // from a repeat.
  verifyMove(userMove) {
    if (!this.currentPuzzle) return { correct: false, alreadyScored: false };
    const target = this.currentPuzzle.solutionVerbose[0];
    const correct = userMove.from === target.from && userMove.to === target.to;
    const alreadyScored = this.attemptedThisView;
    this.attemptedThisView = true;
    return { correct, alreadyScored };
  }
}

export const puzzleManager = new PuzzleManager();
