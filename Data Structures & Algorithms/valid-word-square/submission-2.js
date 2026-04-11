class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        for (let i = 0; i<words.length; i++) {
            if (words[i].length > words.length) {
                    return false;
            }
            
            for (let j = 0; j<words[i].length; j++) {
                
                if (!words[j] || !words[j][i]) {
                    return false;
                }

                if (words[i][j] !== words[j][i]) {
                    return false;
                }

            }
        }
        return true;
    }
}
