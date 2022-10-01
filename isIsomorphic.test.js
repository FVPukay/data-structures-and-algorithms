const isIsomorphic = require('./Leetcode/easy/isIsomorphic');

test('Isomorphic Strings', () => {
    expect(isIsomorphic('egg', 'add')).toStrictEqual(true);
    expect(isIsomorphic('foo', 'bar')).toStrictEqual(false);
    expect(isIsomorphic('paper', 'title')).toStrictEqual(true);
    expect(isIsomorphic('Add', 'boo')).toStrictEqual(true);
    expect(isIsomorphic('Add', 'boO')).toStrictEqual(false);
    expect(isIsomorphic('{adef', 'cbr37')).toStrictEqual(true);
});