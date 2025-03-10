import React, { useState } from 'react';
import { ChessBoard } from './ChessBoard.js';
import { knightMoves } from './gameLogic.js';

const App = () => {
  const [startPosition, setStartPosition] = useState(null);
  const [endPosition, setEndPosition] = useState(null);
  const [path, setPath] = useState([]);
  const [selectionPhase, setSelectionPhase] = useState('selectingStart');
  const [message, setMessage] = useState(
    'Select the starting position for the knight'
  );

  const handleSquareClick = (x, y) => {
    if (selectionPhase === 'selectingStart') {
      setStartPosition([x, y]);
      setSelectionPhase('selectingEnd');
      setMessage('Select the ending position');
    } else if (selectionPhase === 'selectingEnd') {
      const end = [x, y];
      setEndPosition(end);

      const calculatedPath = knightMoves(startPosition, end);
      setPath(calculatedPath);
      setSelectionPhase('showingPath');
      setMessage(`You made it in ${calculatedPath.length - 1} moves!`);
    }
  };

  const handleReset = () => {
    setStartPosition(null);
    setEndPosition(null);
    setPath([]);
    setSelectionPhase('selectingStart');
    setMessage('Select the starting position for the knight');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Knight Travails</h1>
        <p className="message">{message}</p>
      </header>

      <div className="game-container">
        <ChessBoard
          startPosition={startPosition}
          endPosition={endPosition}
          path={path}
          onSquareClick={handleSquareClick}
        />

        <div className="controls">
          <button onClick={handleReset} className="reset-button">
            Reset Board
          </button>

          {path.length > 0 && (
            <div className="path-display">
              <h3>Path:</h3>
              <ul>
                {path.map((pos, index) => (
                  <li key={index}>{`[${pos[0]}, ${pos[1]}]`}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
