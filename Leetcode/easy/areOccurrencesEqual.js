/**
 * @param {string} s
 * @return {boolean}
 * 
 * Time: O(N)
 * Space: O(1) but could argue O(K)
 */
var areOccurrencesEqual = function(s) {
  // The space that the hash map and set occupies is equal to the number of unique characters
  // Can aruge space is O(1) since characters come from English alphabet
  // Or can go with a more general answer and say the space is O(K)
  // K being the number of characters that could be in the input
  // K in this problem happens to be 26
  const map = new Map();
  // O(n) time to populate the hash map
  for (const char of s) {
      map.set(char, (map.get(char) || 0) + 1);
  }
  // O(n) time to convert the hash map's values to a set
  const freq = new Set(map.values());
  return freq.size === 1;
};
