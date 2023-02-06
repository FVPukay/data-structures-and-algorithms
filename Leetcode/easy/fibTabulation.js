// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/?envType=study-plan&id=level-1

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // Tabulation Solution
    // Time Complexity: O(N)
    // Space Complexity: O(N)

    if (n <= 1) return n;  // constraint: 0 <= n <= 30
    const table = [0, 1];

    for(let i = 2; i <= n; i++) {
        table.push(table[i-1] + table[i-2]);
    }
    
    return table[n];
};

/*

Runtime
66 ms
Beats
73.99%
Memory
41.5 MB
Beats
87.27%

*/
