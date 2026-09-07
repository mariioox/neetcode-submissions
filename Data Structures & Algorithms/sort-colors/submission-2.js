class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let low = 0;
        let high = nums.length-1;
        let curr = 0;

        while (curr <= high) {
            if (nums[curr] === 0) {
                [nums[curr], nums[low]] = [nums[low], nums[curr]];
                low++;
                curr++;
            }
            else if (nums[curr] === 1) {
                curr++;
            }
            else {
                [nums[curr], nums[high]] = [nums[high], nums[curr]];
                high--;
            }
        }
    }
}
