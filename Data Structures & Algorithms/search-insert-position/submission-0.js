class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            // Using Math.floor to avoid decimals
            // (left + right) / 2 works, but this prevents overflow in some languages
            let mid = left + Math.floor((right - left) / 2);

            if (nums[mid] === target) {
                return mid; // Found the exact value
            } else if (nums[mid] < target) {
                left = mid + 1; // Target is in the right half
            } else {
                right = mid - 1; // Target is in the left half
            }
        }

        // If the loop finishes, 'left' is the insertion point
        return left;
    }
}