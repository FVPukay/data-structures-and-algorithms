'use strict';

var breakingRecords = function(scores) {
    const firstScore = scores[0];
    let min = firstScore,
        max = firstScore,
        minCount = 0,
        maxCount = 0;
    
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < min) minCount++;
        if (scores[i] > max) maxCount++;

        min = Math.min(min, scores[i]);
        max = Math.max(max, scores[i]);
    }
    return [maxCount, minCount];
}

module.exports = breakingRecords;
