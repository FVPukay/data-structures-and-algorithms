/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // How the solution works
    // leftSum = rightSum
    // leftSum = numsSum - leftSum - nums[pivot]
    
    // Time: O(N)
    // Space: O(1)

    let sum = 0, leftSum = 0;

    for(let i = 0; i < nums.length; i++) {  // Time: O(N)
        sum += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {  // Time: O(N)
        if (leftSum === sum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
};

/*

Runtime
79 ms
Beats
93.24%
Memory
44.3 MB
Beats
78.45%

*/
