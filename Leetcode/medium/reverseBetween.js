/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 *
 * Iterative solution
 * Time: O(N)
 * Space: O(1)
 *
 */
var reverseBetween = function(head, left, right) {
  // Empty list
  if(!head) return null;

  // Advance pointers to starting point
  let curr = head, prev = null;
  while(left > 1) {
      prev = curr;
      curr = curr.next;
      left--;
      right--;
  }

  let conn = prev, tail = curr;

  // Reverse until n is 0
  let third = null;
  while(right > 0) {
      third = curr.next;
      curr.next = prev;
      prev = curr;
      curr = third;
      right--;
  }

  // Adjust final connections
  if(conn !== null) {
      conn.next = prev;
  } else {
      head = prev;
  }

  tail.next = curr;
  return head;
};
