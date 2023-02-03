/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // Iterative Bottom Up Solution
    // Time Complexity: O(N)
    // Space Complexity: O(1)

    if (n <= 1) return n;  // constraint: 0 <= n <= 30
    
    let sum = 0;
    let prev1 = 1;
    let prev2 = 0;

    for (let i = 2; i <= n; i++) {
        sum = prev1 + prev2;
        prev2 = prev1;
        prev1 = sum;
    }

    return sum;
};

/*

Runtime
70 ms
Beats
66.43%
Memory
42 MB
Beats
24.98%

*/
