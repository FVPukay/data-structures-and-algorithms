/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // Time: O(N)
  // Space: O(1)
  
  let i = 0;
  let n = nums.length;

  while(i < n) {
      if(nums[i] !== val) {
          i += 1;
      } else {
          nums[i] = nums[n - 1];
          n -= 1;
      }
  }

  return i;
};
