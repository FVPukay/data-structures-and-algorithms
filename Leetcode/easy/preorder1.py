"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        # Time Complexity: O(N)
        # Space Complexity: O(N)
        
        list = []
        def traverse(node):
            if node is None:
                return node

            list.append(node.val)

            for child in range(len(node.children)):
                traverse(node.children[child])

            return list

        return traverse(root)

"""

Runtime
48 ms
Beats
93.30%
Memory
16.2 MB
Beats
62.1%

"""
