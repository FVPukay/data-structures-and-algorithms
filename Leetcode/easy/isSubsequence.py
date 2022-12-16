class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        count = 0

        for num in range(len(t)):
            try:
                if s[count] == t[num]:
                    count += 1
            except IndexError:
                continue

        if count == len(s):
            return True
        else:
            return False

'''

Runtime
33 ms
Beats
92.61%
Memory
13.9 MB
Beats
82.15%

'''
