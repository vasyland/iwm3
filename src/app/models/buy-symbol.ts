export interface BuySymbol {
  symbol: string
  currentPrice: number
  quoterlyDividendAmount: number
  currentYield: number
  upperYield: number
  lowerYield: number
  allowedBuyPrice: number
  bestBuyPrice: number
  allowedBuyYield: number
  sellPointYield: number
  recommendedAction: string
  updatedOn: string
}
