// 876. Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/

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
 var middleNode = function(head) {
    // Iterative Solution
    // time complexity: O(N)
    // space complexity: O(1) - no storage is used
    
    let length = 0;
    let cn = head;
    
    // O(N), N = length of list
    while (cn !== null) { 
        length++;
        cn = cn.next;
    }
    
    let middleIdx = 0;
    
    if (length % 2 === 0) {
        middleIdx = Math.ceil(length/2) + 1;
    } else {
        middleIdx = Math.ceil(length/2);
    }
    
    cn = head;
    
    // O(N), 1/2*N - drop constant
    for (let i = 1; i < middleIdx; i++) {
        cn = cn.next;
    }
    
    return cn;
    
};

/*

Success
Details 
Runtime: 63 ms, faster than 92.42% of JavaScript online submissions for Middle of the Linked List.
Memory Usage: 42 MB, less than 51.07% of JavaScript online submissions for Middle of the Linked List.

*/