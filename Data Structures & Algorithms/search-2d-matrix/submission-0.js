class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        let l = 0;
        let r = (ROWS*COLS)-1;

        while (l<=r) {
            let mid = Math.floor(l+(r-l)/2);
            let row = Math.floor(mid/COLS);
            let col = mid % COLS;
            let val = matrix[row][col];

            if (val === target) {
                return true;
            } else if (val<target) {
                l = mid+1;
            } else {
                r = mid-1
            }
        }
        return false;
    }
}
