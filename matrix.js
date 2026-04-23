// matrix.js - Simple matrix operations
// Dev branch update
// Feature branch update

function addMatrices(A, B) {
  if (A.length !== B.length || A[0].length !== B[0].length) {
    throw new Error('Matrices must have the same dimensions');
  }
  return A.map((row, i) => row.map((val, j) => val + B[i][j]));
}

function multiplyMatrices(A, B) {
  if (A[0].length !== B.length) {
    throw new Error('Number of columns in A must equal number of rows in B');
  }
  const result = [];
  for (let i = 0; i < A.length; i++) {
    result[i] = [];
    for (let j = 0; j < B[0].length; j++) {
      result[i][j] = 0;
      for (let k = 0; k < A[0].length; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return result;
}

function transposeMatrix(A) {
  return A[0].map((_, colIndex) => A.map(row => row[colIndex]));
}

function determinant(A) {
  if (A.length !== A[0].length) {
    throw new Error('Matrix must be square');
  }
  if (A.length === 1) return A[0][0];
  if (A.length === 2) return A[0][0] * A[1][1] - A[0][1] * A[1][0];

  let det = 0;
  for (let i = 0; i < A.length; i++) {
    const minor = A.slice(1).map(row => row.filter((_, j) => j !== i));
    det += (i % 2 === 0 ? 1 : -1) * A[0][i] * determinant(minor);
  }
  return det;
}

function inverseMatrix(A) {
  if (A.length !== A[0].length) {
    throw new Error('Matrix must be square');
  }
  const det = determinant(A);
  if (det === 0) {
    throw new Error('Matrix is singular, cannot invert');
  }
  if (A.length === 2) {
    const [[a, b], [c, d]] = A;
    return [
      [d / det, -b / det],
      [-c / det, a / det]
    ];
  }
  // For larger matrices, would need more complex implementation
  throw new Error('Inverse for matrices larger than 2x2 not implemented');
}

module.exports = { addMatrices, multiplyMatrices, transposeMatrix, determinant, inverseMatrix };