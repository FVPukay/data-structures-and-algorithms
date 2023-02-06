// 746. Min Cost Climbing Stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/?envType=study-plan&id=level-1

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // Tabulation
    // Time Complexity: O(N)
    // Space Complexity: O(N)
    
    const minCost = new Array(cost.length + 1).fill(0);
    const lastIdx = cost.length;

    for (let i = 2; i <= lastIdx; i++) {
        let oneStepCost = minCost[i-1] + cost[i-1];
        let twoStepCost = minCost[i-2] + cost[i-2]
        minCost[i] = Math.min(oneStepCost, twoStepCost);
    }

    return minCost[lastIdx];
};

/*

Runtime
68 ms
Beats
72.31%
Memory
43 MB
Beats
62%

*/
