// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1

'use strict';

/**
 * @param {number[]} nums
 * @return {number[]}
 */
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

/*

Success
Details 
Runtime: 69 ms, faster than 89.22% of JavaScript online submissions for Running Sum of 1d Array.
Memory Usage: 42.4 MB, less than 48.10% of JavaScript online submissions for Running Sum of 1d Array.

*/

module.exports = runningSum;
