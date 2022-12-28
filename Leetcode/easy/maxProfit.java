class Solution {
    public int maxProfit(int[] prices) {
        // Time Complexity: O(N)
        // Space Complexity: O(1)

        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;

        for (int idx = 0; idx < prices.length; idx++) {
            if (prices[idx] < minPrice) {
                minPrice = prices[idx];
            } else if (prices[idx] - minPrice > maxProfit) {
                maxProfit = prices[idx] - minPrice;
            }
        }

        return maxProfit;
    }
}

/*
 
Runtime
2 ms
Beats
87.15%
Memory
59 MB
Beats
82.49%

 */
