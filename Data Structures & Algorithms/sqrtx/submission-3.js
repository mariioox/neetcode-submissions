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

            if ((m*m) === x) {
                return m;
            } else if ((m*m)> x) {
                r=m-1;
            } else {
                ans = m;
                l=m+1;
            }
        }
        return ans;
    }
}
