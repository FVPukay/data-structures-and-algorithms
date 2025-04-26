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
 * @param {number} targetSum
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(N)
 */
var hasPathSum = function(root, targetSum) {
  const dfs = (node, curr) => {
      if (!node) return false;
      if (!node.left && !node.right) {
          return (curr + node.val) === targetSum;
      }

      curr += node.val;
      let left = dfs(node.left, curr);
      let right = dfs(node.right, curr);
      return left || right;
  }
  return dfs(root, 0);
};
