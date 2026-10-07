/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) {
            return [];
        }
        let ans = [];
        let queue = [root]

        while (queue.length > 0) {
            let curr = queue.length;
            let levelValues = [];

            for (let i=0; i<curr; i++) {
                let node = queue.shift();
                levelValues.push(node.val);

                if (node.left !== null) {
                    queue.push(node.left);
                }
                if (node.right !== null) {
                    queue.push(node.right);
                }
            }
            ans.push(levelValues);      
        }
        return ans;
    }
}