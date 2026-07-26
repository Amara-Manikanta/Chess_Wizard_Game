// Grand Academy Masterclass - All Openings, Sub-Lines & Voice Speech Lessons

export const ACADEMY_LESSONS = {
  openings: [
    {
      id: 'op_ruy',
      title: 'Ruy Lopez (Spanish Opening)',
      description: 'The King of Openings! Played by World Champions from Steinitz to Carlsen. Attacks Black\'s c6 defender to pressure the e5 center pawn.',
      tips: 'Control center, develop with tempo, pin the c6 defender.',
      variations: [
        {
          id: 'ruy_closed',
          name: 'Closed Main Line (Morphy Defense)',
          description: 'The cornerstone of modern classical chess theory (10 moves deep).',
          moveSequence: [
            { san: 'e4', title: '1. e4 — King\'s Pawn Opening', speech: '1. e4 — King\'s Pawn Opening. Claims center squares e4 and d5 while freeing lines for your Queen and Bishop.', tip: 'Claims center space.' },
            { san: 'e5', title: '1... e5 — Open Game Response', speech: '1... e5 — Open Game Response. Black claims equal central space.', tip: 'Fights for center.' },
            { san: 'Nf3', title: '2. Nf3 — Attack e5', speech: '2. Nf3 — White develops the King\'s Knight, putting immediate pressure on Black\'s e5 pawn.', tip: 'Develops with tempo.' },
            { san: 'Nc6', title: '2... Nc6 — Defend e5', speech: '2... Nc6 — Black develops the Knight to defend the e5 pawn.', tip: 'Guards e5 pawn.' },
            { san: 'Bb5', title: '3. Bb5 — The Ruy Lopez', speech: '3. Bb5 — The Ruy Lopez! White develops the Bishop to pin and pressure the c6 defender.', tip: 'Pins c6 defender.' },
            { san: 'a6', title: '3... a6 — Morphy Defense', speech: '3... a6 — Morphy Defense! Black immediately questions White\'s Bishop.', tip: 'Questions the Bishop.' },
            { san: 'Ba4', title: '4. Ba4 — Retain the Pin', speech: '4. Ba4 — White retreats the Bishop to a4, maintaining the pin along the a4-e8 diagonal.', tip: 'Maintains diagonal pin.' },
            { san: 'Nf6', title: '4... Nf6 — Counter-Attack e4', speech: '4... Nf6 — Black develops the King\'s Knight, counter-attacking White\'s undefended e4 pawn.', tip: 'Attacks e4 pawn.' },
            { san: 'O-O', title: '5. O-O — Kingside Castling', speech: '5. O-O — White castles Kingside, placing the King in safety and activating the Rook.', tip: 'King safety first.' },
            { san: 'Be7', title: '5... Be7 — Solid Development', speech: '5... Be7 — Black prepares Kingside castling with a solid defensive setup.', tip: 'Prepares castling.' },
            { san: 'Re1', title: '6. Re1 — Protect e4 Pawn', speech: '6. Re1 — White secures the e4 pawn with the Rook, renewing the threat to win Black\'s e5 pawn.', tip: 'Protects e4 pawn.' },
            { san: 'b5', title: '6... b5 — Break the Pin', speech: '6... b5 — Black expands on the Queenside, forcing White\'s Bishop back to b3.', tip: 'Forces Bishop retreat.' },
            { san: 'Bb3', title: '7. Bb3 — Target f7', speech: '7. Bb3 — White\'s Bishop re-positions onto the powerful a2-g8 diagonal, aiming at f7.', tip: 'Aims at f7 diagonal.' },
            { san: 'd6', title: '7... d6 — Solidify Center', speech: '7... d6 — Black solidifies the e5 pawn stronghold and opens the c8 Bishop.', tip: 'Solidifies e5.' },
            { san: 'c3', title: '8. c3 — Prepare d4 Break', speech: '8. c3 — White prepares the powerful d4 central pawn break while creating a retreat square for the Bishop on c2.', tip: 'Prepares d4 strike.' }
          ]
        },
        {
          id: 'ruy_berlin',
          name: 'Berlin Defense (The Berlin Wall)',
          description: 'Kramnik\'s impenetrable endgame weapon that dethroned Kasparov in 2000.',
          moveSequence: [
            { san: 'e4', title: '1. e4 — King\'s Pawn', speech: '1. e4 — White opens with 1. e4.', tip: 'King Pawn opening.' },
            { san: 'e5', title: '1... e5 — King\'s Pawn Response', speech: '1... e5 — Open game response.', tip: 'Equal center.' },
            { san: 'Nf3', title: '2. Nf3 — Attack e5', speech: '2. Nf3 — Attacking the e5 pawn.', tip: 'Develops Knight.' },
            { san: 'Nc6', title: '2... Nc6 — Defend e5', speech: '2... Nc6 — Defending e5.', tip: 'Defends pawn.' },
            { san: 'Bb5', title: '3. Bb5 — The Ruy Lopez', speech: '3. Bb5 — Ruy Lopez pin.', tip: 'Pressures c6.' },
            { san: 'Nf6', title: '3... Nf6 — Berlin Wall Defense', speech: '3... Nf6 — The Berlin Wall! Black ignores the a6 question and directly attacks White\'s e4 pawn!', tip: 'Attacks e4 directly.' },
            { san: 'O-O', title: '4. O-O — Castling Gambit', speech: '4. O-O — White castles, offering the e4 pawn for rapid initiative.', tip: 'Offers e4 pawn.' },
            { san: 'Nxe4', title: '4... Nxe4 — Berlin Accepted', speech: '4... Nxe4 — Black accepts the pawn challenge!', tip: 'Captures e4 pawn.' },
            { san: 'd4', title: '5. d4 — Central Break', speech: '5. d4 — White strikes open the center to catch Black\'s Knight.', tip: 'Strikes center.' },
            { san: 'Nd6', title: '5... Nd6 — Retaliatory Knight Retreat', speech: '5... Nd6 — Black retreats the Knight to d6, attacking White\'s b5 Bishop!', tip: 'Attacks b5 Bishop.' }
          ]
        },
        {
          id: 'ruy_marshall',
          name: 'Marshall Attack',
          description: 'Frank Marshall\'s legendary Kingside gambit sacrifice.',
          moveSequence: [
            { san: 'e4', title: '1. e4', speech: '1. e4 — King\'s Pawn.', tip: 'Center control.' },
            { san: 'e5', title: '1... e5', speech: '1... e5 — Symmetric center.', tip: 'Center stake.' },
            { san: 'Nf3', title: '2. Nf3', speech: '2. Nf3 — Attack e5.', tip: 'Attack e5.' },
            { san: 'Nc6', title: '2... Nc6', speech: '2... Nc6 — Defend e5.', tip: 'Defend e5.' },
            { san: 'Bb5', title: '3. Bb5', speech: '3. Bb5 — Ruy Lopez.', tip: 'Pin c6.' },
            { san: 'a6', title: '3... a6', speech: '3... a6 — Morphy Defense.', tip: 'Question Bishop.' },
            { san: 'Ba4', title: '4. Ba4', speech: '4. Ba4 — Maintain pin.', tip: 'Retreat to a4.' },
            { san: 'Nf6', title: '4... Nf6', speech: '4... Nf6 — Develop Knight.', tip: 'Attack e4.' },
            { san: 'O-O', title: '5. O-O', speech: '5. O-O — Castling.', tip: 'King safety.' },
            { san: 'Be7', title: '5... Be7', speech: '5... Be7 — Prepare castling.', tip: 'Develop Bishop.' },
            { san: 'Re1', title: '6. Re1', speech: '6. Re1 — Secure e4.', tip: 'Rook to e1.' },
            { san: 'b5', title: '6... b5', speech: '6... b5 — Expand Queenside.', tip: 'Push b5.' },
            { san: 'Bb3', title: '7. Bb3', speech: '7. Bb3 — Bishop b3.', tip: 'Retreat Bishop.' },
            { san: 'O-O', title: '7... O-O', speech: '7... O-O — Black castles.', tip: 'Castle Kingside.' },
            { san: 'c3', title: '8. c3', speech: '8. c3 — Prepare d4.', tip: 'Pawn to c3.' },
            { san: 'd5', title: '8... d5 — Marshall Gambit Strike!', speech: '8... d5 — The Marshall Attack! Black courageously sacrifices a central pawn for explosive Kingside attacking initiative!', tip: 'Sacrifices d5 pawn!' }
          ]
        }
      ]
    },
    {
      id: 'op_italian',
      title: 'Italian Game (Giuoco Piano & Evans)',
      description: 'One of chess\'s oldest openings! The Light-Squared Bishop targets the vulnerable f7 pawn square.',
      tips: 'Prepares quick Kingside castling while threatening direct attacks on f7.',
      variations: [
        {
          id: 'ita_giuoco',
          name: 'Giuoco Piano (Main Line)',
          description: 'The Quiet Game leading to deep tactical and positional maneuvers.',
          moveSequence: [
            { san: 'e4', title: '1. e4 — King\'s Pawn', speech: "1. e4 — Opening with the King's Pawn to claim center e4 and d5 squares.", tip: 'Controls center.' },
            { san: 'e5', title: '1... e5 — Symmetric Response', speech: "1... e5 — Black matches White's central footprint.", tip: 'Fights for center.' },
            { san: 'Nf3', title: '2. Nf3 — Attack e5', speech: "2. Nf3 — Developing the Knight to f3, putting pressure on e5 and preparing castling.", tip: 'Develops piece.' },
            { san: 'Nc6', title: '2... Nc6 — Defend e5', speech: "2... Nc6 — Black develops the Knight to defend e5.", tip: 'Defends pawn.' },
            { san: 'Bc4', title: '3. Bc4 — The Italian Bishop Strike', speech: "3. Bc4 — The Italian Game! White posts the Bishop on c4, aiming straight at the weak f7 square!", tip: 'Targets f7 square.' },
            { san: 'Bc5', title: '3... Bc5 — Giuoco Piano', speech: "3... Bc5 — The Quiet Game! Black mirrors White's Bishop placement, guarding d4.", tip: 'Mirrors Italian Bishop.' },
            { san: 'c3', title: '4. c3 — Classical Dual Pawn Center Prep', speech: "4. c3 — White prepares the c3-d4 dual pawn central breakthrough.", tip: 'Prepares d4 break.' },
            { san: 'Nf6', title: '4... Nf6 — Counter-Strike e4', speech: "4... Nf6 — Black attacks White's e4 pawn before White can build the d4 center.", tip: 'Attacks e4 pawn.' },
            { san: 'd4', title: '5. d4 — Central Explosion', speech: "5. d4 — White strikes open the center, challenging Black's c5 Bishop!", tip: 'Strikes center.' },
            { san: 'exd4', title: '5... exd4 — Exchange Pawns', speech: "5... exd4 — Black captures on d4.", tip: 'Captures d4 pawn.' },
            { san: 'cxd4', title: '6. cxd4 — Dual Pawn Dominance', speech: "6. cxd4 — White re-claims the center with two dominant pawns on e4 and d4!", tip: 'Recaptures on d4.' },
            { san: 'Bb4+', title: '6... Bb4+ — Check with Tempo', speech: "6... Bb4+ — Black delivers check to disrupt White's center momentum!", tip: 'Check with tempo.' }
          ]
        },
        {
          id: 'ita_evans',
          name: 'Evans Gambit',
          description: 'Romantic 19th-century gambit of Captain William Evans.',
          moveSequence: [
            { san: 'e4', title: '1. e4', speech: '1. e4 — King\'s Pawn.', tip: 'Center control.' },
            { san: 'e5', title: '1... e5', speech: '1... e5 — Open game.', tip: 'Equal center.' },
            { san: 'Nf3', title: '2. Nf3', speech: '2. Nf3 — Attack e5.', tip: 'Develop Knight.' },
            { san: 'Nc6', title: '2... Nc6', speech: '2... Nc6 — Defend e5.', tip: 'Defend e5.' },
            { san: 'Bc4', title: '3. Bc4', speech: '3. Bc4 — Italian Game.', tip: 'Target f7.' },
            { san: 'Bc5', title: '3... Bc5', speech: '3... Bc5 — Giuoco Piano.', tip: 'Mirror Bishop.' },
            { san: 'b4', title: '4. b4 — The Evans Gambit Sacrifice!', speech: '4. b4 — The Evans Gambit! White sacrifices the b4 wing pawn to lure Black\'s Bishop away, building a massive central pawn force with c3 and d4!', tip: 'Sacrifices b4 pawn!' },
            { san: 'Bxb4', title: '4... Bxb4 — Gambit Accepted', speech: '4... Bxb4 — Black accepts the wing pawn.', tip: 'Captures b4 pawn.' },
            { san: 'c3', title: '5. c3 — Gain Tempo on Bishop', speech: '5. c3 — White attacks the b4 Bishop with tempo to speed up d4.', tip: 'Gains tempo on Bishop.' },
            { san: 'Ba5', title: '5... Ba5 — Retreat Bishop', speech: '5... Ba5 — Black retreats the Bishop while maintaining control of the e1-a5 diagonal.', tip: 'Retreats to a5.' }
          ]
        },
        {
          id: 'ita_fried_liver',
          name: 'Fried Liver Attack (Two Knights)',
          description: 'Aggressive tactical sacrifice targeting the f7 square.',
          moveSequence: [
            { san: 'e4', title: '1. e4', speech: '1. e4 — King\'s Pawn.', tip: 'Center pawn.' },
            { san: 'e5', title: '1... e5', speech: '1... e5 — Open response.', tip: 'Equal center.' },
            { san: 'Nf3', title: '2. Nf3', speech: '2. Nf3 — Attack e5.', tip: 'Attack e5.' },
            { san: 'Nc6', title: '2... Nc6', speech: '2... Nc6 — Defend e5.', tip: 'Defend e5.' },
            { san: 'Bc4', title: '3. Bc4', speech: '3. Bc4 — Italian Game.', tip: 'Target f7.' },
            { san: 'Nf6', title: '3... Nf6 — Two Knights Defense', speech: '3... Nf6 — Two Knights Defense!', tip: 'Counter-attack e4.' },
            { san: 'Ng5', title: '4. Ng5 — Double Attack on f7!', speech: '4. Ng5 — White launches a double attack on f7 with Knight and Bishop!', tip: 'Double attack on f7.' },
            { san: 'd5', title: '4... d5 — Block Diagonal', speech: '4... d5 — Black blocks the Bishop\'s sightline.', tip: 'Blocks f7 attack.' },
            { san: 'exd5', title: '5. exd5 — Pawn Capture', speech: '5. exd5 — White takes on d5.', tip: 'Captures d5.' },
            { san: 'Nxd5', title: '5... Nxd5 — The Fatal Trap', speech: '5... Nxd5 — Black recaptures with Knight, stepping directly into the Fried Liver Attack!', tip: 'Steps into trap!' },
            { san: 'Nxf7', title: '6. Nxf7 — The Fried Liver Sacrifice!', speech: '6. Nxf7 — Knight Sacrifice! White forks Black\'s Queen and Rook, forcing Black\'s King into the open center!', tip: 'Forks Queen & Rook!' }
          ]
        }
      ]
    },
    {
      id: 'op_sicilian',
      title: 'Sicilian Defense (Najdorf, Dragon, Alapin)',
      description: 'The ultimate counter-attacking weapon against 1. e4! Black fights for center control asynchronously.',
      tips: '1. c5 prevents White from building an easy dual-pawn center with d4.',
      variations: [
        {
          id: 'sic_najdorf',
          name: 'Najdorf Variation (Main Line)',
          description: 'The preferred weapon of Kasparov and Fischer (10 moves deep).',
          moveSequence: [
            { san: 'e4', title: '1. e4', speech: '1. e4 — King\'s Pawn.', tip: 'White opens center.' },
            { san: 'c5', title: '1... c5 — Sicilian Defense', speech: '1... c5 — Sicilian Defense! Black attacks d4 from the wing.', tip: 'Asymmetric center.' },
            { san: 'Nf3', title: '2. Nf3', speech: '2. Nf3 — Open Sicilian Prep.', tip: 'Prepares d4.' },
            { san: 'd6', title: '2... d6', speech: '2... d6 — Controls e5.', tip: 'Controls e5.' },
            { san: 'd4', title: '3. d4 — Central Break', speech: '3. d4 — White breaks open the center.', tip: 'Breaks center.' },
            { san: 'cxd4', title: '3... cxd4', speech: '3... cxd4 — Black trades wing pawn for center pawn.', tip: 'Trades c5 for d4.' },
            { san: 'Nxd4', title: '4. Nxd4', speech: '4. Nxd4 — White recaptures with Knight.', tip: 'Recaptures on d4.' },
            { san: 'Nf6', title: '4... Nf6', speech: '4... Nf6 — Black attacks White\'s e4 pawn.', tip: 'Attacks e4.' },
            { san: 'Nc3', title: '5. Nc3', speech: '5. Nc3 — White defends e4 pawn.', tip: 'Defends e4.' },
            { san: 'a6', title: '5... a6 — Najdorf Signature Move', speech: '5... a6 — The Najdorf! Guards b5 against enemy Knight and Bishop intrusions while preparing b5 expansion.', tip: 'Prevents Nb5/Bb5.' },
            { san: 'Bg5', title: '6. Bg5 — Main Line Attack', speech: '6. Bg5 — White pins Black\'s Nf6 Knight and threatens e5 pressure.', tip: 'Pins Nf6.' },
            { san: 'e6', title: '6... e6 — Flexible Shield', speech: '6... e6 — Black fortifies d5 and opens path for Dark-Squared Bishop.', tip: 'Shields d5.' }
          ]
        },
        {
          id: 'sic_dragon',
          name: 'Dragon Variation',
          description: 'Fierce sharp tactical battle with opposite-side castling attacks.',
          moveSequence: [
            { san: 'e4', title: '1. e4', speech: '1. e4 — King\'s Pawn.', tip: 'Center pawn.' },
            { san: 'c5', title: '1... c5', speech: '1... c5 — Sicilian Defense.', tip: 'Wing attack.' },
            { san: 'Nf3', title: '2. Nf3', speech: '2. Nf3 — Develop Knight.', tip: 'Prepare d4.' },
            { san: 'd6', title: '2... d6', speech: '2... d6 — Pawn d6.', tip: 'Control e5.' },
            { san: 'd4', title: '3. d4', speech: '3. d4 — Open Sicilian.', tip: 'Break d4.' },
            { san: 'cxd4', title: '3... cxd4', speech: '3... cxd4 — Pawn trade.', tip: 'Trade c5 for d4.' },
            { san: 'Nxd4', title: '4. Nxd4', speech: '4. Nxd4 — Recapture Knight.', tip: 'Knight d4.' },
            { san: 'Nf6', title: '4... Nf6', speech: '4... Nf6 — Attack e4.', tip: 'Attack e4.' },
            { san: 'Nc3', title: '5. Nc3', speech: '5. Nc3 — Defend e4.', tip: 'Defend e4.' },
            { san: 'g6', title: '5... g6 — The Dragon Fianchetto!', speech: '5... g6 — The Dragon! Black prepares to fianchetto the Bishop to g7, breathing fire along the h8-a1 long diagonal!', tip: 'Prepares Bg7 dragon bishop.' },
            { san: 'Be3', title: '6. Be3 — Yugoslav Attack Setup', speech: '6. Be3 — White develops the Bishop, preparing the dreaded Yugoslav Attack!', tip: 'Prepares Qd2 & O-O-O.' },
            { san: 'Bg7', title: '6... Bg7 — Dragon Bishop', speech: '6... Bg7 — Black completes the Dragon fianchetto!', tip: 'Fianchetto Bishop.' }
          ]
        }
      ]
    },
    {
      id: 'op_queens_gambit',
      title: 'Queen\'s Gambit (QGD, QGA, Slav, KID)',
      description: 'White offers a wing pawn (c4) to entice Black to abandon the central d5 stronghold.',
      tips: 'If Black takes 2...dxc4, White claims full center dominance with e4!',
      variations: [
        {
          id: 'qg_declined',
          name: 'Queen\'s Gambit Declined (Orthodox)',
          description: 'The solid bedrock of grandmaster opening strategy.',
          moveSequence: [
            { san: 'd4', title: '1. d4 — Queen\'s Pawn', speech: "1. d4 — White opens with the Queen's Pawn, controlling e5 and d4.", tip: 'Solid center.' },
            { san: 'd5', title: '1... d5 — Solid Counter', speech: "1... d5 — Black claims equal central space.", tip: 'Solid center stake.' },
            { san: 'c4', title: '2. c4 — Queen\'s Gambit', speech: "2. c4 — The Queen's Gambit! Offering a wing pawn to control the center.", tip: 'Offers c4 pawn.' },
            { san: 'e6', title: '2... e6 — Decline the Gambit', speech: "2... e6 — Queen's Gambit Declined! Black solidifies d5 with an indestructible pawn chain.", tip: 'Solidifies d5 pawn.' },
            { san: 'Nc3', title: '3. Nc3 — Pressure d5', speech: "3. Nc3 — White develops the Knight to pressure d5.", tip: 'Pressures d5.' },
            { san: 'Nf6', title: '3... Nf6 — Develop Defender', speech: "3... Nf6 — Black develops Knight to defend d5.", tip: 'Defends d5.' },
            { san: 'Bg5', title: '4. Bg5 — Pin the Knight', speech: "4. Bg5 — White pins Black's Nf6 defender to the Queen.", tip: 'Pins Nf6.' },
            { san: 'Be7', title: '4... Be7 — Break the Pin', speech: "4... Be7 — Black unpins the Knight and prepares Kingside castling.", tip: 'Unpins Knight.' }
          ]
        },
        {
          id: 'qg_slav',
          name: 'Slav Defense',
          description: 'Solid defense maintaining the c8 Bishop\'s open diagonal.',
          moveSequence: [
            { san: 'd4', title: '1. d4', speech: '1. d4 — Queen\'s Pawn.', tip: 'Center control.' },
            { san: 'd5', title: '1... d5', speech: '1... d5 — Equal center.', tip: 'Center stake.' },
            { san: 'c4', title: '2. c4', speech: '2. c4 — Queen\'s Gambit.', tip: 'Gambit offer.' },
            { san: 'c6', title: '2... c6 — The Slav Defense', speech: '2... c6 — The Slav Defense! Black solidifies d5 without blocking the c8 Light-Squared Bishop!', tip: 'Keeps c8 Bishop open.' },
            { san: 'Nf3', title: '3. Nf3', speech: '3. Nf3 — Develop Knight.', tip: 'Control e5.' },
            { san: 'Nf6', title: '3... Nf6', speech: '3... Nf6 — Develop Knight.', tip: 'Defend d5.' },
            { san: 'Nc3', title: '4. Nc3', speech: '4. Nc3 — Pressure d5.', tip: 'Develop Nc3.' },
            { san: 'dxc4', title: '4... dxc4 — Slav Accepted', speech: '4... dxc4 — Black takes the gambit pawn and threatens to hold it with b5!', tip: 'Captures c4 pawn.' }
          ]
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
      variations: [
        {
          id: 'outpost_e5',
          name: 'e5 Outpost Infiltration',
          description: 'Dominating central outposts for crushing attacks.',
          moveSequence: [
            { san: 'Nf3', title: '1. Nf3 — Knight Mobilization', speech: "1. Nf3 — Develop your Knight toward the center.", tip: 'Develops Knight.' },
            { san: 'd5', title: '1... d5 — Enemy Pawn Stake', speech: "1... d5 — Black stakes a pawn in the center.", tip: 'Black claims space.' },
            { san: 'Ne5', title: '2. Ne5 — Dominant Outpost Landing', speech: "2. Ne5 — Knight Outpost! Landing the Knight on e5 radiates pressure in 8 directions inside enemy territory!", tip: 'Dominates central outpost.' }
          ]
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
      variations: [
        {
          id: 'opp_direct',
          name: 'Direct Opposition Duel',
          description: 'Mastering the fundamental King endgame duel.',
          moveSequence: [
            { san: 'Ke2', title: '1. Ke2 — King Mobilization', speech: "1. Ke2 — In the endgame, the King transforms into an active attacking warrior!", tip: 'Activate King.' },
            { san: 'Ke7', title: '1... Ke7 — Opposing King Advance', speech: "1... Ke7 — Black marches King toward center.", tip: 'Black activates King.' },
            { san: 'Ke3', title: '2. Ke3 — Seizing Direct Opposition', speech: "2. Ke3 — Direct Opposition! By placing your King directly opposite with 1 empty square between, you force the enemy King to step aside!", tip: 'Seizes Opposition.' }
          ]
        }
      ]
    }
  ]
};

export class AcademyManager {
  constructor() {
    this.currentSection = 'openings';
    this.currentLesson = null;
    this.currentVariation = null;
  }

  getLessons(section) {
    this.currentSection = section || 'openings';
    return ACADEMY_LESSONS[this.currentSection] || ACADEMY_LESSONS.openings;
  }
}

export const academyManager = new AcademyManager();
