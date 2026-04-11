class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let currCount = 0;
        for (let i=0; i<nums.length; i++) {
            if (nums[i] === 1) {
                currCount++;
            } else {
                if (currCount>maxCount){
                    maxCount = currCount;
                } currCount = 0;
            }
        }
        return Math.max(maxCount, currCount)
    }
}
