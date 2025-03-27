/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Time: O(N)
 * Space: O(N)
 */
var maximumSum = function(nums) {
  const getDigitSum = num => {
      let digitSum = 0;
      while (num > 0) {
          digitSum += num % 10;
          num = Math.floor(num / 10);
      }
      return digitSum;
  }
  const map = new Map();
  let ans = -1;
  for (num of nums) {
      const digitSum = getDigitSum(num);
      if (map.has(digitSum)) {
          ans = Math.max(ans, num + map.get(digitSum));
      }
      map.set(digitSum, Math.max(num, map.get(digitSum) || 0));
  }
  return ans;
};
