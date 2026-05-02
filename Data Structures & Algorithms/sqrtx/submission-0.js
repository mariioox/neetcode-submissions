class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x < 2) return x;

        let left = 2;
        let right = Math.floor(x / 2);
        let res = 1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            let square = mid * mid;

            if (square === x) {
                return mid;
            } else if (square < x) {
                res = mid; // Potential answer, but look for a larger one
                left = mid + 1;
            } else {
                right = mid - 1; // Too large, look smaller
            }
        }

        return res;
    }
}