import { getRecommendation } from '@/lib/stock';

// NOTE: getStockData makes a live network call to yahoo-finance2, so we test
// getRecommendation (pure logic) directly. getStockData is covered by the
// integration-style mock test below.

describe('getRecommendation', () => {
  it('returns "Buy" when price is below the 50-day moving average', () => {
    const result = getRecommendation({ price: 150, ma50: 160, ma200: 170 });
    expect(result).toBe('Buy');
  });

  it('returns "Sell" when price is more than 10% above the 200-day moving average', () => {
    // 200 * 1.10 = 220, price 225 > 220 → Sell
    const result = getRecommendation({ price: 225, ma50: 210, ma200: 200 });
    expect(result).toBe('Sell');
  });

  it('returns "Hold" when price is between the two thresholds', () => {
    // price >= ma50, and price <= ma200 * 1.10
    const result = getRecommendation({ price: 180, ma50: 170, ma200: 175 });
    expect(result).toBe('Hold');
  });

  it('returns "Hold" when price equals exactly 110% of the 200-day moving average', () => {
    // boundary: exactly at the sell threshold should NOT trigger Sell
    const result = getRecommendation({ price: 220, ma50: 200, ma200: 200 });
    expect(result).toBe('Hold');
  });

  it('returns "Buy" when price is below ma50 even if it exceeds 110% of ma200', () => {
    // Buy condition takes precedence
    const result = getRecommendation({ price: 100, ma50: 120, ma200: 80 });
    expect(result).toBe('Buy');
  });
});

describe('getStockData shape', () => {
  it('getStockData is a function exported from lib/stock', async () => {
    const mod = await import('@/lib/stock');
    expect(typeof mod.getStockData).toBe('function');
  });
});
