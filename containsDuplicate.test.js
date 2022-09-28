const containsDuplicate = require('./Leetcode/easy/containsDuplicate');

test('contains duplicate', () => {
    expect(containsDuplicate([1,2,3,1])).toStrictEqual(true);
    expect(containsDuplicate([1,2,3,4])).toStrictEqual(false);
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toStrictEqual(true);
});