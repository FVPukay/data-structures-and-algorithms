# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
import math

class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Time: O(N)
        # Space: O(1)

        # Traverse the entire linked list
        cn = head  # cn = current node
        length = 0
        midpoint = 0

        while cn:  # Time: O(N)
            length += 1
            cn = cn.next

        # Calculate the midpoint
        if length % 2 == 0:
            midpoint = length // 2 + 1
        else:
            midpoint = math.ceil(length / 2)

        # Traverse to the midpoint
        cn = head
        for num in range(1, midpoint):  # Time: O(N/2), simplifies to O(N)
            cn = cn.next

        # Return the node at the midpoint aka the current node
        return cn

'''

Runtime
37 ms
Beats
80.72%
Memory
13.8 MB
Beats
55.61%

'''
