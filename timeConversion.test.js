const timeConversion = require('./HackerRank/easy/timeConversion');

test('min and max of 4 out of the 5 integers in the arr input', () => {
    expect(timeConversion('12:00:00AM')).toStrictEqual('00:00:00');
    expect(timeConversion('12:00:00PM')).toStrictEqual('12:00:00');
    expect(timeConversion('01:53:23PM')).toStrictEqual('13:53:23');
    expect(timeConversion('11:59:59PM')).toStrictEqual('23:59:59');
    expect(timeConversion('04:03:21AM')).toStrictEqual('04:03:21');
});
