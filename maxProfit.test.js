const maxProfit = require('./Leetcode/easy/maxProfit');

test('Max profit - buying and selling stock', () => {
    expect(maxProfit([7,1,5,3,6,4])).toStrictEqual(5);
    expect(maxProfit([7,6,4,3,1])).toStrictEqual(0);
    expect(maxProfit([3])).toStrictEqual(0);
    expect(maxProfit([15,8,3,7,5,11,1])).toStrictEqual(8);
    expect(maxProfit([88,45,21,89,2,3])).toStrictEqual(68);
});
