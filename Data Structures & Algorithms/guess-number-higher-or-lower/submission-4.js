/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * 1 2 3 4 5 6 7
 * l            n
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l = 1;

        while (l<=n) {
            let m = Math.floor((l+n)/2);
            let res = guess(m);

            if (res === 0) {
                return m;
            } else if (res === -1) {
                n = m-1;
            } else {
                l = m+1;
            }
        }
        return m;
    }
}