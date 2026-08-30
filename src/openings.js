// Opening recognition.
//
// The academy already contains hand-written opening lines with names, so rather
// than shipping a second database we index those move sequences and match the
// game against them. Every line the tutor can teach is a line the board can
// name, and adding a lesson automatically adds recognition for it.
//
// A handful of common openings the academy does not cover are listed here too,
// so early moves still get named.

import { ACADEMY_LESSONS } from './academy.js';

// Standard opening lines with their ECO codes.
//
// These are the names and move orders themselves, which are facts about the
// game rather than anyone's creative work. They are written out here rather
// than scraped from a commercial site, whose compiled database and prose
// descriptions would be copyrighted.
//
// To go further, lichess publishes a CC0 (public domain) database of ~3,500
// named openings at github.com/lichess-org/chess-openings as TSV. Dropping that
// in means converting its rows to { eco, name, moves } — identifyOpening()
// needs no changes.
const EXTRA_LINES = [
  // --- King's Pawn: Open Games (C2x-C5x) ---
  { eco: 'B00', name: 'King\'s Pawn Opening',        moves: ['e4'] },
  { eco: 'C20', name: 'Open Game',                   moves: ['e4', 'e5'] },
  { eco: 'C20', name: 'Bishop\'s Opening',           moves: ['e4', 'e5', 'Bc4'] },
  { eco: 'C25', name: 'Vienna Game',                 moves: ['e4', 'e5', 'Nc3'] },
  { eco: 'C27', name: 'Vienna Game, Frankenstein-Dracula', moves: ['e4', 'e5', 'Nc3', 'Nf6', 'Bc4', 'Nxe4'] },
  { eco: 'C30', name: 'King\'s Gambit',              moves: ['e4', 'e5', 'f4'] },
  { eco: 'C33', name: 'King\'s Gambit Accepted',     moves: ['e4', 'e5', 'f4', 'exf4'] },
  { eco: 'C30', name: 'King\'s Gambit Declined',     moves: ['e4', 'e5', 'f4', 'Bc5'] },
  { eco: 'C36', name: 'King\'s Gambit, Falkbeer Counter-Gambit', moves: ['e4', 'e5', 'f4', 'd5'] },
  { eco: 'C40', name: 'Latvian Gambit',              moves: ['e4', 'e5', 'Nf3', 'f5'] },
  { eco: 'C41', name: 'Philidor Defense',            moves: ['e4', 'e5', 'Nf3', 'd6'] },
  { eco: 'C42', name: 'Petrov\'s Defense',           moves: ['e4', 'e5', 'Nf3', 'Nf6'] },
  { eco: 'C44', name: 'Scotch Game',                 moves: ['e4', 'e5', 'Nf3', 'Nc6', 'd4'] },
  { eco: 'C45', name: 'Scotch Game, Main Line',      moves: ['e4', 'e5', 'Nf3', 'Nc6', 'd4', 'exd4', 'Nxd4'] },
  { eco: 'C44', name: 'Ponziani Opening',            moves: ['e4', 'e5', 'Nf3', 'Nc6', 'c3'] },
  { eco: 'C44', name: 'Scotch Gambit',               moves: ['e4', 'e5', 'Nf3', 'Nc6', 'd4', 'exd4', 'Bc4'] },
  { eco: 'C46', name: 'Three Knights Game',          moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Nc3'] },
  { eco: 'C47', name: 'Four Knights Game',           moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6'] },
  { eco: 'C48', name: 'Four Knights, Spanish',       moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5'] },
  { eco: 'C50', name: 'Italian Game',                moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4'] },
  { eco: 'C50', name: 'Italian Game, Giuoco Piano',  moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5'] },
  { eco: 'C53', name: 'Giuoco Piano, Main Line',     moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3'] },
  { eco: 'C51', name: 'Evans Gambit',                moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'b4'] },
  { eco: 'C55', name: 'Two Knights Defense',         moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6'] },
  { eco: 'C57', name: 'Two Knights, Fried Liver Attack', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'Ng5', 'd5', 'exd5', 'Nxd5', 'Nxf7'] },
  { eco: 'C57', name: 'Two Knights, Traxler Counterattack', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'Ng5', 'Bc5'] },

  // --- Ruy Lopez (C6x-C9x) ---
  { eco: 'C60', name: 'Ruy Lopez',                   moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'] },
  { eco: 'C65', name: 'Ruy Lopez, Berlin Defense',   moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Nf6'] },
  { eco: 'C68', name: 'Ruy Lopez, Exchange Variation', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Bxc6'] },
  { eco: 'C70', name: 'Ruy Lopez, Morphy Defense',   moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4'] },
  { eco: 'C77', name: 'Ruy Lopez, Closed',           moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7'] },
  { eco: 'C89', name: 'Ruy Lopez, Marshall Attack',  moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'O-O', 'c3', 'd5'] },
  { eco: 'C63', name: 'Ruy Lopez, Schliemann Defense', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'f5'] },

  // --- Sicilian (B2x-B9x) ---
  { eco: 'B20', name: 'Sicilian Defense',            moves: ['e4', 'c5'] },
  { eco: 'B20', name: 'Sicilian, Smith-Morra Gambit', moves: ['e4', 'c5', 'd4', 'cxd4', 'c3'] },
  { eco: 'B21', name: 'Sicilian, Grand Prix Attack', moves: ['e4', 'c5', 'Nc3', 'Nc6', 'f4'] },
  { eco: 'B22', name: 'Sicilian, Alapin Variation',  moves: ['e4', 'c5', 'c3'] },
  { eco: 'B23', name: 'Sicilian, Closed',            moves: ['e4', 'c5', 'Nc3'] },
  { eco: 'B27', name: 'Sicilian, Hyper-Accelerated Dragon', moves: ['e4', 'c5', 'Nf3', 'g6'] },
  { eco: 'B30', name: 'Sicilian, Old Sicilian',      moves: ['e4', 'c5', 'Nf3', 'Nc6'] },
  { eco: 'B31', name: 'Sicilian, Rossolimo Attack',  moves: ['e4', 'c5', 'Nf3', 'Nc6', 'Bb5'] },
  { eco: 'B33', name: 'Sicilian, Sveshnikov',        moves: ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e5'] },
  { eco: 'B34', name: 'Sicilian, Accelerated Dragon', moves: ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'g6'] },
  { eco: 'B40', name: 'Sicilian, French Variation',  moves: ['e4', 'c5', 'Nf3', 'e6'] },
  { eco: 'B44', name: 'Sicilian, Taimanov',          moves: ['e4', 'c5', 'Nf3', 'e6', 'd4', 'cxd4', 'Nxd4', 'Nc6'] },
  { eco: 'B50', name: 'Sicilian, Modern Variations', moves: ['e4', 'c5', 'Nf3', 'd6'] },
  { eco: 'B54', name: 'Sicilian, Open',              moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4'] },
  { eco: 'B70', name: 'Sicilian, Dragon Variation',  moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'g6'] },
  { eco: 'B76', name: 'Sicilian, Dragon, Yugoslav Attack', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'g6', 'Be3', 'Bg7', 'f3'] },
  { eco: 'B80', name: 'Sicilian, Scheveningen',      moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e6'] },
  { eco: 'B90', name: 'Sicilian, Najdorf',           moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6'] },
  { eco: 'B97', name: 'Sicilian, Najdorf, Poisoned Pawn', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Bg5', 'e6', 'f4', 'Qb6'] },

  // --- French, Caro-Kann and other semi-open (B0x-C1x) ---
  { eco: 'C00', name: 'French Defense',              moves: ['e4', 'e6'] },
  { eco: 'C02', name: 'French, Advance Variation',   moves: ['e4', 'e6', 'd4', 'd5', 'e5'] },
  { eco: 'C03', name: 'French, Tarrasch Variation',  moves: ['e4', 'e6', 'd4', 'd5', 'Nd2'] },
  { eco: 'C10', name: 'French, Rubinstein Variation', moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'dxe4'] },
  { eco: 'C11', name: 'French, Classical',           moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Nf6'] },
  { eco: 'C15', name: 'French, Winawer Variation',   moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Bb4'] },
  { eco: 'B10', name: 'Caro-Kann Defense',           moves: ['e4', 'c6'] },
  { eco: 'B12', name: 'Caro-Kann, Advance Variation', moves: ['e4', 'c6', 'd4', 'd5', 'e5'] },
  { eco: 'B13', name: 'Caro-Kann, Exchange Variation', moves: ['e4', 'c6', 'd4', 'd5', 'exd5'] },
  { eco: 'B18', name: 'Caro-Kann, Classical',        moves: ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Bf5'] },
  { eco: 'B01', name: 'Scandinavian Defense',        moves: ['e4', 'd5'] },
  { eco: 'B02', name: 'Alekhine\'s Defense',         moves: ['e4', 'Nf6'] },
  { eco: 'B07', name: 'Pirc Defense',                moves: ['e4', 'd6'] },
  { eco: 'B06', name: 'Modern Defense',              moves: ['e4', 'g6'] },
  { eco: 'B00', name: 'Nimzowitsch Defense',         moves: ['e4', 'Nc6'] },
  { eco: 'B00', name: 'Owen\'s Defense',             moves: ['e4', 'b6'] },

  // --- Queen's Pawn: Queen's Gambit (D0x-D6x) ---
  { eco: 'A40', name: 'Queen\'s Pawn Opening',       moves: ['d4'] },
  { eco: 'D00', name: 'Queen\'s Pawn Game',          moves: ['d4', 'd5'] },
  { eco: 'D00', name: 'Blackmar-Diemer Gambit',      moves: ['d4', 'd5', 'e4'] },
  { eco: 'D01', name: 'Richter-Veresov Attack',      moves: ['d4', 'd5', 'Nc3', 'Nf6', 'Bg5'] },
  { eco: 'D02', name: 'London System',               moves: ['d4', 'd5', 'Nf3', 'Nf6', 'Bf4'] },
  { eco: 'D06', name: 'Queen\'s Gambit',             moves: ['d4', 'd5', 'c4'] },
  { eco: 'D08', name: 'Queen\'s Gambit, Albin Counter-Gambit', moves: ['d4', 'd5', 'c4', 'e5'] },
  { eco: 'D10', name: 'Slav Defense',                moves: ['d4', 'd5', 'c4', 'c6'] },
  { eco: 'D20', name: 'Queen\'s Gambit Accepted',    moves: ['d4', 'd5', 'c4', 'dxc4'] },
  { eco: 'D30', name: 'Queen\'s Gambit Declined',    moves: ['d4', 'd5', 'c4', 'e6'] },
  { eco: 'D32', name: 'QGD, Tarrasch Defense',       moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'c5'] },
  { eco: 'D35', name: 'QGD, Exchange Variation',     moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'cxd5'] },
  { eco: 'D43', name: 'Semi-Slav Defense',           moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Nf3', 'c6'] },
  { eco: 'D85', name: 'Grünfeld Defense',            moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'd5'] },

  // --- Indian Defenses (A4x-A6x, E0x-E9x) ---
  { eco: 'A45', name: 'Indian Defense',              moves: ['d4', 'Nf6'] },
  { eco: 'A45', name: 'Trompowsky Attack',           moves: ['d4', 'Nf6', 'Bg5'] },
  { eco: 'A46', name: 'Indian Game, London System',  moves: ['d4', 'Nf6', 'Nf3', 'e6', 'Bf4'] },
  { eco: 'A56', name: 'Benoni Defense',              moves: ['d4', 'Nf6', 'c4', 'c5'] },
  { eco: 'A57', name: 'Benko Gambit',                moves: ['d4', 'Nf6', 'c4', 'c5', 'd5', 'b5'] },
  { eco: 'A80', name: 'Dutch Defense',               moves: ['d4', 'f5'] },
  { eco: 'E00', name: 'Catalan Opening',             moves: ['d4', 'Nf6', 'c4', 'e6', 'g3'] },
  { eco: 'E12', name: 'Queen\'s Indian Defense',     moves: ['d4', 'Nf6', 'c4', 'e6', 'Nf3', 'b6'] },
  { eco: 'E20', name: 'Nimzo-Indian Defense',        moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4'] },
  { eco: 'E60', name: 'King\'s Indian Defense',      moves: ['d4', 'Nf6', 'c4', 'g6'] },
  { eco: 'E97', name: 'King\'s Indian, Classical',   moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'Nf3', 'O-O', 'Be2', 'e5'] },

  // --- Flank openings (A0x-A3x) ---
  { eco: 'A10', name: 'English Opening',             moves: ['c4'] },
  { eco: 'A20', name: 'English, King\'s English',    moves: ['c4', 'e5'] },
  { eco: 'A30', name: 'English, Symmetrical',        moves: ['c4', 'c5'] },
  { eco: 'A15', name: 'English, Anglo-Indian',       moves: ['c4', 'Nf6'] },
  { eco: 'A04', name: 'Réti Opening',                moves: ['Nf3'] },
  { eco: 'A09', name: 'Réti Opening, Advance',       moves: ['Nf3', 'd5', 'c4'] },
  { eco: 'A07', name: 'King\'s Indian Attack',       moves: ['Nf3', 'd5', 'g3'] },
  { eco: 'A02', name: 'Bird\'s Opening',             moves: ['f4'] },
  { eco: 'A03', name: 'Bird\'s Opening, Dutch Variation', moves: ['f4', 'd5'] },
  { eco: 'A00', name: 'Nimzo-Larsen Attack',         moves: ['b3'] },
  { eco: 'A00', name: 'Polish (Sokolsky) Opening',   moves: ['b4'] },
  { eco: 'A00', name: 'Grob\'s Attack',              moves: ['g4'] },
  { eco: 'A00', name: 'Van\'t Kruijs Opening',       moves: ['e3'] }
];

// Flatten every academy variation into { name, moves } entries.
function collectAcademyLines() {
  const lines = [];
  for (const section of Object.values(ACADEMY_LESSONS)) {
    if (!Array.isArray(section)) continue;
    for (const lesson of section) {
      const variations = lesson.variations && lesson.variations.length
        ? lesson.variations
        : [{ name: null, moveSequence: lesson.moveSequence }];

      for (const variation of variations) {
        const sequence = variation.moveSequence;
        if (!Array.isArray(sequence) || sequence.length === 0) continue;

        // Lessons that begin from a set position (endgames, tactics) describe a
        // position, not an opening — their moves are not playable from the
        // start and must never be matched against a game's move list.
        if (variation.startFen || lesson.startFen) continue;

        const moves = sequence.map(s => s.san).filter(Boolean);
        if (moves.length === 0) continue;

        lines.push({
          eco: null,
          name: variation.name ? `${lesson.title} — ${variation.name}` : lesson.title,
          moves
        });
      }
    }
  }
  return lines;
}

// All known lines, longest first so the most specific name wins.
const ALL_LINES = [...collectAcademyLines(), ...EXTRA_LINES]
  .sort((a, b) => b.moves.length - a.moves.length);

// Openings only apply to the opening. Past this many plies, whatever the
// position has become is no longer meaningfully "the Ruy Lopez".
const MAX_OPENING_PLIES = 24;

// Longest known line that is a prefix of the game's moves.
// `history` is an array of SAN strings, as returned by chess.js history().
export function identifyOpening(history) {
  if (!history || history.length === 0) return null;
  const relevant = history.slice(0, MAX_OPENING_PLIES);

  for (const line of ALL_LINES) {
    if (line.moves.length > relevant.length) continue;
    let match = true;
    for (let i = 0; i < line.moves.length; i++) {
      if (line.moves[i] !== relevant[i]) { match = false; break; }
    }
    if (match) {
      return {
        name: line.name,
        eco: line.eco || null,
        plies: line.moves.length,
        // "C89 · Ruy Lopez, Marshall Attack"
        label: line.eco ? `${line.eco} · ${line.name}` : line.name
      };
    }
  }
  return null;
}

export { ALL_LINES };
