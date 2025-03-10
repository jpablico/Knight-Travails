import { de } from 'date-fns/locale';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function getPossibleMoves(x, y) {
  const movesOffset = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  let possibleMoves = [];

  for (let i = 0; i < movesOffset.length; i++) {
    const newX = x + movesOffset[i][0];
    const newY = y + movesOffset[i][1];

    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      possibleMoves.push([newX, newY]);
    }
  }
  return possibleMoves;
}

function knightMoves(start, end) {
  const [startX, startY] = start;
  const [endX, endY] = end;

  // Queue will store [x, y, path]
  const queue = [[startX, startY, [start]]];
  const visited = new Set();
  visited.add(`${startX},${startY}`);

  while (queue.length > 0) {
    const [currentX, currentY, path] = queue.shift();

    // If we've reached the destination, return the path
    if (currentX === endX && currentY === endY) {
      return path;
    }

    const possibleMoves = getPossibleMoves(currentX, currentY);

    for (const [newX, newY] of possibleMoves) {
      if (!visited.has(`${newX},${newY}`)) {
        visited.add(`${newX},${newY}`);

        // Create a new path by copying the current path and adding the new position
        const newPath = [...path, [newX, newY]];
        queue.push([newX, newY, newPath]);
      }
    }
  }

  // If no path is found (shouldn't happen on a standard chess board)
  return null;
}

export { getPossibleMoves, knightMoves };
export default getPossibleMoves;

const App = () => {
  useEffect(() => {
    console.log('Component mounted');
  }, []);
  return <h1 className="title"></h1>;
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
