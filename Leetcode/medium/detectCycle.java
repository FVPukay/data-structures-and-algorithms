/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        // If 0 or 1 nodes, no cycle, return null
        if (head == null || head.next == null) {
            return null;
        }

        ListNode t = head, h = head;  // t = tortoise, h = hare

        // Detect meeting point or lack of detectCycle
        while (true) {
            t = t.next;
            h = h.next;

            if (h != null && h.next != null) {
                h = h.next;
            } else {
                return null;
            }

            if (t == h) {
                break;
            }
        }

        // Detect start of the cycle
        ListNode p1 = head, p2 = t;

        while (p1 != p2) {
            p1 = p1.next;
            p2 = p2.next;
        }

        return p1;
    }
}

/*

Runtime
0 ms
Beats
100%
Memory
42.5 MB
Beats
91.18%

 */
