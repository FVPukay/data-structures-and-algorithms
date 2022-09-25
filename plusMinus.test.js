const plusMinus = require('./HackerRank/3_month_prep_kit/plusMinus');

test('ratio of positive, negative, zero', () => {
    expect(plusMinus([-4, 3, -9, 0, 4, 1])).toStrictEqual(['0.500000', '0.333333', '0.166667']);
    expect(plusMinus([-100])).toStrictEqual(['0.000000', '1.000000', '0.000000']);
});
