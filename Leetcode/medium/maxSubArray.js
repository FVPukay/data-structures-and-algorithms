// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
//
//  Time Complexity: O(N)
//  Space Complexity: O(1)
//
var maxSubArray = function(nums) {
    let currentSubArray = nums[0], maxSubArray = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (currentSubArray < 0) {
            currentSubArray = nums[i];
        } else {
            currentSubArray += nums[i];
        }
        maxSubArray = Math.max(currentSubArray, maxSubArray);
    }
    return maxSubArray;
};

module.exports = maxSubArray;
