/**
 * @param {string} s
 * @return {string}
 *
 * Time: O(N)
 * Space: O(N)
 */
var removeDuplicates = function(s) {
  const stack = [];
  for (const c of s) {
      if (stack.length && stack[stack.length - 1] === c) {
          stack.pop();
      } else {
          stack.push(c);
      }
  }
  return stack.join("");
};
