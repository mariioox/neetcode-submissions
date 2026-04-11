class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (!strs.length) return ""

        for (let j = 0; j < strs[0].length; j++) {
            let char = strs[0][j];
            
            for (let i = 1; i < strs.length; i++) {
                if (j === strs[i].length || strs[i][j] !== char) {
                    return strs[0].substring(0, j);
                }
            }
        }
        return strs[0];
    }
}
