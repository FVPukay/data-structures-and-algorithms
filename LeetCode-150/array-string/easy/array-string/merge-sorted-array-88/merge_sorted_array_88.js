/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // Time: O(M + N)
  // Space: O(1)

  let p1 = m + n - 1;
  let p2 = p1 - n;
  let p3 = n - 1;

  for ( ; p1 >= 0; p1--) {
      if (nums1[p2] >= nums2[p3] && p3 >= 0) {
          nums1[p1] = nums1[p2];
          p2 -= 1;
      } else if (p3 >= 0) {
          nums1[p1] = nums2[p3];
          p3 -= 1;
      } else {
          nums1[p1] = nums1[p2];
          p2 -= 1;
      }
  }
};
