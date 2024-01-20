// ChessGame.jsx
import React, { useState } from 'react';
import './Chess.css';

const ChessGame = () => {
  const initialBoard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ];

  const [board, setBoard] = useState(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [isWhiteTurn, setIsWhiteTurn] = useState(true);

  const handleSquareClick = (row, col) => {
    const piece = board[row][col];

    if (selectedPiece) {
      // Handle move logic
      const isValidMove = checkIsValidMove(selectedPiece, row, col);
      if (isValidMove) {
        const updatedBoard = movePiece(selectedPiece, row, col);
        setBoard(updatedBoard);
        setIsWhiteTurn(!isWhiteTurn);
      }
      setSelectedPiece(null);
    } else {
      // Handle piece selection
      if (piece && isWhiteTurn === piece === piece.toLowerCase()) {
        setSelectedPiece({ piece, row, col });
      }
    }
  };

  const checkIsValidMove = (piece, toRow, toCol) => {
    const { row, col } = piece;
    const pieceType = piece.piece.toLowerCase();
    const isWhitePiece = piece.piece === piece.piece.toUpperCase();
  
    // Check for valid moves based on the piece type
    switch (pieceType) {
      case 'p':
        // Pawn moves
        const direction = isWhitePiece ? -1 : 1;
        const forwardOne = row + direction === toRow && col === toCol && !board[toRow][toCol];
        const forwardTwo = isWhitePiece && row === 6 && row + 2 * direction === toRow && col === toCol && !board[toRow][toCol];
        const capture = Math.abs(col - toCol) === 1 && row + direction === toRow && board[toRow][toCol] && board[toRow][toCol].toUpperCase() !== piece.piece;
        return forwardOne || forwardTwo || capture;
  
      case 'r':
        // Rook moves
        return row === toRow || col === toCol;
  
      case 'n':
        // Knight moves
        const deltaRow = Math.abs(toRow - row);
        const deltaCol = Math.abs(toCol - col);
        return (deltaRow === 2 && deltaCol === 1) || (deltaRow === 1 && deltaCol === 2);
  
      case 'b':
        // Bishop moves
        return Math.abs(row - toRow) === Math.abs(col - toCol);
  
      case 'q':
        // Queen moves (combination of Rook and Bishop)
        return row === toRow || col === toCol || Math.abs(row - toRow) === Math.abs(col - toCol);
  
      case 'k':
        // King moves
        const deltaRowKing = Math.abs(toRow - row);
        const deltaColKing = Math.abs(toCol - col);
        return deltaRowKing <= 1 && deltaColKing <= 1;
  
      default:
        return false;
    }
  };
  

  const movePiece = (piece, toRow, toCol) => {
    const { row, col } = piece;
    const updatedBoard = [...board];
    updatedBoard[toRow][toCol] = piece.piece;
    updatedBoard[row][col] = null;
    return updatedBoard;
  };

  const renderSquare = (piece, row, col) => (
    <div
      key={col}
      className={`square ${row % 2 === col % 2 ? 'light' : 'dark'}`}
      onClick={() => handleSquareClick(row, col)}
    >
      {piece && <div className={`piece piece-${piece}`} />}
    </div>
  );
  

  const renderRow = (row, rowIndex) => (
    <div key={rowIndex} className="board-row">
      {row.map((piece, colIndex) => renderSquare({ piece, row: rowIndex, col: colIndex }, rowIndex, colIndex))}
    </div>
  );

  return (
    <div className="chess-board">
      {board.map((row, index) => renderRow(row, index))}
    </div>
  );
};

export default ChessGame;
