// 1. Two Sum
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Time Complexity: O(N), Space Complexity: O(N)
    const complementIdxMap = {};
    for (let p = 0; p < nums.length; p++) {
        if (complementIdxMap[nums[p]] >= 0) {  // valid indexes are 0 or greater
            return [complementIdxMap[nums[p]], p];
        } else {
            const complement = target - nums[p];
            complementIdxMap[complement] = p;
        }
    }
    return null;  // if there is no solution
};

/*

Runtime
63 ms
Beats
94.34%
Memory
42.8 MB
Beats
39.22%

*/
