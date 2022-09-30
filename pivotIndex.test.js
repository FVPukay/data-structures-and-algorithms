const pivotIndex = require('./Leetcode/easy/pivotIndex');

test('Find pivot index', () => {
    expect(pivotIndex([1,7,3,6,5,6])).toStrictEqual(3);
    expect(pivotIndex([1,2,3])).toStrictEqual(-1);
    expect(pivotIndex([2,1,-1])).toStrictEqual(0);
    expect(pivotIndex([1,-1,2])).toStrictEqual(2);
    expect(pivotIndex([1])).toStrictEqual(0);
    expect(pivotIndex([1,-1])).toStrictEqual(-1);
    expect(pivotIndex([0,1])).toStrictEqual(1);
    expect(pivotIndex([1,0])).toStrictEqual(0);
});
