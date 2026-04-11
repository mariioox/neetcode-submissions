class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i=0; i<prices.length; i++) {
            let currentPrice = prices[i];

            if (currentPrice < minPrice) {
                minPrice = currentPrice;
            } else {
                let potProfit = currentPrice - minPrice;
                maxProfit = Math.max(maxProfit, potProfit);
            }
        }
        return maxProfit;
    }
}
