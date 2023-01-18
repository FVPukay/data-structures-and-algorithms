// 704. Binary Search
// https://leetcode.com/problems/binary-search/?envType=study-plan&id=level-1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // Time Complexit: O(Log N)
    // Space Complexit: O(1)
    
    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    function calculateMidpointIdx(leftIdx, rightIdx) {
        return Math.floor( (leftIdx + rightIdx) / 2);
    }

    while (leftIdx <= rightIdx) {
        let midpointIdx = calculateMidpointIdx(leftIdx, rightIdx);
        if (nums[midpointIdx] === target) {
            return midpointIdx;
        } else if (nums[midpointIdx] < target) {
            leftIdx = midpointIdx + 1;
        } else {
            rightIdx = midpointIdx - 1;
        }
    }

    return -1;
};

module.exports = search;

/*

Runtime
76 ms
Beats
57.79%
Memory
44.9 MB
Beats
57.8%

*/
