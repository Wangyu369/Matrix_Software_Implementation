/**
 * smoke-test.js
 * ---------------------------------------------------------------------------
 * Lightweight post-deploy smoke test for Matrix Software Implementation.
 * Verifies that the core matrix module loads and its most critical operations
 * return sane results.
 *
 * Exit 0 → smoke test passed  ✅
 * Exit 1 → smoke test failed  ❌
 * ---------------------------------------------------------------------------
 */

'use strict';

let matrix;

// ── 1. Module load ────────────────────────────────────────────────────────────
try {
  matrix = require('./matrix');
  console.log('✅ [1/6] matrix.js loaded successfully');
} catch (err) {
  console.error('❌ [1/6] Failed to load matrix.js:', err.message);
  process.exit(1);
}

// ── Helper ────────────────────────────────────────────────────────────────────
function assert(condition, label) {
  if (!condition) {
    console.error(`❌ ${label}`);
    process.exit(1);
  }
  console.log(`✅ ${label}`);
}

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// ── 2. Exports check ──────────────────────────────────────────────────────────
assert(
  typeof matrix.addMatrices === 'function' &&
  typeof matrix.multiplyMatrices === 'function' &&
  typeof matrix.transposeMatrix === 'function' &&
  typeof matrix.determinant === 'function' &&
  typeof matrix.inverseMatrix === 'function',
  '[2/6] All 5 functions exported: addMatrices, multiplyMatrices, transposeMatrix, determinant, inverseMatrix'
);

// ── 3. addMatrices smoke ──────────────────────────────────────────────────────
try {
  const A = [[1, 2], [3, 4]];
  const B = [[5, 6], [7, 8]];
  const result = matrix.addMatrices(A, B);
  assert(deepEqual(result, [[6, 8], [10, 12]]), '[3/6] addMatrices([[1,2],[3,4]], [[5,6],[7,8]]) = [[6,8],[10,12]]');
} catch (err) {
  console.error('❌ [3/6] addMatrices() smoke failed:', err.message);
  process.exit(1);
}

// ── 4. multiplyMatrices smoke ─────────────────────────────────────────────────
try {
  const A = [[1, 2], [3, 4]];
  const I = [[1, 0], [0, 1]]; // identity matrix
  const result = matrix.multiplyMatrices(A, I);
  assert(deepEqual(result, [[1, 2], [3, 4]]), '[4/6] multiplyMatrices(A, identity) = A');
} catch (err) {
  console.error('❌ [4/6] multiplyMatrices() smoke failed:', err.message);
  process.exit(1);
}

// ── 5. transposeMatrix smoke ──────────────────────────────────────────────────
try {
  const A = [[1, 2, 3], [4, 5, 6]];
  const result = matrix.transposeMatrix(A);
  assert(deepEqual(result, [[1, 4], [2, 5], [3, 6]]), '[5/6] transposeMatrix([[1,2,3],[4,5,6]]) = [[1,4],[2,5],[3,6]]');
} catch (err) {
  console.error('❌ [5/6] transposeMatrix() smoke failed:', err.message);
  process.exit(1);
}

// ── 6. determinant smoke ──────────────────────────────────────────────────────
try {
  const A = [[3, 8], [4, 6]];
  const result = matrix.determinant(A);
  // det = (3×6) - (8×4) = 18 - 32 = -14
  assert(result === -14, '[6/6] determinant([[3,8],[4,6]]) = -14');
} catch (err) {
  console.error('❌ [6/6] determinant() smoke failed:', err.message);
  process.exit(1);
}

// ── Done ──────────────────────────────────────────────────────────────────────
console.log('');
console.log('🟢 All smoke tests passed — deployment looks healthy.');