class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        if (nums.length === 0) return 0;

        let maxSum = nums[0];
        let currentSum = nums[0];

        for (let i=0; i<nums.length; i++) {
            if (nums[i] > nums[i-1]) {
                currentSum += nums[i];
            } else {
                currentSum = nums[i];
            }
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }
}
