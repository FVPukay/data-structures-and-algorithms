const climbStairsFibIterBottomUp = require('./Leetcode/easy/climbStairsFibIterBottomUp');

test('climb stairs', () => {
    expect(climbStairsFibIterBottomUp(1)).toStrictEqual(1);
    expect(climbStairsFibIterBottomUp(2)).toStrictEqual(2);
    expect(climbStairsFibIterBottomUp(3)).toStrictEqual(3);
    expect(climbStairsFibIterBottomUp(4)).toStrictEqual(5);
    expect(climbStairsFibIterBottomUp(5)).toStrictEqual(8);
    expect(climbStairsFibIterBottomUp(5)).toStrictEqual(8);
    expect(climbStairsFibIterBottomUp(45)).toStrictEqual(1836311903);
});
