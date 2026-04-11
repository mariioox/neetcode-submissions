class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let left = 0;
        let maxFreq = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            count.set(char, (count.get(char) || 0) + 1);
            maxFreq = Math.max(maxFreq, count.get(char));

            if ((right - left + 1) - maxFreq > k) {
                count.set(s[left], count.get(s[left]) - 1);
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
