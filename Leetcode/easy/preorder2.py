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
        
        if root is None:
            return root

        list, answer = [root], []

        while list:
            root = list.pop()
            answer.append(root.val)
            list.extend(root.children[::-1])

        return answer

"""

Runtime
52 ms
Beats
83.95%
Memory
16.1 MB
Beats
78.24%

"""
