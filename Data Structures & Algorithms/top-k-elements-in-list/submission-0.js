class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = new Map();

        for (let num of nums) {
            counts.set(num, (counts.get(num) || 0) + 1);
        }

        const sortedArray = [...counts.entries()];
        sortedArray.sort((a, b) => b[1]-a[1]);
        const result = [];
        
        for (let i=0; i<k; i++) {
            result.push(sortedArray[i][0]);
        }
        return result;
    }
}
