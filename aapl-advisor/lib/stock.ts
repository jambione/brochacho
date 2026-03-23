import YahooFinance from 'yahoo-finance2';

const yf = new YahooFinance();

export interface StockData {
  price: number;
  ma50: number;
  ma200: number;
}

export type Recommendation = 'Buy' | 'Hold' | 'Sell';

export async function getStockData(symbol: string): Promise<StockData> {
  const result = await yf.quoteSummary(symbol, {
    modules: ['summaryDetail', 'financialData'],
  });

  const price = result.financialData?.currentPrice;
  const ma50 = result.summaryDetail?.fiftyDayAverage;
  const ma200 = result.summaryDetail?.twoHundredDayAverage;

  if (price == null || ma50 == null || ma200 == null) {
    throw new Error(`Missing data for ${symbol}: price=${price}, ma50=${ma50}, ma200=${ma200}`);
  }

  return { price, ma50, ma200 };
}

export function getRecommendation({ price, ma50, ma200 }: StockData): Recommendation {
  if (price < ma50) {
    return 'Buy';
  }
  if (price > ma200 * 1.1) {
    return 'Sell';
  }
  return 'Hold';
}
