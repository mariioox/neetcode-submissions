class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let totalScore=0;

        for (let i=0; i<s.length-1; i++) {
            const diff=Math.abs(s.charCodeAt(i+1)-s.charCodeAt(i));
            totalScore += diff;
        }
        return totalScore;
    }
}
