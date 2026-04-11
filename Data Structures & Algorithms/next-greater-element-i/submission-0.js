class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const map = new Map();
        const stack = [];

        for (let num of nums2) {
            while (stack.length > 0 && num > stack[stack.length-1]) {
                let smallerNum = stack.pop();
                map.set(smallerNum, num);
            }
            stack.push(num);
        }
        return nums1.map(n => map.get(n) || -1);
    }
}
