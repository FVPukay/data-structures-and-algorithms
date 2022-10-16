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
    // Recursive Solution
    // m = number of nodes in the first list
    // n = number of nodes in the second list
    // time complexity: O(m + n)
    // space complexity: O(m + n)
    
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    } else if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list2.next, list1);
        return list2;
    }
};

module.exports = mergeTwoLists;

/*

Success
Details 
Runtime: 124 ms, faster than 25.99% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 44.2 MB, less than 58.61% of JavaScript online submissions for Merge Two Sorted Lists.

*/