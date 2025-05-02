/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(N)
 * 
 */
var isSameTree = function(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val != q.val) return false;
  let left = isSameTree(p.left, q.left);
  let right = isSameTree(p.right, q.right);
  return left && right;
};
