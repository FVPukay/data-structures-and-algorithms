/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Time: O(N)
    // Space: O(1)
    
    let p1 = 0;
    let p2 = s.length - 1;
  
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
  
    while (p1 < p2) {
        let leftChar = s[p1].toLowerCase();
        let rightChar = s[p2].toLowerCase();
  
        if (isAlphaNum(leftChar) && 
            isAlphaNum(rightChar)) {
            if (leftChar === rightChar) {
                p1 += 1;
                p2 -= 1;
            } else {
                return false;
            }
        } else if (
            !isAlphaNum(leftChar) && 
            !isAlphaNum(rightChar)) {
                p1 += 1;
                p2 -=1;
            } else if (
                !isAlphaNum(leftChar) && 
                isAlphaNum(rightChar)) {
                    p1 += 1;
                } else if (
                    isAlphaNum(leftChar) && 
                    !isAlphaNum(rightChar)
                ) {
                    p2 -= 1;
                }
    }
  
    return true;
  };
  