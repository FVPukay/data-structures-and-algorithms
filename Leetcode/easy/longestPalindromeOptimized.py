import math

class Solution:
    def longestPalindrome(self, s: str) -> int:
        freqCounter = {}
        sum = 0

        for letter in s:
            try:
                freqCounter[letter] = freqCounter[letter] + 1
            except KeyError:
                freqCounter[letter] = 1
        
        for value in freqCounter.values():
            sum += math.floor(value / 2) * 2
            if sum % 2 == 0 and value % 2 != 0:
                sum += 1
        
        return sum

'''

Runtime
43 ms
Beats
69.86%
Memory
13.9 MB
Beats
22.8%

'''