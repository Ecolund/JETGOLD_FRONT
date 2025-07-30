import React from "react";
import { Header } from "../../components/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import "./CoinDetails.css";

export const CoinDetails = () => {
  return (
    <div className="mobile-container">
      <Header />
      
      <main className="coin-details">
        <div className="back-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </svg>
          <span className="text-accent">назад</span>
        </div>
        
        <div className="coin-header">
          <div className="coin-image-large">
            <img src="/img/image-19-2x.png" alt="American Eagle" />
          </div>
          
          <div className="coin-info-detailed">
            <h1 className="coin-title-large text-accent">
              Золотая монета "Американский орел"
            </h1>
            <p className="coin-weight text-primary">1 унция</p>
            <p className="coin-price-large text-primary">€6,526.36</p>
            
            <div className="last-updated">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.01037 4.66667C2.37218 5.62007 2 6.76657 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2V4M8 8L5.33333 5.33333" stroke="currentColor"/>
              </svg>
              <span className="text-secondary">Обновление: 00:30 назад</span>
            </div>
          </div>
        </div>
        
        <div className="purchase-section card">
          <div className="purchase-tabs">
            <button className="tab active text-primary">По сумме</button>
            <button className="tab text-secondary">По количеству</button>
          </div>
          
          <div className="amount-input">
            <input 
              type="text" 
              placeholder="Введите сумму покупки (EUR)"
              className="amount-field"
            />
          </div>
          
          <div className="limits">
            <span className="text-secondary">Лимит:</span>
            <span className="text-primary">$1,000-$10,000</span>
          </div>
          
          <div className="calculation-row">
            <span className="text-secondary">Количество:</span>
            <span className="text-primary">3 монеты</span>
          </div>
          
          <div className="calculation-row">
            <span className="text-secondary">Сумма к оплате:</span>
            <span className="text-primary">€6,526.36</span>
          </div>
          
          <div className="calculation-row">
            <span className="text-secondary">Проверка подлинности:</span>
            <span className="text-primary">Да (эксперт JetGold)</span>
          </div>
          
          <button className="buy-button btn-primary">
            Купить Американский орёл
          </button>
        </div>
      </main>

      <Navigation />
    </div>
  );
};