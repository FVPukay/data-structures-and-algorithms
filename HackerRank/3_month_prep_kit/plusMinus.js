'use strict';

var plusMinus = function(arr) {
    // Time: O(N)
    // Space: O(1)
    // Note: altering function to return in contrast to HackerRank
    const length = arr.length;
    let pos = 0, neg = 0, zero = 0;
    arr.forEach(num => {
        if (num > 0) {
            pos++;
        } else if (num < 0) {
            neg++;
        } else {
            zero++;
        }
    });
    return [
        (pos/length).toFixed(6), 
        (neg/length).toFixed(6), 
        (zero/length).toFixed(6)
    ];
}

module.exports = plusMinus;
