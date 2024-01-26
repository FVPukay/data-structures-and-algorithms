/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // Time: O(N)
  // Space: O(1) in-place

  let removals = 0;
  const n = nums.length;

  const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  for(let i = 0; i < n; i++) {
      if(nums[i] === val) {
          nums[i] = `${val}`;
          removals += 1;
      }
  }

  if(removals === n) return 0;

  let i = 0, j = n - 1;

  while(i < j) {
      const rm = `${val}`;

      if(nums[i] !== rm) {
          i += 1;
      } else if (nums[i] === rm && nums[j] === rm){
          j -= 1;
      } else if (nums[i] === rm && nums[j] !== rm) {
          swap(nums, i, j);
          i += 1;
          j -= 1;
      }
  }

  return n - removals;
};
