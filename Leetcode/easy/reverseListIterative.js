// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

'use strict';

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
 var reverseList = function(head) {
    // Iterative Solution
    // N is size of the list
    // time complexity: O(N)
    // space complexity: O(1)
    
    let cn = head;  // cn = current node
    let next;  // next node in list
    let lsf = null;  // list so far and will be returned
    
    while (cn !== null) {
        next = cn.next;
        cn.next = lsf;
        lsf = cn;
        cn = next;
    }
    
    return lsf;
};

/*

Success
Details 
Runtime: 128 ms, faster than 8.35% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 43.8 MB, less than 86.41% of JavaScript online submissions for Reverse Linked List.

*/
