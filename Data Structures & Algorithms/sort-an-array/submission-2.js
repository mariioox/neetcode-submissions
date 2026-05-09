class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length <= 1) return nums;

        const mid = Math.floor(nums.length/2);
        const left = this.sortArray(nums.slice(0, mid));
        const right = this.sortArray(nums.slice(mid));

        return this.merge(left, right);
    }
    merge(left, right) {
        let sorted = [];
        let i = 0;
        let j = 0;

        while(i<left.length && j<right.length) {
            if (left[i] < right[j]) {
                sorted.push(left[i]);
                i++;
            } else {
                sorted.push(right[j]);
                j++;
            }
        }
        return [...sorted, ...left.slice(i), ...right.slice(j)];
    }
}
