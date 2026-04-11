class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        
        const getIdx = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[getIdx(s1[i])]++;
            s2Count[getIdx(s2[i])]++;
        }

        for (let i = 0; i < s2.length - s1.length; i++) {
            if (this.matches(s1Count, s2Count)) return true;

            s2Count[getIdx(s2[i + s1.length])]++;
            s2Count[getIdx(s2[i])]--;
        }

        return this.matches(s1Count, s2Count);
    }

    matches(arr1, arr2) {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
}
