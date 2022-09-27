const breakingRecords = require('./HackerRank/easy/breakingRecords');

test('return array of number of times min and max records broken', () => {
    expect(breakingRecords([12, 24, 10, 24])).toStrictEqual([1, 1]);
    expect(breakingRecords([1, 1, 1, 1, 1])).toStrictEqual([0, 0]);
    expect(breakingRecords([100000000, 100000000, 100000000, 100000000, 100000000])).toStrictEqual([0, 0]);
    expect(breakingRecords([1])).toStrictEqual([0, 0]);
    expect(breakingRecords([23, 15, 19, 33, 10, 34, 38, 40, 9, 7, 3])).toStrictEqual([4, 5]);
});