import getPossibleMoves, { knightMoves } from '../index.js';

describe('Knight Travails', () => {
  // Tests for getPossibleMoves function
  describe('getPossibleMoves', () => {
    test('returns 2 valid moves from corner (0,0)', () => {
      const moves = getPossibleMoves(0, 0);
      expect(moves).toHaveLength(2);
      expect(moves).toContainEqual([2, 1]);
      expect(moves).toContainEqual([1, 2]);
    });

    test('returns 4 valid moves from edge (0,3)', () => {
      const moves = getPossibleMoves(0, 3);
      expect(moves).toHaveLength(4);
      // You can add specific move checks here if needed
    });

    test('returns 8 valid moves from center (3,3)', () => {
      const moves = getPossibleMoves(3, 3);
      expect(moves).toHaveLength(8);
      expect(moves).toContainEqual([5, 4]);
      expect(moves).toContainEqual([5, 2]);
      expect(moves).toContainEqual([1, 4]);
      expect(moves).toContainEqual([1, 2]);
      expect(moves).toContainEqual([4, 5]);
      expect(moves).toContainEqual([4, 1]);
      expect(moves).toContainEqual([2, 5]);
      expect(moves).toContainEqual([2, 1]);
    });

    test('returns 6 valid moves from position (1,2)', () => {
      const moves = getPossibleMoves(1, 2);
      expect(moves).toHaveLength(6);
      // You can add specific move checks here if needed
    });
  });

  // Tests for knightMoves function
  describe('knightMoves', () => {
    test('returns correct path from [0,0] to [1,2]', () => {
      const path = knightMoves([0, 0], [1, 2]);
      expect(path).toEqual([[0, 0], [1, 2]]);
    });

    test('returns correct path from [0,0] to [3,3]', () => {
      const path = knightMoves([0, 0], [3, 3]);
      // There are two possible shortest paths here
      const validPaths = [
        [[0, 0], [2, 1], [3, 3]],
        [[0, 0], [1, 2], [3, 3]]
      ];
      expect(validPaths).toContainEqual(path);
    });

    test('returns correct path from [3,3] to [0,0]', () => {
      const path = knightMoves([3, 3], [0, 0]);
      // There are two possible shortest paths here
      const validPaths = [
        [[3, 3], [2, 1], [0, 0]],
        [[3, 3], [1, 2], [0, 0]]
      ];
      expect(validPaths).toContainEqual(path);
    });

    test('returns path with correct length from [0,0] to [7,7]', () => {
      const path = knightMoves([0, 0], [7, 7]);
      // The shortest path should have 6 positions (including start and end)
      expect(path.length).toBeLessThanOrEqual(7);
      expect(path[0]).toEqual([0, 0]);
      expect(path[path.length - 1]).toEqual([7, 7]);
    });
    
    test('returns valid knight moves for each step in the path', () => {
      const path = knightMoves([3, 3], [7, 7]);
      
      // Check that each move is a valid knight move
      for (let i = 1; i < path.length; i++) {
        const [prevX, prevY] = path[i-1];
        const [currX, currY] = path[i];
        
        // A valid knight move is defined by:
        // Math.abs(dx) + Math.abs(dy) === 3 && Math.abs(dx) !== 0 && Math.abs(dy) !== 0
        const dx = Math.abs(currX - prevX);
        const dy = Math.abs(currY - prevY);
        
        expect(dx + dy).toBe(3);
        expect(dx).not.toBe(0);
        expect(dy).not.toBe(0);
      }
    });
  });
});