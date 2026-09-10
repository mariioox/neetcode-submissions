class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 1;
        let r = x;
        let ans = 0;

        while (l<=r) {
            let m = Math.floor((r+l)/2);
            let sqr = m*m;
            
            if (sqr === x) {
                return m;
            } else if (sqr > x) {
                r = m - 1;
            } else {
                l = m + 1;
                ans = m;
            }
        }
        return ans;
    }
}
