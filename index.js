// index.js - Simple API server for Matrix Software Implementation
const { addMatrices, multiplyMatrices, transposeMatrix, determinant, inverseMatrix } = require('./matrix');

module.exports = (req, res) => {
  if (req.url === '/' || req.url === '') {
    res.status(200).json({
      status: 'ok',
      project: 'Matrix Software Implementation',
      version: '1.0.0',
      endpoints: {
        health: 'GET /',
        add: 'POST /api/add',
        multiply: 'POST /api/multiply',
        transpose: 'POST /api/transpose',
        determinant: 'POST /api/determinant',
      }
    });
  } else {
    res.status(404).json({ error: 'Not found' });
  }
};