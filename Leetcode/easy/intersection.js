/**
 * @param {number[][]} nums
 * @return {number[]}
 * 
 * Time: O(n⋅m+m⋅logm) = O(m⋅(n+logm))
 * Space: O(n⋅m)
 */
var intersection = function(nums) {
  let counts = new Map();
  for (const arr of nums) {
      for (const x of arr) {
          counts.set(x, (counts.get(x) || 0) + 1);
      }
  }
  
  let n = nums.length;
  let ans = [];
  for (const [key, val] of counts) {
      if (val === n) {
          ans.push(key);
      }
  }
  
  ans.sort((a, b) => a - b);
  return ans;
};
