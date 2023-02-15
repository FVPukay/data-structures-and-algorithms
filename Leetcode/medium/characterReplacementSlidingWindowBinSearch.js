// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/?envType=study-plan&id=level-1

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // Time Complexity: O(NlogN)
    // Space Complexity: O(M) where M = number of distinct characters in the string
    
    let min = 1;
    let max = s.length + 1;

    while (min + 1 < max) {
        let mid = min + Math.floor((max - min) / 2)
        if (isValidSubstr(s, mid, k)) {
            min = mid;
        } else {
            max = mid;
        }
    }

    return min;
};

function isValidSubstr(str, windowSize, k) {
    let freqCounter = {};
    let maxFreq = 0;
    let start = 0;

    for (let end = 0; end < str.length; end += 1) {
        freqCounter[str[end]] = (freqCounter[str[end]] || 0) + 1;

        if (end + 1 - start > windowSize) {
            freqCounter[str[start]] -= 1;
            start += 1;
        }

        maxFreq = Math.max(maxFreq, freqCounter[str[end]]);

        if (windowSize - maxFreq <= k) {
            return true;
        }
    }

    return false;
}

/*

Runtime
175 ms
Beats
27.94%
Memory
43 MB
Beats
44.66%

*/
