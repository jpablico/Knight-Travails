import React from 'react';
import Square from './Square.js';

function ChessBoard({ startPosition, endPosition, path, onSquareClick }) {
  const boardSize = 8;
  const rows = [];

  const getMoveNumber = (x, y) => {
    for (let i = 0; i < path.length; i++) {
      if (path[i][0] === x && path[i][1] === y) {
        return i;
      }
    }
    return null;
  };

  const getSquareState = (x, y) => {
    // Check if this is the start position
    if (startPosition && startPosition[0] === x && startPosition[1] === y) {
      return 'start';
    }

    if (endPosition && endPosition[0] === x && endPosition[1] === y) {
      return 'end';
    }
    if (path && path.length > 0) {
      for (let i = 1; i < path.length - 1; i++) {
        if (path[i][0] === x && path[i][1] === y) {
          return 'path';
        }
      }
    }

    return 'normal';
  };

  for (let y = 0; y < boardSize; y++) {
    const squareRows = [];
    for (let x = 0; x < boardSize; x++) {
      const isBlack = (x + y) % 2 === 1;
      const squareState = getSquareState(x, y);
      const moveNumber = getMoveNumber(x, y);

      squareRows.push(
        <Square
          key={`${x},${y}`}
          x={x}
          y={y}
          isBlack={isBlack}
          squareState={squareState}
          moveNumber={moveNumber}
          onClick={onSquareClick}
        />
      );
    }
    rows.push(
      <div className="board-row" key={y}>
        {squareRows}
      </div>
    );
  }

  return <div className="chess-board">{rows}</div>;
}

export { ChessBoard };
