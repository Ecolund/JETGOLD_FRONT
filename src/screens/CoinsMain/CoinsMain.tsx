import React from "react";
import { Header } from "../../components/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { CoinCard } from "../../components/CoinCard/CoinCard";
import { MarketOverview } from "../../components/MarketOverview/MarketOverview";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import "./CoinsMain.css";

// Static dummy data
const featuredCoin = {
  id: "american-eagle",
  name: "Золотая монета \"Американский орел\"",
  weight: "1 унция",
  price: "€6,526.36",
  change: "+0.90%",
  rating: 4.87,
  reviews: 13,
  description: "Классическая золотая монета American Eagle чеканится Монетным двором США с 1986 года. Gold Eagle также имеет пробу...",
  image: "/img/image-19-2.png"
};

const coinOffers = [
  {
    id: "1",
    seller: "GoldenMan",
    verified: "Certified JetGold Partner + Chief Numismatist",
    deals: "1588 / 84%",
    price: "€6,526.36",
    change: "+0.90%",
    pricePerGram: "€96.36",
    volume: "9653.36535 USDT",
    inStock: "1-10 шт",
    paymentMethods: ["SEPA Instant", "Банковская карта", "Банковский перевод SEPA"],
    deliveryMethods: ["На месте", "Самовывоз", "Курьер", "Почта", "Международная"],
    lastUpdate: "11.12.2025  15:35",
    status: "online"
  },
  {
    id: "2",
    seller: "GoldenMan",
    verified: "Certified JetGold Partner",
    deals: "1588 / 84%",
    price: "€6,526.36",
    change: "+0.90%",
    pricePerGram: "€96.36",
    volume: "9653.36535 USDT",
    inStock: "1-10 шт",
    paymentMethods: ["SEPA Instant", "Банковская карта", "Банковский перевод SEPA"],
    deliveryMethods: ["На месте", "Самовывоз", "Курьер", "Почта", "Международная"],
    lastUpdate: "11.12.2025  15:35",
    status: "online"
  },
  {
    id: "3",
    seller: "GoldenMan",
    verified: "Verified Expert",
    deals: "1588 / 84%",
    price: "€6,526.36",
    change: "+0.90%",
    pricePerGram: "€96.36",
    volume: "9653.36535 USDT",
    inStock: "1-10 шт",
    paymentMethods: ["SEPA Instant", "Банковская карта", "Банковский перевод SEPA"],
    deliveryMethods: ["На месте", "Самовывоз", "Курьер", "Почта", "Международная"],
    lastUpdate: "11.12.2025  15:35",
    status: "online"
  }
];

export const CoinsMain = () => {
  return (
    <div className="mobile-container">
      <Header />
      
      <main className="coins-main">
        <div className="breadcrumb">
          <span className="text-primary">Золотые монеты</span>
          <span className="text-primary">|</span>
          <span className="text-accent">Американский орел</span>
        </div>

        <MarketOverview 
          title="Золото:"
          price="6,526.36 евро"
          change="+0.90%"
        />

        <div className="featured-coin">
          <div className="coin-image-section">
            <img 
              src={featuredCoin.image} 
              alt={featuredCoin.name}
              className="coin-image"
            />
            <button className="view-all-btn">
              <span className="text-accent">смотреть все</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="url(#paint0_linear)" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="10" y1="8" x2="6" y2="8">
                    <stop stopColor="#AF8A39"/>
                    <stop offset="0.413462" stopColor="#FFDE7D"/>
                    <stop offset="1" stopColor="#AF8A39"/>
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>

          <div className="coin-info">
            <h2 className="coin-title text-accent">{featuredCoin.name}</h2>
            
            <div className="coin-rating">
              <div className="stars">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M7.5 1L9.18 5.18L14 5.18L10.41 8.09L12.09 12.27L7.5 9.36L2.91 12.27L4.59 8.09L1 5.18L5.82 5.18L7.5 1Z" fill="#FFD700"/>
                  </svg>
                ))}
                <span className="rating-text">
                  <span className="text-primary">4,87 </span>
                  <span className="text-secondary">/ 5 (13)</span>
                </span>
              </div>
            </div>

            <p className="coin-description text-primary">{featuredCoin.description}</p>
            <button className="read-more text-accent">читать далее</button>
          </div>
        </div>

        <FilterBar />

        <div className="offers-section">
          {coinOffers.map(offer => (
            <CoinCard key={offer.id} offer={offer} />
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
};