import { getStockData, getRecommendation } from '@/lib/stock';
import StockCard from '@/components/StockCard';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let data;
  let error: string | null = null;

  try {
    data = await getStockData('AAPL');
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to fetch stock data';
  }

  const recommendation = data ? getRecommendation(data) : null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-1">AAPL Stock Advisor</h1>
        <p className="text-sm text-gray-400">
          Updated {new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
        </p>
      </div>

      {error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 max-w-md w-full text-center">
          <p className="text-red-700 font-medium">Unable to load stock data</p>
          <p className="text-red-500 text-sm mt-1">{error}</p>
        </div>
      ) : data && recommendation ? (
        <StockCard
          symbol="AAPL"
          price={data.price}
          ma50={data.ma50}
          ma200={data.ma200}
          recommendation={recommendation}
        />
      ) : null}

      <p className="mt-8 text-xs text-gray-400 max-w-md text-center">
        Buy: price &lt; 50-day MA &nbsp;|&nbsp;
        Sell: price &gt; 200-day MA by &gt;10% &nbsp;|&nbsp;
        Hold: otherwise
      </p>
    </div>
  );
}
