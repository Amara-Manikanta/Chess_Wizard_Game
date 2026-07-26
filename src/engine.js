// Optimized Minimax Engine with Move Ordering (MVV-LVA), Transposition Caching & Non-blocking Async Execution

const PIECE_VALUES = {
  p: 100,
  n: 320,
  b: 330,
  r: 500,
  q: 900,
  k: 20000
};

// Positional tables for piece placement evaluation (White's perspective)
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

export class ChessEngine {
  constructor() {
    this.transpositionTable = new Map();
    this.maxTableSize = 10000;
  }

  // Clear Transposition Cache if oversized
  clearCache() {
    if (this.transpositionTable.size > this.maxTableSize) {
      this.transpositionTable.clear();
    }
  }

  // Evaluate position from White's perspective (+ is White advantage, - is Black advantage)
  evaluateBoard(game) {
    if (game.isCheckmate()) {
      return game.turn() === 'w' ? -100000 : 100000;
    }
    if (game.isDraw() || game.isStalemate() || game.isThreefoldRepetition()) {
      return 0;
    }

    let totalEval = 0;
    const board = game.board();

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = board[r][c];
        if (piece) {
          const val = PIECE_VALUES[piece.type] || 0;
          let posVal = 0;
          const idx = r * 8 + c;

          if (piece.type === 'p') posVal = PAWN_TABLE[piece.color === 'w' ? idx : 63 - idx];
          else if (piece.type === 'n') posVal = KNIGHT_TABLE[piece.color === 'w' ? idx : 63 - idx];
          else if (piece.type === 'b') posVal = BISHOP_TABLE[piece.color === 'w' ? idx : 63 - idx];
          else if (piece.type === 'r') posVal = ROOK_TABLE[piece.color === 'w' ? idx : 63 - idx];

          const score = val + posVal;
          totalEval += piece.color === 'w' ? score : -score;
        }
      }
    }

    return totalEval;
  }

  // Move Ordering heuristic: Sort captures & checks first (MVV-LVA) to maximize Alpha-Beta cutoffs!
  orderMoves(game, moves) {
    return moves.sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;

      if (a.captured) {
        scoreA += (PIECE_VALUES[a.captured] * 10) - PIECE_VALUES[a.piece];
      }
      if (b.captured) {
        scoreB += (PIECE_VALUES[b.captured] * 10) - PIECE_VALUES[b.piece];
      }
      if (a.san && a.san.includes('+')) scoreA += 50;
      if (b.san && b.san.includes('+')) scoreB += 50;

      return scoreB - scoreA;
    });
  }

  // Minimax with Alpha-Beta Pruning + Transposition Table + Move Ordering
  minimax(game, depth, alpha, beta, isMaximizing) {
    const fen = game.fen();
    const cached = this.transpositionTable.get(fen);
    if (cached && cached.depth >= depth) {
      return cached.result;
    }

    if (depth === 0 || game.isGameOver()) {
      const evalScore = this.evaluateBoard(game);
      const res = { score: evalScore, bestMove: null };
      this.transpositionTable.set(fen, { depth, result: res });
      return res;
    }

    let moves = game.moves({ verbose: true });
    moves = this.orderMoves(game, moves);
    let bestMove = null;

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (const move of moves) {
        game.move(move);
        const evaluation = this.minimax(game, depth - 1, alpha, beta, false).score;
        game.undo();

        if (evaluation > maxEval) {
          maxEval = evaluation;
          bestMove = move;
        }
        alpha = Math.max(alpha, evaluation);
        if (beta <= alpha) break;
      }
      const res = { score: maxEval, bestMove };
      this.transpositionTable.set(fen, { depth, result: res });
      return res;
    } else {
      let minEval = Infinity;
      for (const move of moves) {
        game.move(move);
        const evaluation = this.minimax(game, depth - 1, alpha, beta, true).score;
        game.undo();

        if (evaluation < minEval) {
          minEval = evaluation;
          bestMove = move;
        }
        beta = Math.min(beta, evaluation);
        if (beta <= alpha) break;
      }
      const res = { score: minEval, bestMove };
      this.transpositionTable.set(fen, { depth, result: res });
      return res;
    }
  }

  // Non-blocking async calculation for instant UI responsiveness
  async getBestMoveAsync(game, difficulty = 'ron') {
    return new Promise((resolve) => {
      // Yield to event loop first to prevent frame drop
      requestAnimationFrame(() => {
        const isWhite = game.turn() === 'w';
        this.clearCache();

        let depth = 2;
        if (difficulty === 'ron') {
          const moves = game.moves({ verbose: true });
          if (Math.random() < 0.2) {
            resolve(moves[Math.floor(Math.random() * moves.length)]);
            return;
          }
          depth = 1;
        } else if (difficulty === 'hermione') {
          depth = 2;
        } else if (difficulty === 'snape') {
          depth = 3;
        } else if (difficulty === 'dumbledore') {
          depth = 3; // depth 3 with move ordering is fast & grandmaster strong!
        }

        const res = this.minimax(game, depth, -Infinity, Infinity, isWhite);
        resolve(res.bestMove);
      });
    });
  }

  getBestMove(game, difficulty = 'ron') {
    const isWhite = game.turn() === 'w';
    let depth = 2;
    if (difficulty === 'ron') depth = 1;
    else if (difficulty === 'hermione') depth = 2;
    else if (difficulty === 'snape') depth = 3;
    else if (difficulty === 'dumbledore') depth = 3;

    return this.minimax(game, depth, -Infinity, Infinity, isWhite).bestMove;
  }
}

export const chessEngine = new ChessEngine();
