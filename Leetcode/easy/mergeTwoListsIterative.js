// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/?envType=study-plan&id=level-1

'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    // Iterative Solution
    // m is the number of nodes in the first list
    // n is the number of nodes in the second list
    // time complexity: O(m + n)
    // space complexity: O(1)
    let prehead = new ListNode(-1);
    let prev = prehead;
    
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        } 
        
        prev = prev.next;
    }
    
    prev.next = list1 !== null ? list1 : list2;
    
    return prehead.next;   
};

/*

Success
Details 
Runtime: 136 ms, faster than 11.25% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 43.8 MB, less than 91.00% of JavaScript online submissions for Merge Two Sorted Lists.

*/