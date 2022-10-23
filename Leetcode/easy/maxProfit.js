// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan&id=level-1

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};

module.exports = maxProfit;

/* 

Success
Details 
Runtime: 152 ms, faster than 32.86% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 51.7 MB, less than 66.67% of JavaScript online submissions for Best Time to Buy and Sell Stock.

*/
