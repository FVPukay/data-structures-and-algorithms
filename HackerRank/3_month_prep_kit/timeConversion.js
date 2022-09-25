'use strict';

var timeConversion = function timeConversion(s) {
    // Time Complexity: O(N)
    // Space Complexity: O(1)
    let answer;
    const amOrPm = s[8];
    const hour = Number(s.split(':')[0]);
    if (hour === 12 && amOrPm === 'A') {
        const re = new RegExp(`^${hour}`);
        answer = s.replace(re, '00').substring(0, 8);
    } else if (hour >= 1 && hour < 12 && amOrPm === 'P') {
        const firstHourDigit = Number(s[0]);
        const secondHourDigit = Number(s[1]);
        const re = new RegExp(`^${firstHourDigit}${secondHourDigit}`);
        const replaceWith = 12 + hour;
        answer = s.replace(re, `${replaceWith}`).substring(0, 8);
    } else {
        answer = s.substring(0, 8);
    }
    return answer;
};

module.exports = timeConversion;
