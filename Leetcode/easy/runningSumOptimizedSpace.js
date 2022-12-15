/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // Time: O(N)
    // Space: O(1)
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    }

    return nums;
};
