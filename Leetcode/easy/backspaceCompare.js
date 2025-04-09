/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Brute Force
 * M = s.length, N = t.length
 * Time Complexity: O(M + N)
 * Space Complexity: O(M + N)
 */
var backspaceCompare = function(s, t) {
  function convert(str) {
      const stack = [];

      for (const char of str) {
          if (char !== "#") {
              stack.push(char);
          } else if (stack.length) {
              stack.pop();
          }
      }

      return stack.join("");
  }

  return convert(s) === convert(t);

};
