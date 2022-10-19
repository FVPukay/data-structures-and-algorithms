// 142. Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii/

'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    // Iterative Solution
    // time complexity: O(N), N is number of nodes in list
    // space complexity: O(1), no storage is used
    
    // If 0 nodes or 1 node, no cycle
    if (head === null || head.next === null) {
        return null;
    }
    
    let t = head, h = head;
    
    // Detect meeting point or lack of cycle
    while (true) {
        t = t.next;
        h = h.next;
        
        if (h === null || h.next === null) {
            return null;
        } else {
            h = h.next;
        }
        
        if (t === h) break;
    }
    
    let p1 = head;
    let p2 = t;
    
    // Move p1 and p2 until they meet
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    
    return p1;
};

/*

Success
Details 
Runtime: 153 ms, faster than 11.52% of JavaScript online submissions for Linked List Cycle II.
Memory Usage: 45.2 MB, less than 46.44% of JavaScript online submissions for Linked List Cycle II.

*/