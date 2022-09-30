// 724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1

'use strict';

var runningSum = function(nums) {
    // Time Complexity: O(N)
    // Space Complexity: O(N)
    const answer = [];
    let sum = 0;
    
    nums.forEach(num => {
        sum += num;
        answer.push(sum);
    });
    
    return answer;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // Time Complexity: O(N)
    // Space Complexity: O(N)
    const sum = runningSum(nums);  // O(N) time, O(N) space
    const lastIdx = nums.length - 1;
    
    for (let i = 0; i < nums.length; i++) {  // O(N) time
        if (i === 0) {
            if (i === sum[lastIdx] - nums[i]) {
                return i;
            }
        } else if (i > 0 && i < lastIdx) {
            if (sum[lastIdx] - sum[i] ===  sum[i-1]) {
                return i;
            }
        } else if (0 === sum[i-1]) {
            return i;
        }
    }
    return -1;
};

/*

Success
Details 
Runtime: 105 ms, faster than 75.11% of JavaScript online submissions for Find Pivot Index.
Memory Usage: 45.3 MB, less than 22.87% of JavaScript online submissions for Find Pivot Index.

*/

module.exports = pivotIndex;
