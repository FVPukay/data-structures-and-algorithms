/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // Use fast and slow pointer, tortoise and the hare
    // Time: O(N)
    // Space: O(1)

    let tortoise = head, hare = head;

    while (hare && hare.next) {
        tortoise = tortoise.next;
        hare = hare.next.next;  // hare moves twice as fast
    }

    return tortoise;
};

/*

Runtime
70 ms
Beats
78.52%
Memory
42.3 MB
Beats
15.68%

*/
