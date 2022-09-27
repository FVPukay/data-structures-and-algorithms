'use strict';

var miniMaxSum = function(arr) {
    // Time Complexity: O(N)
    // Space Complexity: O(1)
    let min = Infinity, max = -Infinity, sum = 0;
    arr.forEach(intNum => {
        min = Math.min(min, intNum);
        max = Math.max(max, intNum);
        sum += intNum;
    });
    let minSum = sum - max;
    let maxSum = sum - min;
    return [minSum, maxSum];
}

module.exports = miniMaxSum;
