class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Time Complexity: O(N)
        # Space Complexity: O(1)
        
        minPrice = float('inf');
        maxProfit = 0

        for index in range (len(prices)):
            if prices[index] < minPrice:
                minPrice = prices[index]
            elif prices[index] - minPrice > maxProfit:
                maxProfit = prices[index] - minPrice

        return maxProfit

'''

Runtime
911 ms
Beats
99.74%
Memory
25 MB
Beats
87.39%

'''
