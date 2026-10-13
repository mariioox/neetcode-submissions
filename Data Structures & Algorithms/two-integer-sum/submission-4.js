class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = new Map();

        for (let i=0; i<nums.length; i++) {
            let curr = nums[i];
            let diff = target-curr;

            if (hash.has(diff)) {
                return [hash.get(diff), i]
            }
            hash.set(curr, i);
        }
    }
}
