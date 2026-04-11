class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let triangle = [];
        for (let i = 0; i<numRows; i++) {
            let row=[1];
            for (let j=1; j<i; j++) {
                let prevRow = triangle[i-1];
                row[j] = prevRow[j-1] + prevRow[j]
            }
            if (i>0) {
                row.push(1);
            }
            triangle.push(row);
        }
        return triangle;
    }
}
