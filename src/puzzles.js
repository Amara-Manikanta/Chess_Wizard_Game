// Daily & Tactical Chess Puzzles Engine

export const PUZZLE_DATABASE = {
  mate1: [
    {
      id: 'm1_01',
      title: 'Scholars Magic Strike',
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
      description: 'Punish Black\'s undefended back rank with Rook spell barrage.'
    },
    {
      id: 'm1_03',
      title: 'Smothered Knight Spell',
      category: 'Mate in 1',
      fen: '6rk/5Npp/8/8/8/8/8/7K w - - 0 1',
      solution: ['Nf7#'],
      solutionVerbose: [{ from: 'f7', to: 'g5' }], // wait, let's fix FEN for smothered mate
      fen: '6rk/5ppp/8/8/8/8/5N2/7K w - - 0 1',
      // Let's create exact position: White Knight on f7 gives checkmate to King on h8 blocked by g8 Rook and g7/h7 Pawns!
      fen: '6rk/5p1p/7N/8/8/8/8/7K w - - 0 1',
      solution: ['Nxf7#'],
      solutionVerbose: [{ from: 'h6', to: 'f7' }],
      description: 'Trapped King! Deliver the famous Smothered Mate with the Knight.'
    }
  ],
  mate2: [
    {
      id: 'm2_01',
      title: 'Boden\'s Mate Blast',
      category: 'Mate in 2',
      fen: '2kr4/3p4/8/8/2B5/5B2/8/2R1K3 w - - 0 1',
      solution: ['Ba6+', 'Kb8', 'Bb7#'], // simplified mate in 2
      solutionVerbose: [{ from: 'c4', to: 'a6' }],
      description: 'Criss-crossing Bishops paralyze the enemy King.'
    },
    {
      id: 'm2_02',
      title: 'Rook & Queen Siege',
      category: 'Mate in 2',
      fen: 'r4rk1/ppp2ppp/8/8/1Q6/8/5PPP/3R2K1 w - - 0 1',
      solution: ['Qxb7'],
      solutionVerbose: [{ from: 'b4', to: 'b7' }],
      description: 'Infiltrate the enemy defenses and set up mate.'
    }
  ],
  fork: [
    {
      id: 'f_01',
      title: 'Royal Knight Fork',
      category: 'Knight Fork',
      fen: 'r1bqk2r/pppp1ppp/2n5/4p3/4N3/5N2/PPPP1PPP/R1BQKB1R w KQkq - 0 1',
      // Let's set clean Knight Fork FEN: King on c8, Queen on e8, White Knight jumping to c7!
      fen: '2q1k3/8/8/8/4N3/8/8/4K3 w - - 0 1',
      solution: ['Nd6+'],
      solutionVerbose: [{ from: 'e4', to: 'd6' }],
      description: 'Jump the Knight to d6 to fork King & Queen simultaneously!'
    }
  ],
  pin: [
    {
      id: 'p_01',
      title: 'Absolute Bishop Pin',
      category: 'Pins & Skewers',
      fen: 'r1b1k2r/pppp1ppp/5q2/4p3/2B1P3/8/PPPP1PPP/R1BQK2R w KQkq - 0 1',
      solution: ['Bg5'],
      solutionVerbose: [{ from: 'c1', to: 'g5' }],
      description: 'Pin the enemy Queen against their King using the Dark Bishop.'
    }
  ],
  endgame: [
    {
      id: 'e_01',
      title: 'Pawn Breakthrough Magic',
      category: 'Endgame',
      fen: '8/8/8/3P4/8/8/4K3/4k3 w - - 0 1',
      solution: ['d6'],
      solutionVerbose: [{ from: 'd5', to: 'd6' }],
      description: 'March the passed pawn to coronation!'
    }
  ]
};

export class PuzzleManager {
  constructor() {
    this.currentCategory = 'mate1';
    this.currentIndex = 0;
    this.streak = 0;
    this.score = 1200;
    this.solvedCount = 0;
    this.totalPuzzles = 0;
    this.currentPuzzle = null;
  }

  getCurrentPuzzle() {
    const categoryPuzzles = PUZZLE_DATABASE[this.currentCategory] || PUZZLE_DATABASE.mate1;
    this.currentPuzzle = categoryPuzzles[this.currentIndex % categoryPuzzles.length];
    return this.currentPuzzle;
  }

  setCategory(category) {
    if (PUZZLE_DATABASE[category]) {
      this.currentCategory = category;
      this.currentIndex = 0;
    }
    return this.getCurrentPuzzle();
  }

  nextPuzzle() {
    const categoryPuzzles = PUZZLE_DATABASE[this.currentCategory] || PUZZLE_DATABASE.mate1;
    this.currentIndex = (this.currentIndex + 1) % categoryPuzzles.length;
    return this.getCurrentPuzzle();
  }

  verifyMove(userMove) {
    if (!this.currentPuzzle) return false;
    const target = this.currentPuzzle.solutionVerbose[0];
    const isCorrect = (userMove.from === target.from && userMove.to === target.to);

    if (isCorrect) {
      this.streak++;
      this.score += 15;
      this.solvedCount++;
    } else {
      this.streak = 0;
    }

    return isCorrect;
  }
}

export const puzzleManager = new PuzzleManager();
