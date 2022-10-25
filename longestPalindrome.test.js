const longestPalindrome = require('./Leetcode/easy/longestPalindrome');

test('Is Subsequence', () => {
    expect(longestPalindrome('abccccdd')).toStrictEqual(7);
    expect(longestPalindrome('a')).toStrictEqual(1);
    expect(longestPalindrome('Aa')).toStrictEqual(1);
    expect(longestPalindrome('dbeeedrtz')).toStrictEqual(5);
    expect(longestPalindrome('tqqtqtttraa')).toStrictEqual(9);
    expect(longestPalindrome('aabbbccc')).toStrictEqual(7);
    expect(longestPalindrome('aabbbbbcccddddddddeeeeeeeeefffghhhhhhh')).toStrictEqual(33);
});