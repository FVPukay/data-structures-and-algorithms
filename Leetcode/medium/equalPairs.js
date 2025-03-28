/**
 * @param {number[][]} grid
 * @return {number}
 *
 * Time: O(N^2)
 * Space: O(N^2)
 */
var equalPairs = function(grid) {
  const convertToKey = arr => {
      let key = "";
      for (const num of arr) {
          key += num + ",";
      }
      return key;
  }
  const map = new Map();
  for (const row of grid) {
      const key = convertToKey(row);
      map.set(key, (map.get(key) || 0) + 1);
  }
  const map2 = new Map();
  for (let col = 0; col < grid[0].length; col++) {
      const currCol = [];
      for (let row = 0; row < grid.length; row++) {
          currCol.push(grid[row][col]);
      }
      const key = convertToKey(currCol);
      map2.set(key, (map2.get(key) || 0) + 1);
  }
  let ans = 0;
  for (const [key, val] of map) {
      ans += val * map2.get(key) || 0;
  }
  return ans;
};
