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
     * @return {number}
     */
    goodNodes(root) {
        if (root === null) {
            return 0;
        }
        let count = 0;
        let queue = [[root, root.val]];

        while (queue.length > 0) {
            let curr = queue.length;

            for (let i=0; i<curr; i++) {       
                let [node, maxSoFar] = queue.shift();

                if (node.val >= maxSoFar) {
                    count++;
                }
                let newMax = Math.max(maxSoFar, node.val);
                if (node.left !== null) { 
                    queue.push([node.left, newMax]); 
                }
                if (node.right !== null) { 
                    queue.push([node.right, newMax]); 
                }
            }
        }
        return count;
    }
}
