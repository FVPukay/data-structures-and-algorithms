/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    // Time Complexity: O(N)
    // Space Complexity: O(N)

    const list = [];

    function traverse(node) {
        if (!node) return list;
        list.push(node.val);

        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i]);
        }

        return list;
    }

    return traverse(root);
};

/*

Runtime
86 ms
Beats
78.80%
Memory
44.8 MB
Beats
91.3%

*/
