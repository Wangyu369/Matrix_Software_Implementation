const { addMatrices, multiplyMatrices, transposeMatrix, determinant, inverseMatrix } = require('./matrix');

describe('Matrix Operations', () => {
  test('addMatrices should add two matrices correctly', () => {
    const A = [[1, 2], [3, 4]];
    const B = [[5, 6], [7, 8]];
    const expected = [[6, 8], [10, 12]];
    expect(addMatrices(A, B)).toEqual(expected);
  });

  test('addMatrices should throw error for different dimensions', () => {
    const A = [[1, 2], [3, 4]];
    const B = [[5, 6, 7], [8, 9, 10]];
    expect(() => addMatrices(A, B)).toThrow('Matrices must have the same dimensions');
  });

  test('multiplyMatrices should multiply two matrices correctly', () => {
    const A = [[1, 2], [3, 4]];
    const B = [[5, 6], [7, 8]];
    const expected = [[19, 22], [43, 50]];
    expect(multiplyMatrices(A, B)).toEqual(expected);
  });

  test('multiplyMatrices should throw error for incompatible dimensions', () => {
    const A = [[1, 2, 3]];
    const B = [[4], [5]];
    expect(() => multiplyMatrices(A, B)).toThrow('Number of columns in A must equal number of rows in B');
  });

  test('transposeMatrix should transpose correctly', () => {
    const A = [[1, 2, 3], [4, 5, 6]];
    const expected = [[1, 4], [2, 5], [3, 6]];
    expect(transposeMatrix(A)).toEqual(expected);
  });

  test('determinant should calculate correctly for 2x2 matrix', () => {
    const A = [[1, 2], [3, 4]];
    expect(determinant(A)).toBe(-2);
  });

  test('determinant should calculate correctly for 1x1 matrix', () => {
    const A = [[5]];
    expect(determinant(A)).toBe(5);
  });

  test('determinant should calculate correctly for 3x3 matrix', () => {
    const A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(determinant(A)).toBe(0);
  });

  test('determinant should throw error for non-square matrix', () => {
    const A = [[1, 2, 3], [4, 5, 6]];
    expect(() => determinant(A)).toThrow('Matrix must be square');
  });

  test('inverseMatrix should calculate correctly for 2x2 matrix', () => {
    const A = [[1, 2], [3, 4]];
    const expected = [[-2, 1], [1.5, -0.5]];
    const result = inverseMatrix(A);
    expect(result[0][0]).toBeCloseTo(expected[0][0]);
    expect(result[0][1]).toBeCloseTo(expected[0][1]);
    expect(result[1][0]).toBeCloseTo(expected[1][0]);
    expect(result[1][1]).toBeCloseTo(expected[1][1]);
  });

  test('inverseMatrix should throw error for singular matrix', () => {
    const A = [[1, 2], [2, 4]]; // det = 0
    expect(() => inverseMatrix(A)).toThrow('Matrix is singular, cannot invert');
  });

  test('inverseMatrix should throw error for non-square matrix', () => {
    const A = [[1, 2, 3], [4, 5, 6]];
    expect(() => inverseMatrix(A)).toThrow('Matrix must be square');
  });

  test('functions should validate matrix inputs', () => {
    const invalidMatrix = [[1, 'a'], [3, 4]];
    expect(() => addMatrices(invalidMatrix, [[1, 2], [3, 4]])).toThrow('Matrix A elements must be valid numbers');
    expect(() => multiplyMatrices(invalidMatrix, [[1], [2]])).toThrow('Matrix A elements must be valid numbers');
    expect(() => transposeMatrix(invalidMatrix)).toThrow('Matrix A elements must be valid numbers');
    expect(() => determinant(invalidMatrix)).toThrow('Matrix A elements must be valid numbers');
    expect(() => inverseMatrix(invalidMatrix)).toThrow('Matrix A elements must be valid numbers');
  });

  test('functions should reject empty matrices', () => {
    expect(() => addMatrices([], [[1, 2]])).toThrow('Matrix A must be a non-empty array');
    expect(() => transposeMatrix([[]])).toThrow('Matrix A rows must not be empty');
  });
});