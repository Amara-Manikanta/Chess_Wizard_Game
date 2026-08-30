// Built-in chess engine: alpha-beta with iterative deepening, a time budget,
// killer/history move ordering, a bounded transposition table and a tapered
// evaluation. Used as the fallback when Stockfish WASM is unavailable, and for
// the cheap live eval bar.

const PIECE_VALUES = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 };

// Endgame values differ slightly — rooks and pawns gain relative worth.
const PIECE_VALUES_END = { p: 120, n: 310, b: 330, r: 530, q: 950, k: 20000 };

// Positional tables, index 0 = a8 .. 63 = h1 (White's perspective).
const PAWN_TABLE = [
   0,  0,  0,  0,  0,  0,  0,  0,
  50, 50, 50, 50, 50, 50, 50, 50,
  10, 10, 20, 30, 30, 20, 10, 10,
   5,  5, 10, 25, 25, 10,  5,  5,
   0,  0,  0, 20, 20,  0,  0,  0,
   5, -5,-10,  0,  0,-10, -5,  5,
   5, 10, 10,-20,-20, 10, 10,  5,
   0,  0,  0,  0,  0,  0,  0,  0
];

const PAWN_TABLE_END = [
   0,  0,  0,  0,  0,  0,  0,  0,
  90, 90, 90, 90, 90, 90, 90, 90,
  60, 60, 60, 60, 60, 60, 60, 60,
  35, 35, 35, 35, 35, 35, 35, 35,
  20, 20, 20, 20, 20, 20, 20, 20,
  10, 10, 10, 10, 10, 10, 10, 10,
   5,  5,  5,  5,  5,  5,  5,  5,
   0,  0,  0,  0,  0,  0,  0,  0
];

const KNIGHT_TABLE = [
  -50,-40,-30,-30,-30,-30,-40,-50,
  -40,-20,  0,  0,  0,  0,-20,-40,
  -30,  0, 10, 15, 15, 10,  0,-30,
  -30,  5, 15, 20, 20, 15,  5,-30,
  -30,  0, 15, 20, 20, 15,  0,-30,
  -30,  5, 10, 15, 15, 10,  5,-30,
  -40,-20,  0,  5,  5,  0,-20,-40,
  -50,-40,-30,-30,-30,-30,-40,-50
];

const BISHOP_TABLE = [
  -20,-10,-10,-10,-10,-10,-10,-20,
  -10,  0,  0,  0,  0,  0,  0,-10,
  -10,  0,  5, 10, 10,  5,  0,-10,
  -10,  5,  5, 10, 10,  5,  5,-10,
  -10,  0, 10, 10, 10, 10,  0,-10,
  -10, 10, 10, 10, 10, 10, 10,-10,
  -10,  5,  0,  0,  0,  0,  5,-10,
  -20,-10,-10,-10,-10,-10,-10,-20
];

const ROOK_TABLE = [
    0,  0,  0,  0,  0,  0,  0,  0,
    5, 10, 10, 10, 10, 10, 10,  5,
   -5,  0,  0,  0,  0,  0,  0, -5,
   -5,  0,  0,  0,  0,  0,  0, -5,
   -5,  0,  0,  0,  0,  0,  0, -5,
   -5,  0,  0,  0,  0,  0,  0, -5,
   -5,  0,  0,  0,  0,  0,  0, -5,
    0,  0,  0,  5,  5,  0,  0,  0
];

const QUEEN_TABLE = [
  -20,-10,-10, -5, -5,-10,-10,-20,
  -10,  0,  0,  0,  0,  0,  0,-10,
  -10,  0,  5,  5,  5,  5,  0,-10,
   -5,  0,  5,  5,  5,  5,  0, -5,
    0,  0,  5,  5,  5,  5,  0, -5,
  -10,  5,  5,  5,  5,  5,  0,-10,
  -10,  0,  5,  0,  0,  0,  0,-10,
  -20,-10,-10, -5, -5,-10,-10,-20
];

// Midgame: hide behind the pawn shield. Endgame: march to the centre.
const KING_MIDGAME_TABLE = [
  -30,-40,-40,-50,-50,-40,-40,-30,
  -30,-40,-40,-50,-50,-40,-40,-30,
  -30,-40,-40,-50,-50,-40,-40,-30,
  -30,-40,-40,-50,-50,-40,-40,-30,
  -20,-30,-30,-40,-40,-30,-30,-20,
  -10,-20,-20,-20,-20,-20,-20,-10,
   20, 20,  0,  0,  0,  0, 20, 20,
   20, 30, 10,  0,  0, 10, 30, 20
];

