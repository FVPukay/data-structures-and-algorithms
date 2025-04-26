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
 * Space: O(N)
 */
var goodNodes = function(root) {
  const dfs = (node, maxSoFar) => {
      if (!node) return 0;

      let left = dfs(node.left, Math.max(node.val, maxSoFar));
      let right = dfs(node.right, Math.max(node.val, maxSoFar));
      let ans = left + right;

      if (node.val >= maxSoFar) ans++;
      return ans;
  }
  return dfs(root, -Infinity);
};
