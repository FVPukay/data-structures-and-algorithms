/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  // Find the middle via fast and slow pointer
  // Once at the middle, reverse the 2nd half of the list
  // Create another fast pointer n/2 ahead of the slow pointer
  // Iterate n/2 times to find every pair slow.val + fast.val
  let slow = head, fast = head;
  while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next;
  }
  let prev = null;
  let nextNode = null;
  while (slow) {
      nextNode = slow.next;
      slow.next = prev;
      prev = slow;
      slow = nextNode;
  }
  slow = head;
  fast = prev;
  let maxSum = 0;
  while (fast) {
      maxSum = Math.max(maxSum, slow.val + fast.val);
      slow = slow.next;
      fast = fast.next;
  }
  return maxSum;
};
