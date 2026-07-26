// Grandmaster Chess Engine with Quiescence Search, Advanced Evaluation & High-Level Dumbledore AI

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
   0,  0,  0, 25, 25,  0,  0,  0,
   5, -5,-10,  0,  0,-10, -5,  5,
   5, 10, 10,-25,-25, 10, 10,  5,
   0,  0,  0,  0,  0,  0,  0,  0
];

const KNIGHT_TABLE = [
  -50,-40,-30,-30,-30,-30,-40,-50,
  -40,-20,  0,  0,  0,  0,-20,-40,
  -30,  0, 10, 15, 15, 10,  0,-30,
  -30,  5, 15, 25, 25, 15,  5,-30,
  -30,  0, 15, 25, 25, 15,  0,-30,
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
   15, 20, 20, 20, 20, 20, 20, 15,
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

export class ChessEngine {
  constructor() {
    this.transpositionTable = new Map();
    this.maxTableSize = 25000;
  }

  clearCache() {
    if (this.transpositionTable.size > this.maxTableSize) {
      this.transpositionTable.clear();
    }
  }

  // Advanced Evaluation (+ is White advantage, - is Black advantage)
  evaluateBoard(game) {
    if (game.isCheckmate()) {
      return game.turn() === 'w' ? -100000 : 100000;
    }
    if (game.isDraw() || game.isStalemate() || game.isThreefoldRepetition()) {
      return 0;
    }

    let totalEval = 0;
    const board = game.board();

    // Piece Mobility & Count
    const legalMovesCount = game.moves().length;
    const mobilityBonus = game.turn() === 'w' ? legalMovesCount * 2 : -legalMovesCount * 2;
    totalEval += mobilityBonus;

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
          else if (piece.type === 'q') posVal = QUEEN_TABLE[piece.color === 'w' ? idx : 63 - idx];
          else if (piece.type === 'k') posVal = KING_MIDGAME_TABLE[piece.color === 'w' ? idx : 63 - idx];

          const score = val + posVal;
          totalEval += piece.color === 'w' ? score : -score;
        }
      }
    }

    return totalEval;
  }

  // Move Ordering (MVV-LVA + Checks)
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
      if (a.san && a.san.includes('+')) scoreA += 80;
      if (b.san && b.san.includes('+')) scoreB += 80;
      if (a.promotion) scoreA += 800;
      if (b.promotion) scoreB += 800;

      return scoreB - scoreA;
    });
  }

  // Quiescence Search: Evaluates tactical captures beyond max depth so AI never gets tricked by trades!
  quiescence(game, alpha, beta, isMaximizing) {
    const standPat = this.evaluateBoard(game);

    if (isMaximizing) {
      if (standPat >= beta) return beta;
      if (standPat > alpha) alpha = standPat;

      const captureMoves = this.orderMoves(game, game.moves({ verbose: true }).filter(m => m.captured));
      for (const move of captureMoves) {
        game.move(move);
        const score = this.quiescence(game, alpha, beta, false);
        game.undo();

        if (score >= beta) return beta;
        if (score > alpha) alpha = score;
      }
      return alpha;
    } else {
      if (standPat <= alpha) return alpha;
      if (standPat < beta) beta = standPat;

      const captureMoves = this.orderMoves(game, game.moves({ verbose: true }).filter(m => m.captured));
      for (const move of captureMoves) {
        game.move(move);
        const score = this.quiescence(game, alpha, beta, true);
        game.undo();

        if (score <= alpha) return alpha;
        if (score < beta) beta = score;
      }
      return beta;
    }
  }

  // Minimax with Alpha-Beta + Quiescence + Transposition Cache
  minimax(game, depth, alpha, beta, isMaximizing) {
    const fen = game.fen();
    const cached = this.transpositionTable.get(fen);
    if (cached && cached.depth >= depth) {
      return cached.result;
    }

    if (depth === 0) {
      const evalScore = this.quiescence(game, alpha, beta, isMaximizing);
      const res = { score: evalScore, bestMove: null };
      this.transpositionTable.set(fen, { depth, result: res });
      return res;
    }

    if (game.isGameOver()) {
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

  // Async best move calculation
  async getBestMoveAsync(game, difficulty = 'ron') {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        const isWhite = game.turn() === 'w';
        this.clearCache();

        let depth = 2;
        if (difficulty === 'ron') {
          const moves = game.moves({ verbose: true });
          if (Math.random() < 0.25) {
            resolve(moves[Math.floor(Math.random() * moves.length)]);
            return;
          }
          depth = 1;
        } else if (difficulty === 'hermione') {
          depth = 2;
        } else if (difficulty === 'snape') {
          depth = 3;
        } else if (difficulty === 'dumbledore') {
          depth = 4; // Grandmaster Depth 4 + Quiescence Search!
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
    else if (difficulty === 'dumbledore') depth = 4;

    return this.minimax(game, depth, -Infinity, Infinity, isWhite).bestMove;
  }
}

export const chessEngine = new ChessEngine();
