# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Time: O(N), N number of nodes in the list
        # Space: (1)
        
        # If 0 or 1 nodes, there is no cycle
        if not head or not head.next:
            return None

        t = head  # tortoise
        h = head  # hare

        # Find meeting point or detect lack of cycle
        while True:
            t = t.next
            h = h.next

            if h and h.next:
                h = h.next
            else:
                return None

            if t == h:
                break

        # Detect start of cycle
        p1 = t
        p2 = head

        while p1 != p2:
            p1 = p1.next
            p2 = p2.next

        return p1

'''

Runtime
56 ms
Beats
86.40%
Memory
17.4 MB
Beats
34.53%

'''
