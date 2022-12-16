class Solution {
    public boolean isSubsequence(String s, String t) {
        Integer leftCounter = 0;

        for (int rightCounter = 0; rightCounter < t.length(); rightCounter++) {
            try {
                if (t.charAt(rightCounter) == s.charAt(leftCounter)) {
                    leftCounter++;
                }
            } catch (Exception e) {
                continue;
            }
            
        }

        if (leftCounter != s.length()) {
            return false;
        }

        return true;
    }
}

/*

Runtime
2 ms
Beats
70.58%
Memory
40.6 MB
Beats
81.45%

 */