const KING_ENDGAME_TABLE = [
  -50,-40,-30,-20,-20,-30,-40,-50,
  -30,-20,-10,  0,  0,-10,-20,-30,
  -30,-10, 20, 30, 30, 20,-10,-30,
  -30,-10, 30, 40, 40, 30,-10,-30,
  -30,-10, 30, 40, 40, 30,-10,-30,
  -30,-10, 20, 30, 30, 20,-10,-30,
  -30,-30,  0,  0,  0,  0,-30,-30,
  -50,-30,-30,-30,-30,-30,-30,-50
];

const TABLES_MID = {
  p: PAWN_TABLE, n: KNIGHT_TABLE, b: BISHOP_TABLE,
  r: ROOK_TABLE, q: QUEEN_TABLE, k: KING_MIDGAME_TABLE
};
const TABLES_END = {
  p: PAWN_TABLE_END, n: KNIGHT_TABLE, b: BISHOP_TABLE,
  r: ROOK_TABLE, q: QUEEN_TABLE, k: KING_ENDGAME_TABLE
};

// Passed-pawn bonus by rank travelled (index = ranks advanced from home).
const PASSED_PAWN_BONUS = [0, 10, 20, 35, 60, 100, 160, 0];

const MATE_SCORE = 100000;
const MATE_THRESHOLD = MATE_SCORE - 1000;

// A finite stand-in for infinity. Using Number.INFINITY as a search bound
// breaks null-window arithmetic: -Infinity + 1 is still -Infinity, which makes
// zero-width windows collapse and poisons the search with infinite scores.
const INF = 1e9;

// Transposition table bound kinds. Storing these is what makes it safe to reuse
// a cached score that was produced under a different alpha-beta window.
const EXACT = 0;
const LOWER_BOUND = 1;
const UPPER_BOUND = 2;

class TimeoutSignal extends Error {}

const FILES = 'abcdefgh';

// chess.js stores squares in 0x88 form: index 0 is a8, rank = index >> 4
// (0 = rank 8), file = index & 15.
function algebraic(sq) {
  return FILES[sq & 15] + (8 - (sq >> 4));
}

// chess.js's public moves({verbose:true}) builds a SAN string for every move,
// which costs ~400us per call and dominated the old search. The internal
// generator returns raw 0x88 moves in ~13us — 30x cheaper — and _makeMove /
// _undoMove skip SAN and history bookkeeping too. These are private APIs, so
// we probe for them once and keep a correct (slower) public-API path as a
// fallback in case a chess.js upgrade removes them.
function detectFastPath(game) {
  try {
    return typeof game._moves === 'function' &&
           typeof game._makeMove === 'function' &&
           typeof game._undoMove === 'function' &&
           typeof game._computeHash === 'function' &&
           Array.isArray(game._board);
  } catch (e) {
    return false;
  }
}

export class ChessEngine {
  constructor() {
    this.transpositionTable = new Map();
    this.maxTableSize = 200000;
    this.killers = [];
    this.history = new Map();
    this.nodes = 0;
    this.deadline = Infinity;
    this.fastPath = null; // resolved lazily against the first game we see
  }

  clearCache() {
    if (this.transpositionTable.size > this.maxTableSize) {
      this.transpositionTable.clear();
    }
  }

  resetSearchState() {
    this.killers = [];
    this.history = new Map();
    this.nodes = 0;
  }

  // --- CHESS.JS ACCESS LAYER ------------------------------------------------
  // Everything in the search goes through these so the fast internal path and
  // the public fallback stay interchangeable.

  useFastPath(game) {
    if (this.fastPath === null) this.fastPath = detectFastPath(game);
    return this.fastPath;
  }

  genMoves(game) {
    return this.useFastPath(game)
      ? game._moves({ legal: true })
      : game.moves({ verbose: true });
  }

  make(game, move) {
    if (this.useFastPath(game)) game._makeMove(move);
    else game.move(move);
  }

  unmake(game) {
    if (this.useFastPath(game)) game._undoMove();
    else game.undo();
  }

