# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cn = head
        next = None
        lsf = None

        while (cn):
            next = cn.next
            cn.next = lsf
            lsf = cn
            cn = next

        return lsf

''' 

Runtime
71 ms
Beats
43.72%
Memory
15.5 MB
Beats
55.79%

'''
