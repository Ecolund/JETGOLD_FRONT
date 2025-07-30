import React from "react";
import { Header } from "../../components/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import "./CoinsList.css";

export const CoinsList = () => {
  return (
    <div className="mobile-container">
      <Header />
      
      <main className="coins-list">
        <div className="page-header">
          <h1 className="page-title text-accent">Список монет</h1>
        </div>
        
        <div className="coins-grid">
          {/* Placeholder for coin list items */}
          <div className="coin-item card">
            <div className="coin-preview">
              <img src="/img/image-19-2.png" alt="Coin" className="coin-thumb" />
            </div>
            <div className="coin-details">
              <h3 className="coin-name text-primary">Американский орел</h3>
              <p className="coin-price text-accent">€6,526.36</p>
            </div>
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
};