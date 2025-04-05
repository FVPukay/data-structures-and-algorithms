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
 * 
 * Time: O(n) where n is the number of nodes in the linked list.
 * Space: O(1) since just using a few pointers
 */
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr) {
      let nextNode = curr.next; // first, make sure we don't lose the next node
      curr.next = prev;         // reverse the direction of the pointer
      prev = curr;              // set the current node to prev for the next node
      curr = nextNode;          // move on
  }

  return prev;
};
