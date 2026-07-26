// Grand Academy Masterclass Lessons with Voice Speech & Line-by-Line Strategic Explanations

export const ACADEMY_LESSONS = {
  openings: [
    {
      id: 'op_ruy',
      title: 'Ruy Lopez (Spanish Opening)',
      description: 'Classic grandmaster opening! White attacks Black\'s knight defender on c6 to pressure the e5 center pawn.',
      tips: 'Control center, develop with tempo, pin the defender of e5.',
      moveSequence: [
        {
          san: 'e4',
          title: '1. e4 — King\'s Pawn Opening',
          speech: "1. e4 — King's Pawn Opening. Controls the key central squares e4 and d5, while freeing diagonal sightlines for your Queen and Light-Squared Bishop.",
          tip: 'Claims central space and frees Queen & Bishop.'
        },
        {
          san: 'e5',
          title: '1... e5 — Open Game Response',
          speech: "1... e5 — Open Game Response. Black claims equal central territory and prevents White from advancing a dual-pawn center.",
          tip: 'Equal central space response.'
        },
        {
          san: 'Nf3',
          title: "2. Nf3 — King's Knight Development",
          speech: "2. Nf3 — King's Knight Development. White develops a piece toward the center with tempo, directly attacking Black's e5 pawn.",
          tip: 'Develops knight and attacks e5 pawn with tempo.'
        },
        {
          san: 'Nc6',
          title: "2... Nc6 — Queen's Knight Defense",
          speech: "2... Nc6 — Queen's Knight Defense. Black develops their knight to defend the e5 pawn and guard the d4 square.",
          tip: 'Defends e5 pawn and guards d4.'
        },
        {
          san: 'Bb5',
          title: '3. Bb5 — The Ruy Lopez Pin',
          speech: "3. Bb5 — The Ruy Lopez! White develops the Bishop to pressure Black's Nc6 defender, threatening to undermine Black's central stronghold on e5.",
          tip: 'Pins and pressures the c6 defender.'
        }
      ]
    },
    {
      id: 'op_italian',
      title: 'Italian Game (Giuoco Piano)',
      description: 'One of chess\'s oldest openings! The Light-Squared Bishop targets the vulnerable f7 pawn square.',
      tips: 'Prepares quick Kingside castling while threatening direct attacks on f7.',
      moveSequence: [
        {
          san: 'e4',
          title: '1. e4 — King\'s Pawn',
          speech: "1. e4 — Opening with the King's Pawn to claim center e4 and d5 squares.",
          tip: 'Controls central squares.'
        },
        {
          san: 'e5',
          title: '1... e5 — Symmetric Response',
          speech: "1... e5 — Black matches White's central footprint.",
          tip: 'Fights for central control.'
        },
        {
          san: 'Nf3',
          title: '2. Nf3 — Attack e5',
          speech: "2. Nf3 — Developing the Knight to f3, putting pressure on e5 and preparing castling.",
          tip: 'Develops piece and attacks e5.'
        },
        {
          san: 'Nc6',
          title: '2... Nc6 — Defend e5',
          speech: "2... Nc6 — Black develops the Knight to defend e5.",
          tip: 'Solid defense of central pawn.'
        },
        {
          san: 'Bc4',
          title: '3. Bc4 — The Italian Bishop Strike',
          speech: "3. Bc4 — The Italian Game! White posts the Bishop on c4, aiming straight at the weak f7 square right next to Black's King!",
          tip: 'Targets the vulnerable f7 square.'
        }
      ]
    },
    {
      id: 'op_sicilian',
      title: 'Sicilian Defense',
      description: 'The most popular counter-attacking weapon against 1. e4! Black fights for center control asynchronously.',
      tips: '1. c5 prevents White from building an easy dual-pawn center with d4.',
      moveSequence: [
        {
          san: 'e4',
          title: "1. e4 — White's King Pawn",
          speech: "1. e4 — White stakes a claim in the center with 1. e4.",
          tip: 'White opens center.'
        },
        {
          san: 'c5',
          title: '1... c5 — The Sicilian Counter Strike',
          speech: "1... c5 — The Sicilian Defense! Black attacks the d4 square from the wing, preventing White from easily building a dual d4-e4 pawn center.",
          tip: 'Fights for center asynchronously.'
        },
        {
          san: 'Nf3',
          title: '2. Nf3 — Open Sicilian Preparation',
          speech: "2. Nf3 — White prepares the d4 central break to open lines for piece activity.",
          tip: 'Prepares d4 strike.'
        },
        {
          san: 'd6',
          title: '2... d6 — Classical Pawn Structure',
          speech: "2... d6 — Black controls e5 and c5 squares while opening the diagonal for the Light-Squared Bishop.",
          tip: 'Prepares Nf6 and controls e5.'
        },
        {
          san: 'd4',
          title: '3. d4 — Central Explosion',
          speech: "3. d4 — White breaks open the center! Black will trade c5 for d4, securing a central pawn majority.",
          tip: 'Breaks center open.'
        }
      ]
    },
    {
      id: 'op_queens_gambit',
      title: 'Queen\'s Gambit',
      description: 'White offers a wing pawn (c4) to entice Black to abandon the central d5 stronghold.',
      tips: 'If Black takes 2...dxc4, White claims full center dominance with e4!',
      moveSequence: [
        {
          san: 'd4',
          title: "1. d4 — Queen's Pawn Opening",
          speech: "1. d4 — White opens with the Queen's Pawn, controlling e5 and d4, solidly protected by the Queen.",
          tip: 'Solid central control.'
        },
        {
          san: 'd5',
          title: '1... d5 — Solid Counter',
          speech: "1... d5 — Black claims equal central space and locks down the d5 square.",
          tip: 'Solid central stake.'
        },
        {
          san: 'c4',
          title: '2. c4 — The Queen\'s Gambit Offer',
          speech: "2. c4 — The Queen's Gambit! White offers the c4 wing pawn to entice Black to abandon the center. If Black captures, White will seize total center control with e4!",
          tip: 'Offers pawn to seize full center.'
        }
      ]
    },
    {
      id: 'op_french',
      title: 'French Defense',
      description: 'Solid resilient pawn chain defense leading to rich strategic battles.',
      tips: 'Black builds a strong counter-strike with c5 to undermine White\'s d4 foundation.',
      moveSequence: [
        {
          san: 'e4',
          title: '1. e4 — King\'s Pawn',
          speech: "1. e4 — White opens with 1. e4.",
          tip: 'Standard King Pawn opening.'
        },
        {
          san: 'e6',
          title: '1... e6 — French Defense Prep',
          speech: "1... e6 — The French Defense. Black prepares 2... d5 to challenge White's e4 pawn behind a fortified e6 shield.",
          tip: 'Prepares d5 counter-strike.'
        },
        {
          san: 'd4',
          title: '2. d4 — Dual Pawn Center',
          speech: "2. d4 — White grabs full central space with both e4 and d4 pawns.",
          tip: 'White occupies full center.'
        },
        {
          san: 'd5',
          title: '2... d5 — Central Challenge',
          speech: "2... d5 — Black attacks White's e4 pawn, forcing White to choose between advancing, exchanging, or defending.",
          tip: 'Challenges e4 pawn.'
        }
      ]
    }
  ],
  middlegames: [
    {
      id: 'mg_outpost',
      title: 'Knight Outpost Mastery',
      description: 'An outpost is a square protected by a pawn that cannot be attacked by enemy pawns. Knights thrive here!',
      tips: 'Anchor your Knight on e5 or d5 to dominate enemy territory.',
      moveSequence: [
        {
          san: 'Nf3',
          title: '1. Nf3 — Knight Mobilization',
          speech: "1. Nf3 — Develop your Knight toward the center.",
          tip: 'Develops Knight toward center.'
        },
        {
          san: 'd5',
          title: '1... d5 — Enemy Pawn Stake',
          speech: "1... d5 — Black stakes a pawn in the center.",
          tip: 'Black claims central space.'
        },
        {
          san: 'Ne5',
          title: '2. Ne5 — Dominant Outpost Landing',
          speech: "2. Ne5 — Knight Outpost! Landing the Knight on e5 radiates pressure in 8 directions inside enemy territory!",
          tip: 'Dominates central outpost.'
        }
      ]
    }
  ],
  endgames: [
    {
      id: 'eg_opposition',
      title: 'King Opposition & Rule of Square',
      description: 'Opposition means placing your King directly across from the enemy King with one empty square between them.',
      tips: 'The player who does NOT have to move holds Opposition and forces the enemy King back!',
      moveSequence: [
        {
          san: 'Ke2',
          title: '1. Ke2 — King Mobilization',
          speech: "1. Ke2 — In the endgame, the King transforms into an active attacking warrior!",
          tip: 'Activate King in endgame.'
        },
        {
          san: 'Ke7',
          title: '1... Ke7 — Opposing King Advance',
          speech: "1... Ke7 — Black marches King toward center.",
          tip: 'Black activates King.'
        },
        {
          san: 'Ke3',
          title: '2. Ke3 — Seizing Direct Opposition',
          speech: "2. Ke3 — Direct Opposition! By placing your King directly opposite with 1 empty square between, you force the enemy King to step aside!",
          tip: 'Seizes Opposition.'
        }
      ]
    }
  ]
};

export class AcademyManager {
  constructor() {
    this.currentSection = 'openings';
    this.currentLesson = null;
    this.currentStep = 0;
  }

  getLessons(section) {
    this.currentSection = section || 'openings';
    return ACADEMY_LESSONS[this.currentSection] || ACADEMY_LESSONS.openings;
  }
}

export const academyManager = new AcademyManager();
