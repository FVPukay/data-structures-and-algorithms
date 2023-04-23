// 844. Backspace String Compare
// https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  // Brute Force
  // M = s.length, N = t.length
  // Time Complexity: O(M + N)
  // Space Complexity: O(M + N)
  
  function convert(str) {
      // input: string consisting of lowercase letters or "#"
      // output: new string taking in mind that "#" is backspace character 
      const arr = [];

      for (let char of str) {
          if (char !== "#") {
              arr.push(char);
          } else {
              arr.pop();
          }
      }

      return arr.join("");
  }

  return convert(s) === convert(t);

};

/*

Runtime
63 ms
Beats
53.41%
Memory
44.5 MB
Beats
6.81%

*/
