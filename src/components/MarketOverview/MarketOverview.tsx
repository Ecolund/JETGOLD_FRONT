import React from "react";
import "./MarketOverview.css";

interface MarketOverviewProps {
  title: string;
  price: string;
  change: string;
}

export const MarketOverview: React.FC<MarketOverviewProps> = ({ title, price, change }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <div className="market-overview">
      <div className="market-info">
        <span className="market-title text-secondary">{title}</span>
        <span className="market-price text-primary">{price}</span>
        <span className={`market-change ${isPositive ? 'text-success' : 'text-error'}`}>
          {change}
        </span>
      </div>
    </div>
  );
};