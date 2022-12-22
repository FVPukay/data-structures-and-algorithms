# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Time: O(N)
        # Space: O(1)

        tortoise = head
        hare = head

        while hare and hare.next:
            tortoise = tortoise.next
            hare = hare.next.next

        return tortoise

'''

Runtime
38 ms
Beats
77.45%
Memory
13.9 MB
Beats
11.60%

'''
