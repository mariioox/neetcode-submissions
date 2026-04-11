class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let counts = {};

        for (let char of s) {
            counts[char] = (counts[char] || 0) + 1;
        }
        
        let maxOdd = -Infinity;
        let maxEven = Infinity;

        for (let char in counts) {
            let freq = counts[char];

            if (freq % 2 !== 0) {
                if (freq > maxOdd) {
                    maxOdd = freq;
                }
            } else {
                if (freq < maxEven) maxEven = freq; }
        }
        if (maxOdd === -Infinity || maxEven === Infinity) {
            return 0;
        }
        return maxOdd - maxEven;
    }
}
