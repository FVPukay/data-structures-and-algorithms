const miniMaxSum = require('./HackerRank/easy/miniMaxSum');

test('min and max of 4 out of the 5 integers in the arr input', () => {
    expect(miniMaxSum([1, 3, 5, 7, 9])).toStrictEqual([16, 24]);
    expect(miniMaxSum([50, 21, 37, 45, 2])).toStrictEqual([105, 153]);
    expect(miniMaxSum([1000000000, 1000000000, 1000000000, 1000000000, 1000000000])).toStrictEqual([4000000000, 4000000000]);
    expect(miniMaxSum([1, 1, 1, 1, 1])).toStrictEqual([4, 4]);
});
