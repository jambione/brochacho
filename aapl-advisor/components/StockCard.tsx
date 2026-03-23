import React from 'react';
import type { Recommendation } from '@/lib/stock';

interface StockCardProps {
  symbol: string;
  price: number;
  ma50: number;
  ma200: number;
  recommendation: Recommendation;
}

const badgeStyles: Record<Recommendation, string> = {
  Buy: 'bg-green-100 text-green-800 border-green-300',
  Hold: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  Sell: 'bg-red-100 text-red-800 border-red-300',
};

const explanations: Record<Recommendation, string> = {
  Buy: 'Price is below the 50-day moving average — the stock may be undervalued relative to recent trend.',
  Hold: 'Price is within normal range of both moving averages — no strong signal to buy or sell.',
  Sell: 'Price is more than 10% above the 200-day moving average — the stock may be overextended.',
};

export default function StockCard({ symbol, price, ma50, ma200, recommendation }: StockCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8 max-w-md w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{symbol}</h1>
        <span
          className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold border ${badgeStyles[recommendation]}`}
        >
          {recommendation}
        </span>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Current Price</p>
        <p className="text-4xl font-semibold text-gray-900">${price.toFixed(2)}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">50-Day MA</p>
          <p className="text-xl font-semibold text-gray-800">${ma50.toFixed(2)}</p>
        </div>
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">200-Day MA</p>
          <p className="text-xl font-semibold text-gray-800">${ma200.toFixed(2)}</p>
        </div>
      </div>

      <div className="rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">{explanations[recommendation]}</p>
      </div>
    </div>
  );
}