  // Transposition key. The internal Zobrist hash is both cheaper and a better
  // key than a FEN string.
  posKey(game) {
    return this.useFastPath(game) ? game._computeHash() : game.fen();
  }

  // Move identity for killers, history and TT move matching. Internal moves use
  // numeric squares, public ones use algebraic strings; both are stable keys.
  moveKey(move) {
    return `${move.from}:${move.to}:${move.promotion || ''}`;
  }

  // Iterate the position as {type, color} plus a table index where 0 = a8.
  // Reads the raw 0x88 array on the fast path to avoid allocating an 8x8 array
  // at every evaluated node.
  forEachPiece(game, visit) {
    if (this.useFastPath(game)) {
      const board = game._board;
      for (let sq = 0; sq < 128; sq++) {
        if (sq & 0x88) { sq += 7; continue; }
        const piece = board[sq];
        if (!piece) continue;
        const rank = sq >> 4;
        const file = sq & 15;
        visit(piece, rank * 8 + file, rank, file);
      }
    } else {
      const board = game.board();
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const piece = board[r][c];
          if (piece) visit(piece, r * 8 + c, r, c);
        }
      }
    }
  }

  // --- EVALUATION -----------------------------------------------------------

  // Public evaluation, including terminal states. Used by the eval bar and
  // analysis, where correctness matters more than speed.
  // + favours White, - favours Black. Always from White's point of view.
  evaluateBoard(game) {
    if (game.isCheckmate()) {
      return game.turn() === 'w' ? -MATE_SCORE : MATE_SCORE;
    }
    if (game.isDraw() || game.isStalemate() || game.isThreefoldRepetition()) {
      return 0;
    }
    return this.evaluateFast(game);
  }

  // Search-internal evaluation. Deliberately does NOT detect checkmate,
  // stalemate or repetition: each of those costs a full legal move generation
  // in chess.js, and the search already knows the terminal state from the move
  // list it just built. Skipping them here is worth several times the speed.
  evaluateFast(game) {
    // Single pass: collect material, phase weights and pawn structure at once.
    const phaseWeights = { n: 1, b: 1, r: 2, q: 4 };
    let phaseRaw = 0;
    const bishops = { w: 0, b: 0 };
    const pawnFiles = { w: [0,0,0,0,0,0,0,0], b: [0,0,0,0,0,0,0,0] };
    const pawns = [];
    const pieces = [];
    const kings = { w: null, b: null };

    this.forEachPiece(game, (piece, idx, r, c) => {
      if (phaseWeights[piece.type]) phaseRaw += phaseWeights[piece.type];
      pieces.push({ piece, idx });
      if (piece.type === 'b') bishops[piece.color]++;
      if (piece.type === 'k') kings[piece.color] = { r, c };
      if (piece.type === 'p') {
        pawnFiles[piece.color][c]++;
        pawns.push({ color: piece.color, file: c, rank: r });
      }
    });

    const phase = Math.min(1, phaseRaw / 24);
    const endPhase = 1 - phase;
    let score = 0;

    for (const { piece, idx } of pieces) {
      const tableIdx = piece.color === 'w' ? idx : 63 - idx;
      const midVal = PIECE_VALUES[piece.type] + TABLES_MID[piece.type][tableIdx];
      const endVal = PIECE_VALUES_END[piece.type] + TABLES_END[piece.type][tableIdx];
      const blended = midVal * phase + endVal * endPhase;
      score += piece.color === 'w' ? blended : -blended;
    }

    // Bishop pair is worth about half a pawn.
    if (bishops.w >= 2) score += 45;
    if (bishops.b >= 2) score -= 45;

    for (const color of ['w', 'b']) {
      const sign = color === 'w' ? 1 : -1;
      const own = pawnFiles[color];
      for (let f = 0; f < 8; f++) {
        if (own[f] === 0) continue;
        // Doubled pawns.
        if (own[f] > 1) score -= sign * 18 * (own[f] - 1);
        // Isolated pawns: no friendly pawn on either adjacent file.
        const leftEmpty = f === 0 || own[f - 1] === 0;
        const rightEmpty = f === 7 || own[f + 1] === 0;
        if (leftEmpty && rightEmpty) score -= sign * 20;
      }
    }

    // Passed pawns: no enemy pawn ahead on this or an adjacent file.
    for (const pawn of pawns) {
      const enemy = pawn.color === 'w' ? 'b' : 'w';
      const advanced = pawn.color === 'w' ? 6 - pawn.rank : pawn.rank - 1;
      let blocked = false;
      for (const other of pawns) {
        if (other.color !== enemy) continue;
        if (Math.abs(other.file - pawn.file) > 1) continue;
        const ahead = pawn.color === 'w' ? other.rank < pawn.rank : other.rank > pawn.rank;
        if (ahead) { blocked = true; break; }
      }
      if (!blocked) {
        const rankIdx = Math.max(0, Math.min(7, advanced));
        // Passed pawns matter far more in the endgame.
        const bonus = PASSED_PAWN_BONUS[rankIdx] * (0.5 + 0.5 * endPhase);
        score += pawn.color === 'w' ? bonus : -bonus;
      }
    }

    // King safety: count the pawn shield in front of the king. Only meaningful
    // while there is still enough material to mount an attack.
    if (phase > 0.3) {
      // Rank/file lookup of pawns, keyed as rank*8+file.
      const pawnAt = new Set();
      for (const p of pawns) pawnAt.add(`${p.color}${p.rank * 8 + p.file}`);

      for (const color of ['w', 'b']) {
        const king = kings[color];
        if (!king) continue;
        // White advances up the board, which is a decreasing rank index.
        const shieldRank = king.r + (color === 'w' ? -1 : 1);
        let shield = 0;
        if (shieldRank < 0 || shieldRank > 7) {
          shield = 3; // No rank in front; nothing to penalise.
        } else {
          for (let dc = -1; dc <= 1; dc++) {
            const f = king.c + dc;
            if (f < 0 || f > 7) { shield++; continue; } // Board edge shields too.
            if (pawnAt.has(`${color}${shieldRank * 8 + f}`)) shield++;
          }
        }
        const penalty = (3 - shield) * 15 * phase;
        score -= color === 'w' ? penalty : -penalty;
      }
    }

    return Math.round(score);
  }

  // --- MOVE ORDERING --------------------------------------------------------

  // Good ordering is what makes alpha-beta actually prune. Order: TT move,
  // then winning captures (MVV-LVA), then promotions, killers, history.
  orderMoves(moves, ply, ttMove) {
    const scored = moves.map(move => {
      let score = 0;

      if (ttMove && move.from === ttMove.from && move.to === ttMove.to &&
          move.promotion === ttMove.promotion) {
        score += 1000000;
      }
      if (move.captured) {
        score += 100000 + (PIECE_VALUES[move.captured] * 10) - PIECE_VALUES[move.piece];
      }
      if (move.promotion) {
        score += 90000 + PIECE_VALUES[move.promotion];
      }

      if (!move.captured) {
        const key = this.moveKey(move);
        const killerPair = this.killers[ply];
        if (killerPair) {
          if (killerPair[0] === key) score += 80000;
          else if (killerPair[1] === key) score += 70000;
        }
        score += this.history.get(key) || 0;
      }

      return { move, score };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.map(s => s.move);
  }

  recordKiller(move, ply) {
    if (move.captured) return;
    const key = this.moveKey(move);
    if (!this.killers[ply]) this.killers[ply] = [null, null];
    const pair = this.killers[ply];
    if (pair[0] === key) return;
    pair[1] = pair[0];
    pair[0] = key;
  }

  recordHistory(move, depth) {
    if (move.captured) return;
    const key = this.moveKey(move);
    this.history.set(key, (this.history.get(key) || 0) + depth * depth);
  }

  // --- SEARCH ---------------------------------------------------------------

  checkTime() {
    // Only poll the clock every 2048 nodes; Date.now() is not free.
    if ((this.nodes & 2047) === 0 && Date.now() > this.deadline) {
      throw new TimeoutSignal();
    }
  }

  // Negamax-style quiescence: only captures and promotions, so it terminates.
  // Resolves the position until it is "quiet" and the static eval is meaningful.
  quiescence(game, alpha, beta, color, ply) {
    this.nodes++;
    this.checkTime();

    // One move generation serves both terminal detection and the capture list.
    const all = this.genMoves(game);
    if (all.length === 0) {
      return game.inCheck() ? -MATE_SCORE + ply : 0;
    }

    // Eval is White-relative; flip it so the side to move is always maximising.
    const standPat = color * this.evaluateFast(game);
    if (standPat >= beta) return beta;
    if (standPat > alpha) alpha = standPat;

    // Delta pruning: if even winning a queen cannot raise alpha, stop.
    if (standPat + 975 < alpha) return alpha;

    const noisy = all.filter(m => m.captured || m.promotion);
    const ordered = this.orderMoves(noisy, 0, null);

    for (const move of ordered) {
      this.make(game, move);
      let score;
      // finally, not a plain unmake: a timeout throws through here, and an
      // un-undone move would leave the caller's game object deep in the tree.
      try {
        score = -this.quiescence(game, -beta, -alpha, -color, ply + 1);
      } finally {
        this.unmake(game);
      }

      if (score >= beta) return beta;
      if (score > alpha) alpha = score;
    }
    return alpha;
  }

  // Negamax with alpha-beta, transposition table, null-move pruning and late
  // move reductions. Returns a score from the side-to-move's point of view.
  search(game, depth, alpha, beta, ply, color, allowNull = true) {
    this.nodes++;
    this.checkTime();

    const alphaOrig = alpha;
    const key = this.posKey(game);
    const cached = this.transpositionTable.get(key);
    let ttMove = null;

    if (cached) {
      ttMove = cached.move;
      if (cached.depth >= depth) {
        if (cached.flag === EXACT) {
          return { score: cached.score, move: cached.move };
        }
        if (cached.flag === LOWER_BOUND && cached.score > alpha) alpha = cached.score;
        else if (cached.flag === UPPER_BOUND && cached.score < beta) beta = cached.score;
        if (alpha >= beta) return { score: cached.score, move: cached.move };
      }
    }

    if (depth <= 0) {
      return { score: this.quiescence(game, alpha, beta, color, ply), move: null };
    }

    // Generate once and reuse for terminal detection and the main loop.
    // chess.js move generation is the dominant cost per node.
    let moves = this.genMoves(game);
    if (moves.length === 0) {
      // Prefer mates that arrive sooner.
      return { score: game.inCheck() ? -MATE_SCORE + ply : 0, move: null };
    }

    const inCheck = game.inCheck();

    // Null-move pruning: give the opponent a free move; if we are still winning
    // comfortably, this branch is not worth searching to full depth. Skipped in
    // check, at the root, and in likely-zugzwang endgames.
    if (allowNull && !inCheck && ply > 0 && depth >= 3 && this.hasNonPawnMaterial(game)) {
      const R = 2 + Math.floor(depth / 6);
      const restore = this.applyNullMove(game);
      if (restore) {
        let nullScore;
        try {
          nullScore = -this.search(
            game, depth - 1 - R, -beta, -beta + 1, ply + 1, -color, false
          ).score;
        } finally {
          restore();
        }
        if (nullScore >= beta) {
          return { score: beta, move: null };
        }
      }
    }

    moves = this.orderMoves(moves, ply, ttMove);

    let bestScore = -INF;
    let bestMove = null;
    let moveIndex = 0;

    for (const move of moves) {
      this.make(game, move);

      let score;
      // finally, not a plain unmake: a timeout throws through here, and an
      // un-undone move would leave the caller's game object deep in the tree.
      try {
        // Late move reductions: moves ordered late are unlikely to be best, so
        // search them shallower first and only re-search if one surprises us.
        const canReduce = moveIndex >= 4 && depth >= 3 && !move.captured &&
                          !move.promotion && !inCheck && !game.inCheck();

        if (canReduce) {
          score = -this.search(game, depth - 2, -alpha - 1, -alpha, ply + 1, -color).score;
          if (score > alpha) {
            score = -this.search(game, depth - 1, -beta, -alpha, ply + 1, -color).score;
          }
        } else {
          score = -this.search(game, depth - 1, -beta, -alpha, ply + 1, -color).score;
        }
      } finally {
        this.unmake(game);
      }

      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
      if (score > alpha) alpha = score;
      if (alpha >= beta) {
        this.recordKiller(move, ply);
        this.recordHistory(move, depth);
        break;
      }
      moveIndex++;
    }

    let flag = EXACT;
    if (bestScore <= alphaOrig) flag = UPPER_BOUND;
    else if (bestScore >= beta) flag = LOWER_BOUND;

    if (this.transpositionTable.size < this.maxTableSize) {
      this.transpositionTable.set(key, { depth, score: bestScore, flag, move: bestMove });
    }

    return { score: bestScore, move: bestMove };
  }

  hasNonPawnMaterial(game) {
    const turn = game.turn();
    let found = false;
    this.forEachPiece(game, (piece) => {
      if (!found && piece.color === turn && piece.type !== 'p' && piece.type !== 'k') {
        found = true;
      }
    });
    return found;
  }

  // Hand the opponent a free move by flipping the side to move and clearing en
  // passant. Returns an undo function, or null if a null move is not available
  // here. On the fast path this mutates two fields instead of rebuilding a
  // whole Chess object from FEN, which the old version did at every null node.
  applyNullMove(game) {
    if (this.useFastPath(game)) {
      const savedTurn = game._turn;
      const savedEp = game._epSquare;
      game._turn = savedTurn === 'w' ? 'b' : 'w';
      game._epSquare = -1;
      return () => {
        game._turn = savedTurn;
        game._epSquare = savedEp;
      };
    }

    // On the public fallback there is no safe way to flip the side to move:
    // load() would clear the move history that undo() depends on. Skip the
    // optimisation rather than corrupt the game state.
    return null;
  }

  // Iterative deepening: search depth 1, then 2, then 3... keeping the best
  // move from the last completed depth. This is what makes a time budget work
  // — we can stop at any moment and still have a sound move to play.
  searchWithBudget(game, maxDepth, timeBudgetMs) {
    this.resetSearchState();
    this.clearCache();
    this.deadline = Date.now() + timeBudgetMs;

    const color = game.turn() === 'w' ? 1 : -1;
    // The search mutates the caller's game in place and relies on unwinding
    // cleanly. Snapshot the position so a leak can be detected rather than
    // silently handing the UI a move for the wrong position.
    const fenBefore = game.fen();
    let best = { score: 0, move: null, depth: 0 };

    for (let depth = 1; depth <= maxDepth; depth++) {
      try {
        const result = this.search(game, depth, -INF, INF, 0, color);
        if (result.move) {
          best = { score: result.score, move: result.move, depth };
        }
        // A forced mate is found; no point searching deeper.
        if (Math.abs(result.score) > MATE_THRESHOLD) break;
      } catch (e) {
        if (e instanceof TimeoutSignal) break;
        throw e;
      }
      if (Date.now() > this.deadline) break;
    }

    this.deadline = Infinity;

    if (game.fen() !== fenBefore) {
      // Should be unreachable; means an unmake was skipped somewhere.
      console.error('Engine left the board in a modified state; discarding result.');
      return { score: 0, move: null, depth: 0 };
    }

    return best;
  }

  // --- PUBLIC API -----------------------------------------------------------

  // The search works with raw internal moves, which the board and move history
  // cannot consume. Resolve one back to a full public move object (algebraic
  // squares, SAN, captured piece) by matching it against the verbose list. This
  // costs one verbose generation per search, not per node.
  toPublicMove(game, move) {
    if (!move) return null;
    if (typeof move.from === 'string') return move; // already public

    const from = algebraic(move.from);
    const to = algebraic(move.to);
    const promotion = move.promotion || undefined;

    return game.moves({ verbose: true }).find(m =>
      m.from === from && m.to === to &&
      (m.promotion || undefined) === promotion
    ) || null;
  }

  // Score every root move with a full alpha-beta window. Normal search only
  // proves that non-best moves are "no better than the best", which is useless
  // for picking a deliberately weaker move — the scores would all be clipped to
  // alpha. Costs more than a normal search, so it is only used for the weaker
  // opponents, which search shallowly anyway.
  scoreRootMoves(game, maxDepth, timeBudgetMs) {
    this.resetSearchState();
    this.clearCache();
    this.deadline = Date.now() + timeBudgetMs;

    const color = game.turn() === 'w' ? 1 : -1;
    const fenBefore = game.fen();

    let moves = this.orderMoves(this.genMoves(game), 0, null);
    // Only ever return a pass that scored *every* root move. Abandoning a
    // partial pass matters: a timeout halfway through would otherwise leave an
    // arbitrary prefix of the move list, and picking from that is how the
    // engine ends up shuffling rooks around.
    let completed = [];

    for (let depth = 1; depth <= maxDepth; depth++) {
      const scored = [];
      let timedOut = false;

      try {
        for (const move of moves) {
          this.make(game, move);
          let score;
          try {
            score = -this.search(game, depth - 1, -INF, INF, 1, -color).score;
          } finally {
            this.unmake(game);
          }
          scored.push({ move, score });
        }
      } catch (e) {
        if (!(e instanceof TimeoutSignal)) throw e;
        timedOut = true;
      }

      if (timedOut) break;

      completed = scored.sort((a, b) => b.score - a.score);
      // Search the best moves first next time round; better ordering means
      // deeper passes fit inside the same budget.
      moves = completed.map(s => s.move);

      if (Date.now() > this.deadline) break;
    }

    this.deadline = Infinity;
    if (game.fen() !== fenBefore) return [];
    return completed;
  }

  // Difficulty presets. Strength is shaped by three independent knobs rather
  // than depth alone: how deep it looks, how long it may think, and how far
  // below best a move may fall before it is rejected. The last one is what
  // makes weak opponents feel human — they play real but second-rate moves
  // rather than random ones.
  static DIFFICULTY = {
    // slack: how many centipawns below the best move is acceptable.
    // blunderRate: how often to pick from the whole acceptable pool instead of
    // near the top, i.e. how often they genuinely go wrong.
    ron:        { maxDepth: 2,  timeMs: 400,  slack: 180, blunderRate: 0.35 },
    hermione:   { maxDepth: 4,  timeMs: 800,  slack: 90,  blunderRate: 0.20 },
    snape:      { maxDepth: 7,  timeMs: 1500, slack: 30,  blunderRate: 0.08 },
    dumbledore: { maxDepth: 14, timeMs: 3000, slack: 0,   blunderRate: 0    }
  };

  getMoveAtStrength(game, difficulty = 'ron') {
    const cfg = ChessEngine.DIFFICULTY[difficulty] || ChessEngine.DIFFICULTY.ron;
    const legal = game.moves({ verbose: true });
    if (legal.length === 0) return null;

    // Full strength: just play the best move found.
    if (cfg.slack === 0) {
      const best = this.searchWithBudget(game, cfg.maxDepth, cfg.timeMs);
      return this.toPublicMove(game, best.move) || legal[0];
    }

    const scored = this.scoreRootMoves(game, cfg.maxDepth, cfg.timeMs);
    if (scored.length === 0) {
      const best = this.searchWithBudget(game, cfg.maxDepth, cfg.timeMs);
      return this.toPublicMove(game, best.move) || legal[0];
    }

    const topScore = scored[0].score;

    // Never throw away a forced mate or walk into one, at any level.
    if (Math.abs(topScore) > MATE_THRESHOLD) {
      return this.toPublicMove(game, scored[0].move) || legal[0];
    }

    // Candidates this opponent would plausibly consider.
    const pool = scored.filter(s =>
      topScore - s.score <= cfg.slack && Math.abs(s.score) < MATE_THRESHOLD
    );
    const candidates = pool.length > 0 ? pool : [scored[0]];

    // Most of the time play near the top of the pool; occasionally take one of
    // the weaker candidates, which is where the human-looking errors come from.
    const goWrong = Math.random() < cfg.blunderRate;
    const pick = goWrong
      ? candidates[Math.floor(Math.random() * candidates.length)]
      : candidates[Math.floor(Math.random() * Math.min(3, candidates.length))];

    return this.toPublicMove(game, pick.move) || legal[0];
  }

  async getBestMoveAsync(game, difficulty = 'ron') {
    return new Promise((resolve) => {
      // Yield to the renderer so the board repaints before we block on search.
      setTimeout(() => {
        resolve(this.getMoveAtStrength(game, difficulty));
      }, 0);
    });
  }

  getBestMove(game, difficulty = 'ron') {
    return this.getMoveAtStrength(game, difficulty);
  }

  // Full-strength analysis used by the eval bar, hints and game review.
  analyse(game, { depth = 10, timeMs = 1000 } = {}) {
    const result = this.searchWithBudget(game, depth, timeMs);
    // searchWithBudget scores from the side-to-move's view; normalise to White.
    const whiteScore = game.turn() === 'w' ? result.score : -result.score;
    return {
      score: whiteScore,
      move: this.toPublicMove(game, result.move),
      depth: result.depth,
      mate: Math.abs(result.score) > MATE_THRESHOLD
        ? Math.ceil((MATE_SCORE - Math.abs(result.score)) / 2) * Math.sign(whiteScore)
        : null
    };
  }
}

export const chessEngine = new ChessEngine();
export { MATE_SCORE, MATE_THRESHOLD };
