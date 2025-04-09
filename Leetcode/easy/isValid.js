/**
 * @param {string} s
 * @return {boolean}
 * 
 * Time: O(N)
 * Space: O(N)
 */
var isValid = function(s) {
  const stack = [];
  const brackets = {
      "(": ")",
      "{": "}",
      "[": "]",
  };
  for (const b of s) {
      // if an opening bracket
      if (b in brackets) {
          stack.push(b);
      // else is closing bracket
      } else {
          if (!stack.length) {
              return false;
          }
          const prevOpenB = stack.pop();
          if (brackets[prevOpenB] !== b) {
              return false;
          }
      }
  }
  return !stack.length;
};
