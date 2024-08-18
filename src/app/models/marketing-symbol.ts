export interface MarketingSymbol {
    symbol: string
    currentPrice: number
    quoterlyDividendAmount: number
    currentYield: number
    allowedBuyPrice: number
    bestBuyPrice: number
    allowedBuyYield: number
    sellPointYield: number
    recommendedAction: string
    updatedOn: string
  }