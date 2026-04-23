const { addMatrices, multiplyMatrices, transposeMatrix, determinant, inverseMatrix } = require('./matrix');

// Demo of matrix operations
console.log('Matrix Software Implementation Demo');
console.log('=====================================');

const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];

console.log('Matrix A:', A);
console.log('Matrix B:', B);
console.log('');

console.log('A + B =', addMatrices(A, B));
console.log('A * B =', multiplyMatrices(A, B));
console.log('Transpose of A =', transposeMatrix(A));
console.log('Determinant of A =', determinant(A));
console.log('Inverse of A =', inverseMatrix(A));

console.log('');
console.log('All operations completed successfully!');