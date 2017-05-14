function getMaxProfit(stockPrices) {

  let maxProfit 
  let lowestPrice

  for (let i = 0; i < stockPrices.length; i++) {
    if (!lowestPrice || stockPrices[i] < lowestPrice) {
      lowestPrice = stockPrices[i]
    }
    if (!maxProfit || stockPrices[i] - lowestPrice > maxProfit) {
      maxProfit = stockPrices[i] - lowestPrice
    }
  }

  return maxProfit

}

const stockPricesYesterday = [10, 7, 5, 8, 11, 9]

console.log(getMaxProfit(stockPricesYesterday))
// returns 6 (buying for $5 and selling for $11)
