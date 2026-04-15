class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0;
        let right = s.length-1;

        while(left<right) {
            if (s[left] !== s[right]) {
                return this.isPalindrome(s, left + 1, right) || 
                    this.isPalindrome(s, left, right - 1);
            } 
            left++;
            right--;
        }
        return true;
    }
    isPalindrome(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
}
