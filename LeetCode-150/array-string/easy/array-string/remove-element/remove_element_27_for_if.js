/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // Time: O(N)
  // Space: O(1)
  
  let i = 0;

  for(let j = 0; j < nums.length; j++) {
      if(nums[j] !== val) {
          nums[i] = nums[j];
          i += 1;
      }
  }

  return i;
};
