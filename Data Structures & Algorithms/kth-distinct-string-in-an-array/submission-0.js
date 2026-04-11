class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let counts = {};

        for (let str of arr) {
            counts[str] = (counts[str] || 0) + 1;
        }
        let distinctCount = 0;

        for (let str of arr) {
            if (counts[str] === 1) {
                distinctCount++;

                if (distinctCount === k) {
                    return str;
                }
            }
        }
        return '';
    }
}
