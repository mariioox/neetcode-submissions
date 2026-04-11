class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let s of strs) {
            // Format: [length] + [#] + [string]
            result += s.length + "#" + s;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
     let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            
            let length = parseInt(str.substring(i, j));
            
            i = j + 1;
            
            res.push(str.substring(i, i + length));
            
            i += length;
        }
        return res;
    }
}