const isSubsequence = require('./Leetcode/easy/isSubsequence');

test('Is Subsequence', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toStrictEqual(true);
    expect(isSubsequence('axc', 'ahbgdc')).toStrictEqual(false);
    expect(isSubsequence('', '')).toStrictEqual(true);
    expect(isSubsequence('abc', 'axtcbc')).toStrictEqual(true);
    expect(isSubsequence('xyzab', 'rth')).toStrictEqual(false);
    expect(isSubsequence('abaadee', 'abxyadee')).toStrictEqual(false);
    expect(isSubsequence('', 'abc')).toStrictEqual(true);
});
