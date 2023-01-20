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
    // Iterative Solution
    // Time Complexity: O(N) - worst case visit every node
    // Space Complexity: O(1) - no call stack like with recursion

    let node = root;

    while (node) {
        let parentVal = node.val;

        if (p.val > parentVal && q.val > parentVal) {
            node = node.right;
        } else if (p.val < parentVal & q.val < parentVal) {
            node = node.left;
        } else {
            return node;
        }
    }
};

/*

Runtime
80 ms
Beats
90.74%
Memory
52.2 MB
Beats
45.85%

*/
