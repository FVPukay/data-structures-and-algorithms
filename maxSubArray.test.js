const maxSubArray = require('./Leetcode/medium/maxSubArray');

test('max sub array', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toStrictEqual(6);
    expect(maxSubArray([1])).toStrictEqual(1);
    expect(maxSubArray([5,4,-1,7,8])).toStrictEqual(23);
});
