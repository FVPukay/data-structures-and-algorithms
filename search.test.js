const search = require("./Leetcode/easy/search");

test("search", () => {
    expect(search([-1,0,3,5,9,12], 9)).toBe(4);
    expect(search([-1,0,3,5,9,12], 2)).toBe(-1);
    expect(search([-7], 2)).toBe(-1);
    expect(search([-7], -7)).toBe(0);
});
