class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const numSet = new Set(nums);
        const output = [];

        for (let i=1; i<=nums.length; i++) {
            if (!numSet.has(i)){
                output.push(i);                
            }
        }
        return output;
    }
}
