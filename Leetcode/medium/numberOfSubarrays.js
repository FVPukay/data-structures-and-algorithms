/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * Time: O(N)
 * Space: O(N)
 */
var numberOfSubarrays = function(nums, k) {
  let freq = new Map();
  freq.set(0, 1);
  let ans = 0, curr = 0;

  for (const num of nums) {
      curr += num % 2;
      ans += (freq.get(curr - k) || 0);
      freq.set(curr, (freq.get(curr) || 0) + 1);
  }
  return ans;
};
