// Grand Academy Masterclass Lessons for Openings, Middlegames & Endgames

export const ACADEMY_LESSONS = {
  openings: [
    {
      id: 'op_ruy',
      title: 'Ruy Lopez (Spanish Opening)',
      moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'],
      fen: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
      description: 'Classic grandmaster opening! White attacks Black\'s knight defender on c6 to pressure the e5 center pawn.',
      tips: '1. e4 controls the center. 2. Nf3 develops with tempo. 3. Bb5 pins the c6 defender.'
    },
    {
      id: 'op_sicilian',
      title: 'Sicilian Defense',
      moves: ['e4', 'c5'],
      fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2',
      description: 'The most popular counter-attacking weapon against 1. e4! Black fights for center control asynchronously.',
      tips: '1. c5 prevents White from building an easy dual-pawn center with d4.'
    },
    {
      id: 'op_queens_gambit',
      title: 'Queen\'s Gambit',
      moves: ['d4', 'd5', 'c4'],
      fen: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2',
      description: 'White offers a wing pawn (c4) to entice Black to abandon the central d5 stronghold.',
      tips: 'If Black takes 2...dxc4, White claims full center dominance with e4!'
    },
    {
      id: 'op_french',
      title: 'French Defense',
      moves: ['e4', 'e6', 'd4', 'd5'],
      fen: 'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3',
      description: 'Solid resilient pawn chain defense leading to rich strategic battles.',
      tips: 'Black builds a strong counter-strike with c5 to undermine White\'s d4 foundation.'
    },
    {
      id: 'op_italian',
      title: 'Italian Game (Giuoco Piano)',
      moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4'],
      fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
      description: 'One of chess\'s oldest openings! The Bishop targets the vulnerable f7 pawn square.',
      tips: 'Prepares quick Kingside castling while threatening direct attacks on f7.'
    }
  ],
  middlegames: [
    {
      id: 'mg_outpost',
      title: 'Knight Outpost Mastery',
      moves: ['Nf3', 'd5', 'Ne5'],
      fen: 'rnbqkbnr/ppp1pppp/8/3pN3/8/8/PPPPPPPP/RNBQKB1R b KQkq - 1 2',
      description: 'An outpost is a square protected by a pawn that cannot be attacked by enemy pawns. Knights thrive here!',
      tips: 'Anchor your Knight on e5 or d5 to dominate enemy territory.'
    },
    {
      id: 'mg_rooks',
      title: 'Rook Battery on Open File',
      moves: ['Rd1', 'Rd2', 'Rad1'],
      fen: '3r2k1/5ppp/8/8/8/8/3R1PPP/3R2K1 w - - 0 1',
      description: 'Doubling rooks on an open file creates irresistible pressure into the enemy position.',
      tips: 'Use open files to penetrate to the 7th rank for devastation.'
    }
  ],
  endgames: [
    {
      id: 'eg_opposition',
      title: 'King Opposition & Rule of Square',
      moves: ['Ke2', 'Ke7', 'Ke3', 'Ke6'],
      fen: '8/8/4k3/8/4K3/8/8/8 w - - 0 1',
      description: 'Opposition means placing your King directly across from the enemy King with one empty square between them.',
      tips: 'The player who does NOT have to move holds Opposition and forces the enemy King back!'
    },
    {
      id: 'eg_lucena',
      title: 'Lucena Position (Building a Bridge)',
      moves: ['Rf1+', 'Ke7', 'Rf4', 'Rd2', 'Re4+'],
      fen: '1K1R4/1P2k3/8/8/8/8/8/3r4 w - - 0 1',
      description: 'The golden formula for winning Rook & Pawn endgames when your pawn is on the 7th rank.',
      tips: 'Build a bridge with your Rook on the 4th rank to shield your King from checks!'
    }
  ]
};

export class AcademyManager {
  constructor() {
    this.currentSection = 'openings';
    this.currentLesson = null;
  }

  getLessons(section) {
    this.currentSection = section || 'openings';
    return ACADEMY_LESSONS[this.currentSection] || ACADEMY_LESSONS.openings;
  }
}

export const academyManager = new AcademyManager();
