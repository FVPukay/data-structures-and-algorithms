/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // Time: O(N)
  // Space: O(1)

  function isAlphaNum(char) {
      if (char.length !== 1) return -1;

      let charCode = char.toLowerCase().charCodeAt();
      return (
          charCode >= 97 && 
          charCode <= 122 ||
          charCode >= 48 &&
          charCode <= 57 )
          ? true
          : false;
  }

  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
      while (i < j && !isAlphaNum(s[i])) {
          i += 1;
      }
      while (i < j && !isAlphaNum(s[j])) {
          j -= 1;
      }
      if (s[i].toLowerCase() !== s[j].toLowerCase()) {
          return false;
      }
  }

  return true;
};
