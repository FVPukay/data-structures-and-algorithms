class Solution {
    public boolean isIsomorphic(String s, String t) {
        int[] mapS_T = new int[256];
        Arrays.fill(mapS_T, -1);
        int[] mapT_S = new int[256];
        Arrays.fill(mapT_S, -1);

        for (int i = 0; i < s.length(); i++) {
            char char1 = s.charAt(i);
            char char2 = t.charAt(i);
            if (mapS_T[char1] == -1 && mapT_S[char2] == -1) {
                mapS_T[char1] = char2;
                mapT_S[char2] = char1;
            }
            else if (!(mapS_T[char1] == char2 && mapT_S[char2] == char1)) {
                return false;
            }
        }
        return true;
    }
}

/*

Runtime
3 ms
Beats
99.37%
Memory
42.5 MB
Beats
77.98%

 */
