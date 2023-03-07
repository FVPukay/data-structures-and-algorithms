// 299. Bulls and Cows
// https://leetcode.com/problems/bulls-and-cows/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    // Time Complexity: O(N)
    // Space Complexity: O(1) - only can contain keys of digits 0-9 so at most 10 entries
    // Two pass solution

    let bulls = 0, cows = 0;
    const freqCounterSecret = {};

    for (let i = 0; i < secret.length; i++) {
        freqCounterSecret[secret[i]] = (freqCounterSecret[secret[i]] || 0) + 1;
    }

    for (let i = 0; i < guess.length; i++) {
        let char = guess[i];
        if (char in freqCounterSecret) {  // cannot use -> if (freqCounterSecret[char]) due to scenario with secret = "1122" and guess = "1222"
            if (char === secret[i]) {
                bulls += 1;

                // if all characters from the secret are used up
                // e.g. 
                //       secret = 1231
                //       guess  = 0111
                // should be 2 cows (not 3) - else adds cow and we need to get rid
                // of the extra in this scenario
                if (freqCounterSecret[char] <= 0) {
                    cows -= 1;
                }
            } else {
                if (freqCounterSecret[char] > 0) {
                    cows += 1;
                }
            }

            freqCounterSecret[char] -= 1;
        }
    }

    return bulls + "A" + cows + "B";
};

/*

Runtime
80 ms
Beats
51.56%
Memory
44 MB
Beats
70.69%

*/
