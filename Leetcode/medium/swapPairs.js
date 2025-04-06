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
 * Time: O(N)
 * Space: O(1)
 */
var swapPairs = function(head) {
  // If linked list has 0 or 1 nodes, return
  if (!head || !head.next) return head;
  
  let dummy = head.next;  // Reference to what we want to return             
  let prev = null;                  
  while (head && head.next) {
      // Connect the previous pair to the rest of the list
      if (prev) prev.next = head.next;
      
      // Save a pointer to node to connect it with the rest of the list later
      prev = head;  
      // Make sure we can still access the rest of the list beyond the current pair                
      let nextNode = head.next.next; 
      // Perform edge swap
      head.next.next = head; 
      // Handle the case when there's an odd number of nodes         
      head.next = nextNode;  
      // Move to next pair         
      head = nextNode;                
  }
  
  return dummy;
};
