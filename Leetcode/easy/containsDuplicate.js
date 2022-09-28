// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const hashTable = {};
    for (const num of nums) {
        if (hashTable[num]) return true;
        hashTable[num] = true;
    }
    return false;
};

module.exports = containsDuplicate;
