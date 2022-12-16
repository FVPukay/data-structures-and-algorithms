class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        # Time: O(N)
        # Space: O(1) - ASCII fixed at 256

        map_s_to_t = {}
        map_t_to_s = {}

        for char1, char2 in zip(s, t):
            if (char1 not in map_s_to_t) and (char2 not in map_t_to_s):
                map_s_to_t[char1] = char2
                map_t_to_s[char2] = char1
            try:
                if map_s_to_t[char1] != char2 or map_t_to_s[char2] != char1:
                    return False
            except KeyError:
                return False

        return True

'''

Runtime
35 ms
Beats
98.25%
Memory
14.3 MB
Beats
21.44%

'''
