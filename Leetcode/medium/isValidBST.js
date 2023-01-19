// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/?envType=study-plan&id=level-1

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // Time Complexity: O(N) - have to traverse all nodes
    // Space Complexity: O(N) - storing InOrder traversal results in an array

    const arr = [];
    let count = -2;
    let answer = true;

    function DFSInOrder (node) {
        if (node.left) DFSInOrder (node.left);
        arr.push(node.val);
        count++;
        if (count >= 0) {
            if (node.val <= arr[count]) answer = false;
        }
        if (node.right) DFSInOrder (node.right);
        if (count === arr.length - 2) return answer;
    }

    return DFSInOrder(root);
};

/* Leetcode Test Cases

input = root
BST = binary search tree

#1 - Best Case Test Case - small 3 node perfect binary tree, is valid BST
input = [2,1,3]
output = true

#2 - full binary tree and is invalid BST
input = [5,1,4,null,null,3,6]
output = false

#3 - linear tree (not balanced - all to the left)
input = [9, 3, null, 0, null, -110, null]
output = true

#4 - linear tree (not balance - all to the right)
input = [111, null, 2, null, 0, null, -10]
output = false

#5 - perfect binary tree - valid BST
input = [100, 10, 200, -3, 50, 150, 201]
output = true

#6 - all nodes have same value, 3 nodes, invalid BST
input = [2,2,2]
output = false

*/

/*

Runtime
74 ms
Beats
79.52%
Memory
46.9 MB
Beats
16.70%

*/
