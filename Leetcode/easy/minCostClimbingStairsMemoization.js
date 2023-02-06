// 746. Min Cost Climbing Stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/?envType=study-plan&id=level-1

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // Memoziation solution
    // Time Complexity: O(N)
    // Space Complexity: O(N) - hashMap and call stack
    // Tabulation solution in contrast is better in terms of space complexity

    const memo = {};

    function minCost(i) {
        if (i === 0 || i === 1) return 0;

        if (memo[i]) {
            return memo[i];
        } else {
            let oneStepCost = minCost(i-1) + cost[i-1];
            let twoStepCost = minCost(i-2) + cost[i-2];
            memo[i] = Math.min(oneStepCost, twoStepCost);
            return memo[i]
        }
    }

    return minCost(cost.length);
};

/*

Runtime
72 ms
Beats
57.11%
Memory
44 MB
Beats
38%

*/
