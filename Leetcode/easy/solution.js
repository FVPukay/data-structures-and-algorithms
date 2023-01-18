// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/?envType=study-plan&id=level-1

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;

        while (left < right) {
            let midpoint = Math.floor( (left + right) / 2);
            if (isBadVersion(midpoint)) {
                right = midpoint;
            } else {
                left = midpoint + 1;
            }
        }

        return left;
    };
};

/*

Runtime
58 ms
Beats
90.87%
Memory
41.7 MB
Beats
72.29%

*/
