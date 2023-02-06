// 746. Min Cost Climbing Stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/?envType=study-plan&id=level-1

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // Bottom up using variables
    // Time Complexity: O(N)
    // Space Complexity: O(1)

    let oneStepDown = 0, twoStepDown = 0;

    for (let i = 2; i <= cost.length; i++) {
        let prevOneDown = oneStepDown;  
        oneStepDown = Math.min(oneStepDown + cost[i-1], twoStepDown + cost[i-2]);
        twoStepDown = prevOneDown;
    }

    return oneStepDown;
};

/*

Runtime
65 ms
Beats
82.19%
Memory
42.6 MB
Beats
69.71%

*/
