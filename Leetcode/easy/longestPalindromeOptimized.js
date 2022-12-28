/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // frequency counter
    // then using that (a second loop)
    // for each letter (key) in the frequency counter
    // make the running sum the minimum we can definitely expect from the value
    // then determine whether or not to add 1
    // i.e. only when the sum is even AND the value in the frequency counter is odd - this also accounts for s.length === 1

    // Time: O(N)
    // Space: O(1), size of alphabet is fixed (s consists of only upper and/or lowercase English letters)
    
    const freqCounter = {};
    let sum = 0;
    
    for (const letter of s) {
        freqCounter[letter] ? freqCounter[letter] += 1 : freqCounter[letter] = 1;
    }
    
    for (const letter in freqCounter) {
        sum += Math.floor(freqCounter[letter] / 2) * 2;
        if (sum % 2 === 0 && freqCounter[letter] % 2 !== 0) {
            sum++;
        }
    }
    
    return sum;
};

/*

Runtime
68 ms
Beats
92.82%
Memory
43.5 MB
Beats
66.47%

*/