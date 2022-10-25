// 409. Longest Palindrome
// https://leetcode.com/problems/longest-palindrome/

'use strict';

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    // frequency counter
    // then using that (a second loop)
    // sum every even
    // add first odd (if there is one)
    // then for any other odd, add but subtract one
    
    // time complexity: O(2N) = simplified to O(N)
    // space complexity: O(N)
    
    const freqCounter = {};
    let sum = 0;
    let hasOdd = false;
    
    for (const letter of s) {
        if (freqCounter[letter]) {
            freqCounter[letter] += 1;
        } else {
            freqCounter[letter] = 1;
        }
    }
    
    for (const letter in freqCounter) {
        if (freqCounter[letter] % 2 === 0) {
            sum += freqCounter[letter];
        } else {
            if (hasOdd === false) {
                sum += freqCounter[letter];
                hasOdd = true;
            } else {
                sum += freqCounter[letter] - 1;
            }
        }
    }
    
    return sum;
    
};

module.exports = longestPalindrome;

/*

Success
Details 
Runtime: 135 ms, faster than 9.75% of JavaScript online submissions for Longest Palindrome.
Memory Usage: 44.3 MB, less than 41.72% of JavaScript online submissions for Longest Palindrome.

*/