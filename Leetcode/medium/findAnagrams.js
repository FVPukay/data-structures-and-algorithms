// 438. Find All Anagrams in a String
// https://leetcode.com/problems/find-all-anagrams-in-a-string/?envType=study-plan&id=level-1

function hashMapEquals(hashMap1, hashMap2) {
    // Time Complexity: O(# key/value pairs in hashMap1 + # key/value pairs in hashMap2)
    // Space Complexity: O(1)

    // Time Complexity: O(# key/value pairs in hashMap1)
    for (let key in hashMap1) {
        if (!(key in hashMap2)) return false;
        if (hashMap1[key] !== hashMap2[key]) return false;
    }

    // Time Complexity: O(# key/value pairs in hashMap2)
    for (let key in hashMap2) {
        if (!(key in hashMap1)) return false;
        if (hashMap2[key] !== hashMap1[key]) return false;
    }

    return true;
}

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // Time Complexity: O(length of s)
    // Space Complexity: O(1) - since s and p consist of 26 lowercase english letters
    
    const sLen = s.length;
    const pLen = p.length;
    const startIdxArr = [];

    if (pLen > sLen) {
        return startIdxArr;
    }

    const pFreqCounter = {};
    const sFreqCounter = {};

    for (let i = 0; i < p.length; i++) {
        pFreqCounter[p[i]] = (pFreqCounter[p[i]] || 0) + 1;
    }

    for (let i = 0; i < sLen; i++) {
        let char = s[i];
        sFreqCounter[char] ? sFreqCounter[char] += 1 : sFreqCounter[char] = 1;

        if (i >= pLen) {
            char = s[i - pLen];  // char to remove
            if (sFreqCounter[char] === 1) {
                delete sFreqCounter[char];
            } else {
                sFreqCounter[char] -= 1;
            }
        }

        if (hashMapEquals(sFreqCounter, pFreqCounter)) {
            startIdxArr.push(i - pLen + 1);
        }
    }

    return startIdxArr;
};

/*

Runtime
287 ms
Beats
26.76%
Memory
49.2 MB
Beats
40.39%

*/
