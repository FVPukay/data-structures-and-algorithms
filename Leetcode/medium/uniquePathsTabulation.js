// 62. Unique Paths
// https://leetcode.com/problems/unique-paths/?envType=study-plan&id=level-1

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    /*  Pattern
        top row = only one path = 1s
        left most column = only one path = 1s
        - add diagonally
        - val to calc = left val (relative val to calc) + val above (relative val to calc)
        1   1   1   1
        1   2   3   4
        1   3   6   10
    */

    // Time Complexity: O(M*N)
    // Space Complexity: O(M*N)  

    const matrix = new Array(m).fill([]).map(() => new Array(n).fill(1));

    for(let row = 1; row < m; row++) {
        for(let col = 1; col < n; col++) {
            // current = prev(left) + prev(up) - calculate diagonally
            matrix[row][col] = matrix[row][col-1] + matrix[row-1][col];
        }
    }
    
    // 0 based indexes, returns bottom right corner avoiding out of bounds
    return matrix[m-1][n-1];
};

/*

Runtime
56 ms
Beats
94.46%
Memory
41.7 MB
Beats
90.14%

*/
