class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let sPtr = 0;
        let tPtr = 0;

        while (sPtr<s.length && tPtr<t.length) {
            if (s[sPtr] === t[tPtr]) {
                tPtr++;
            } sPtr++;
        }
        return t.length-tPtr;
    }
}
