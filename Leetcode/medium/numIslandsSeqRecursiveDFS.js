// 200. Number of Islands
// https://leetcode.com/problems/number-of-islands/?envType=study-plan&id=level-1

/**
 * @param {character[][]} grid
 * @return {number}
 */

const directions = [
    [-1, 0],  // up
    [0, 1],  // right
    [1, 0],  // down
    [0, -1],  // left
];

const dfs = function(matrix, r, c) {
    if (r < 0 || c < 0 || r >= matrix.length || c >= matrix[0].length) return;
    if (matrix[r][c] === "1") {
        matrix[r][c] = "0";
        for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            dfs(matrix, r + currentDir[0], c + currentDir[1])
        }
    }
}

var numIslands = function(grid) {
    // Time Complexity: O(M*N)
    // Space Complexity: O(M*N)

    let count = 0;
    
    // Top down, left right
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === "1") {
                count++;
                dfs(grid, r, c);  // solve subproblem
            }
        }
    }

    return count;
};

/*

TEST CASES

TC1 
grid =
[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]

TC2
grid =
[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]

TC3
grid =
[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","1"],["0","0","0","1","1"]]

TC4
grid =
[["0","1","0","1","0"],["1","0","1","0","1"],["0","1","1","1","0"],["1","0","1","0","1"]]

M>=1 
So cannot test [] or [[], []] and since M>=1 no need to consider these test cases

*/

/*

Runtime
89 ms
Beats
70.22%
Memory
45 MB
Beats
56.93%

*/