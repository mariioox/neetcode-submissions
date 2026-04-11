class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let lowerS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let reverseS = lowerS.split('').reverse().join('');
        return lowerS===reverseS 
    }
}
