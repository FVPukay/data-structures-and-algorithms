/**
 * @param {number[]} temperatures
 * @return {number[]}
 *
 * Able to take advantage of the monotonically non-increasing pattern
 * While temperatures are monotonically non-increasing, push to stack
 * 
 * Time: O(N)
 * Space: O(N)
 * 
 */
var dailyTemperatures = function(temperatures) {
  const stack = [];
  const ans = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
      while (stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
          let j = stack.pop();
          ans[j] = i - j;
      }
      stack.push(i)
  }
  return ans;
};
