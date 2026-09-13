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
     * @return {boolean}
     */
    isBalanced(root) {
        if (root === null) {
            return true;
        }

        function getHeight(root) {
            if (root === null) return 0;

            let lHeight = getHeight(root.left);
            let rHeight = getHeight(root.right);

            return 1+Math.max(lHeight, rHeight);
        }
        let leftH = getHeight(root.left);
        let rightH = getHeight(root.right);
        let diff = Math.abs(leftH - rightH);

        if (diff > 1) {
            return false;
        }
        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
}
