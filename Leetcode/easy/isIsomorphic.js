// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/?envType=study-plan&id=level-1

'use strict';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    // Time Complexity: O(N)
    // Space Complexity: O(N)
    
    const mapS = {};  // Space: O(N)
    const mapT = {};  // Space: O(N)
    
    // Time: O(N)
    for (let i = 0; i < s.length; i++) {
        if (mapS[s[i]] === undefined || mapS[s[i]] === t[i]) {
            mapS[s[i]] = t[i];
        } else {
            return false;
        }
    }
    
    // Time: O(N)
    for (let i = 0; i < s.length; i++) {
        if (mapT[t[i]] === undefined || mapT[t[i]] === s[i]) {
            mapT[t[i]] = s[i];
        } else {
            return false;
        }
    }
    
    return true;
};

module.exports = isIsomorphic;

/*

Success
Details 
Runtime: 90 ms, faster than 82.53% of JavaScript online submissions for Isomorphic Strings.
Memory Usage: 43.2 MB, less than 62.35% of JavaScript online submissions for Isomorphic Strings.

*/
