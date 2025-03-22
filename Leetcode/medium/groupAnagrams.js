/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * N length of strs
 * M average length of strs
 *
 * Time: O(NMLogM)
 * Space: O(NM)
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  for (const str of strs) {
      const key = str.split('').sort().join('');
      if (!map.has(key)) {
          map.set(key, []);
      }
      map.get(key).push(str);
  }
  return Array.from(map.values());
};
