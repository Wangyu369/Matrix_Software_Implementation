# Defect Log

| ID | Title | Description | Status | Priority | Assigned To | Date Reported | Date Fixed | Notes |
|----|-------|-------------|--------|----------|-------------|---------------|------------|-------|
| 1 | Determinant calculation bug | Determinant for 3x3 matrix returns incorrect value | Closed | High | Developer | 2026-04-23 | 2026-04-23 | Fixed recursive calculation in determinant function |

## Bug Details

### Bug ID: 1
- **Title**: Determinant calculation bug
- **Description**: The determinant function was not correctly calculating for matrices larger than 2x2. The recursive minor calculation had an error in the cofactor sign.
- **Steps to Reproduce**:
  1. Create a 3x3 matrix
  2. Call determinant function
  3. Result was incorrect
- **Expected Result**: Correct determinant value
- **Actual Result**: Wrong value
- **Environment**: Node.js, Jest tests
- **Fix**: Corrected the cofactor sign in the recursive calculation
- **Status**: Closed