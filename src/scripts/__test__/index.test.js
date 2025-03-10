import { getPossibleMoves,knightMoves } from '../gameLogic.js';

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
  });
});

// Tests for knightMoves function
describe('knightMoves', () => {
  test('returns correct path from [0,0] to [1,2]', () => {
    const path = knightMoves([0, 0], [1, 2]);
    expect(path).toEqual([
      [0, 0],
      [1, 2],
    ]);
  });

  test('returns correct path from [0,0] to [3,3]', () => {
    const path = knightMoves([0, 0], [3, 3]);
    const validPaths = [
      [
        [0, 0],
        [2, 1],
        [3, 3],
      ],
      [
        [0, 0],
        [1, 2],
        [3, 3],
      ],
    ];
    expect(validPaths).toContainEqual(path);
  });

  test('returns correct path from [3,3] to [0,0]', () => {
    const path = knightMoves([3, 3], [0, 0]);
    const validPaths = [
      [
        [3, 3],
        [2, 1],
        [0, 0],
      ],
      [
        [3, 3],
        [1, 2],
        [0, 0],
      ],
    ];
    expect(validPaths).toContainEqual(path);
  });

  test('returns path with correct length from [0,0] to [7,7]', () => {
    const path = knightMoves([0, 0], [7, 7]);
    expect(path.length).toBeLessThanOrEqual(7);
    expect(path[0]).toEqual([0, 0]);
    expect(path[path.length - 1]).toEqual([7, 7]);
  });

  test('returns valid knight moves for each step in the path', () => {
    const path = knightMoves([3, 3], [7, 7]);

    for (let i = 1; i < path.length; i++) {
      const [prevX, prevY] = path[i - 1];
      const [currX, currY] = path[i];
      const dx = Math.abs(currX - prevX);
      const dy = Math.abs(currY - prevY);
      expect(dx + dy).toBe(3);
      expect(dx).not.toBe(0);
      expect(dy).not.toBe(0);
    }
  });
});