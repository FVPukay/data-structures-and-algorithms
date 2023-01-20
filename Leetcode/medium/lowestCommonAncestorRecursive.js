// 235. Lowest Common Ancestor of a Binary Search Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/?envType=study-plan&id=level-1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // Recursive Solution
    // Time Complexity: O(N) - worst case might visit every node
    // Space Complexity: O(N) - skewed BST could be N so will affect call stack

    if (p.val > root.val && q.val > root.val) {  // p and q greater
        return lowestCommonAncestor(root.right, p, q);
    } else if (p.val < root.val && q.val < root.val) {  // p and q less
        return lowestCommonAncestor(root.left, p, q);
    } else {  // found the node that splits so return it
        return root;
    }
};

/*

Runtime
92 ms
Beats
63.17%
Memory
51.9 MB
Beats
64.69%

*/
