// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/?envType=study-plan&id=level-1

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Time Complexity: O(N)
    // Space Complexity: O(1)

    if (n <= 1) return n;  // 1 <= n <= 45

    let sum = 0;
    let prev1 = 1;
    let prev2 = 1;

    for (let i = 2; i <= n; i++) {
        sum = prev1 + prev2;
        prev2 = prev1;
        prev1 = sum;
    }

    return sum;
};

module.exports = climbStairs;

// The number of distinct ways you can climb to the top === Fibonacci
// [1, 1, 2, 3, 5, 8, ...]
//  0  1  2  3  4  5
// fib(1) = 1
// fib(2) = 2
// fib(3) = 3
// fib(4) = 5
// fib(5) = 8
// n = 4
/*
1. 1 step + 1 step + 1 step + 1 step
2. 1 step + 1 step + 2 steps
3. 1 step + 2 steps + 1 step
4. 2 steps + 1 step + 1 step
5. 2 steps + 2 steps
*/
// n = 5
/*
1. 1 step + 1 step + 1 step + 1 step + 1 step
2. 1 step + 1 step + 2 steps + 1 step
3. 1 step + 2 steps + 1 step + 1 step
4. 2 steps + 1 step + 1 step + 1 step
5. 2 steps + 2 steps + 1 step
6. 1 step + 2 steps + 2 steps
7. 1 step + 1 step + 1 step + 2 steps
8. 2 steps + 1 step + 2 steps
*/

/*

Runtime
65 ms
Beats
66.7%
Memory
41.8 MB
Beats
50.25%

*/
