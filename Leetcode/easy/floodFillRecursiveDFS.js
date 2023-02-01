// 733. Flood Fill
// https://leetcode.com/problems/flood-fill/?envType=study-plan&id=level-1

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    // Time Complexity: O(N)
    // Space Complexity: O(N)
    
    const startingPixelColor = image[sr][sc];
    if (startingPixelColor === color) return image;

    const RL = image.length, CL = image[0].length;
    const seen = new Array(RL).fill(0).map(() => new Array(CL).fill(false));

    const directions = [
        [-1, 0],  // up
        [0, 1],  // right
        [1, 0],  // down
        [0, -1],  // left
    ];

    function DFS(r, c) {
        if (r < 0 || c < 0 || r >= RL || c >= CL || seen[r][c]) return;
        if (image[r][c] === startingPixelColor) {
            image[r][c] = color;
            seen[r][c] = true;

            for (let i = 0; i < directions.length; i++) {
                const currentDir = directions[i];
                DFS(r + currentDir[0], c + currentDir[1]);
            }
        }
    }
    DFS(sr, sc);
    return image;
};

/*

Runtime
78 ms
Beats
73.20%
Memory
43.3 MB
Beats
95.43%

*/
