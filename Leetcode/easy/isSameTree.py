# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# 
# Time: O(N)
# Space: O(N)
#
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        stack = [(p, q)]

        while stack:
            p, q = stack.pop()
            if p == None and q == None:
                continue
            if p == None or q == None:
                return False
            if p.val != q.val:
                return False
            stack.append((p.left, q.left))
            stack.append((p.right, q.right))
        
        return True
