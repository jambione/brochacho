import React from 'react';
import { render, screen } from '@testing-library/react';
import StockCard from '@/components/StockCard';

const baseProps = {
  symbol: 'AAPL',
  price: 185.5,
  ma50: 180,
  ma200: 170,
  recommendation: 'Hold' as const,
};

describe('StockCard', () => {
  it('renders the stock symbol', () => {
    render(<StockCard {...baseProps} />);
    expect(screen.getByText(/AAPL/i)).toBeInTheDocument();
  });

  it('renders the current price', () => {
    render(<StockCard {...baseProps} />);
    expect(screen.getByText(/185\.5/)).toBeInTheDocument();
  });

  it('renders the recommendation badge', () => {
    render(<StockCard {...baseProps} />);
    expect(screen.getByText(/Hold/i)).toBeInTheDocument();
  });

  it('renders a Buy recommendation badge', () => {
    render(<StockCard {...baseProps} recommendation="Buy" price={150} ma50={160} />);
    expect(screen.getByText(/Buy/i)).toBeInTheDocument();
  });

  it('renders a Sell recommendation badge', () => {
    render(<StockCard {...baseProps} recommendation="Sell" price={230} ma50={200} ma200={200} />);
    expect(screen.getByText(/Sell/i)).toBeInTheDocument();
  });

  it('renders the 50-day moving average', () => {
    render(<StockCard {...baseProps} />);
    expect(screen.getByText(/180/)).toBeInTheDocument();
  });

  it('renders the 200-day moving average', () => {
    render(<StockCard {...baseProps} />);
    expect(screen.getByText(/170/)).toBeInTheDocument();
  });
});
