/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 
 * Time: O(N)
 * Space: worst O(N), best O(LogN)
 */
var maxDepth = function(root) {
  if (root === null) return 0;
  const lenLeft = maxDepth(root.left);
  const lenRight = maxDepth(root.right);
  return Math.max(lenLeft, lenRight) + 1;
};
