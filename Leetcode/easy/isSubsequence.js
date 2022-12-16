// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1

'use strict';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    // Time: O(T)
    // Space: O(1)
    
    let count = 0;
    
    for (let i = 0; i < t.length; i++) {
        if(t[i] === s[count]) {
            count++;
        }
    }
    
    if (count === s.length) return true;
    
    return false;
};

module.exports = isSubsequence;

/*

Success
Details 
Runtime: 70 ms, faster than 86.68% of JavaScript online submissions for Is Subsequence.
Memory Usage: 42.1 MB, less than 47.38% of JavaScript online submissions for Is Subsequence.

*/