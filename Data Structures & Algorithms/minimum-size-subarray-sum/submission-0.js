class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minLength = Infinity;
        let left = 0;
        let currentSum = 0;

        for (let right = 0; right < nums.length; right++) {
            currentSum += nums[right];

            while(currentSum >= target) {
                minLength = Math.min(minLength, right-left+1);
                currentSum -= nums[left];
                left++;
            }
        }
        return minLength === Infinity ? 0 : minLength;
    }
}
