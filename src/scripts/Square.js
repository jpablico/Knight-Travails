import React from 'react';

function Square({ x, y, isBlack, onClick, squareState, moveNumber }) {
  let className = 'square ' + (isBlack ? 'black' : 'white');

  if (squareState === 'start') {
    className += ' start';
  } else if (squareState === 'end') {
    className += ' end';
  } else if (squareState === 'path') {
    className += ' path';
  }

  return (
    <div
      className={className}
      onClick={() => onClick(x, y)}
      data-testid={`square-${x}-${y}`}
    >
      <div className="coordinate">
        {x},{y}
      </div>
      {moveNumber !== null && <div className="move-number">{moveNumber}</div>}
      {squareState === 'start' && <div className="knight">♞</div>}
      {squareState === 'end' && <div className="target">⚑</div>}
    </div>
  );
}

export default Square;
