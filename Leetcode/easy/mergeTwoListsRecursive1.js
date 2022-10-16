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
    // Recurise Solution
    // m = number of nodes in the first list
    // n = number of nodes in the second list
    // time complexity: O(m + n)
    // space complexity: O(m + n)
    let head;
    
    if (list1 === null) {  // base case
        return list2;
    } else if (list2 === null) {  // base case
        return list1;
    } else if (list1.val < list2.val) {
        head = list1;
        list1 = list1.next;
    } else {
        head = list2;
        list2 = list2.next;
    }
    
    head.next = mergeTwoLists(list1, list2);
    return head;
};

module.exports = mergeTwoLists;

/*

Success
Details 
Runtime: 114 ms, faster than 46.06% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 44.5 MB, less than 16.50% of JavaScript online submissions for Merge Two Sorted Lists.

*/
