// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/?envType=study-plan&id=level-1

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // Time Complexity: O(N)
    // Space Complexity: O(N)

    const levels = [];
    if (!root) return levels;

    function createLevels(node, level) {
        if (levels.length === level) levels.push([]);

        levels[level].push(node.val);

        if (node.left) {
            createLevels(node.left, level + 1);
        }

        if (node.right) {
            createLevels(node.right, level + 1)
        }
    }

    createLevels(root, 0);
    return levels;
};

/*

Runtime
73 ms
Beats
70.67%
Memory
44.2 MB
Beats
46.82%

*/
