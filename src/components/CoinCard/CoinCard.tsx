import React from "react";
import "./CoinCard.css";

interface CoinCardProps {
  offer: {
    id: string;
    seller: string;
    verified: string;
    deals: string;
    price: string;
    change: string;
    pricePerGram: string;
    volume: string;
    inStock: string;
    paymentMethods: string[];
    deliveryMethods: string[];
    lastUpdate: string;
    status: string;
  };
}

export const CoinCard: React.FC<CoinCardProps> = ({ offer }) => {
  const isPositive = offer.change.startsWith('+');
  
  return (
    <div className="coin-card">
      {/* Seller Info */}
      <div className="seller-section">
        <div className="seller-info">
          <div className="seller-header">
            <div className="seller-name-row">
              <div className="status-indicator online"></div>
              <span className="seller-name">{offer.seller}</span>
              <img src="/img/gold-2-2x.png" alt="Gold badge" className="gold-badge" />
            </div>
          </div>
          
          <div className="seller-stats">
            <span className="deals-label text-secondary">Сделок:</span>
            <span className="deals-count text-primary">{offer.deals}</span>
          </div>
        </div>
        
        <div className="verification-row">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="cert-icon">
            <path d="M6.75 9L8.25 10.5L11.25 7.5M9 2.25L10.4326 3.6536L12.375 3.15433L12.9138 5.08616L14.8457 5.625L14.3464 7.56744L15.75 9L14.3464 10.4326L14.8457 12.375L12.9138 12.9138L12.375 14.8457L10.4326 14.3464L9 15.75L7.56744 14.3464L5.625 14.8457L5.08616 12.9138L3.15433 12.375L3.6536 10.4326L2.25 9L3.6536 7.56744L3.15433 5.625L5.08616 5.08616L5.625 3.15433L7.56744 3.6536L9 2.25Z" 
                  stroke="url(#paint0_linear)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"/>
            <defs>
              <linearGradient id="paint0_linear" x1="9" y1="2.25" x2="9" y2="15.75">
                <stop stopColor="#AF8A39"/>
                <stop offset="0.413462" stopColor="#FFDE7D"/>
                <stop offset="1" stopColor="#AF8A39"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="verification-text text-primary">{offer.verified}</span>
          
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="timer-icon">
            <path d="M3.38666 5.25C2.6687 6.32257 2.25 7.61239 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25V4.5M9 9L6 6" 
                  stroke="#5A6060" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"/>
          </svg>
          <span className="timer-text text-primary">30 мин</span>
        </div>
      </div>
      
      <div className="card-divider"></div>
      
      {/* Price Section */}
      <div className="price-section">
        <div className="main-price text-primary">{offer.price}</div>
        <div className={`price-change ${isPositive ? 'text-success' : 'text-error'}`}>
          {offer.change}
        </div>
        <div className="price-per-gram">
          <span className="text-secondary">Грамм:</span>
          <span className="text-primary">{offer.pricePerGram}</span>
        </div>
      </div>
      
      <div className="info-row">
        <span className="text-secondary">Объём:</span>
        <span className="text-primary">{offer.volume}</span>
      </div>
      
      <div className="info-row">
        <span className="text-secondary">На месте:</span>
        <span className="text-primary">{offer.inStock}</span>
      </div>
      
      <div className="card-divider"></div>
      
      {/* Payment Methods */}
      <div className="methods-section">
        <div className="methods-header">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2.25 15.75H15.75M2.25 13.5H15.75M4.3675 2.25028C4.67872 2.52512 4.875 2.92714 4.875 3.375C4.875 4.20343 4.20343 4.875 3.375 4.875C2.92714 4.875 2.52512 4.67872 2.25028 4.3675M4.3675 2.25028C4.45608 2.25 4.55007 2.25 4.65 2.25H13.35C13.4499 2.25 13.5439 2.25 13.6325 2.25028M4.3675 2.25028C3.71139 2.25231 3.35171 2.26945 3.06901 2.41349C2.78677 2.5573 2.5573 2.78677 2.41349 3.06901C2.26945 3.35171 2.25231 3.71139 2.25028 4.3675" 
                  stroke="url(#paint0_linear)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"/>
          </svg>
          <span className="text-primary">Оплата</span>
        </div>
        
        <div className="payment-methods">
          <div className="payment-row">
            {offer.paymentMethods.slice(0, 2).map((method, index) => (
              <div key={index} className="payment-method">
                <div className="method-dot"></div>
                <span className="text-secondary">{method}</span>
              </div>
            ))}
          </div>
          <div className="payment-method">
            <div className="method-dot"></div>
            <span className="text-secondary">{offer.paymentMethods[2]}</span>
          </div>
        </div>
        
        <div className="card-divider"></div>
        
        <div className="methods-header">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M13.875 13.5C13.875 14.3284 13.2034 15 12.375 15C11.5466 15 10.875 14.3284 10.875 13.5M13.875 13.5C13.875 12.6716 13.2034 12 12.375 12C11.5466 12 10.875 12.6716 10.875 13.5M13.875 13.5H16.125M10.875 13.5H10.125M6.375 13.5C6.375 14.3284 5.70343 15 4.875 15C4.04657 15 3.375 14.3284 3.375 13.5M6.375 13.5C6.375 12.6716 5.70343 12 4.875 12C4.04657 12 3.375 12.6716 3.375 13.5M6.375 13.5H10.125M3.375 13.5C2.54657 13.5 1.875 12.8284 1.875 12V5.4C1.875 4.55992 1.875 4.13988 2.03849 3.81901C2.1823 3.53677 2.41177 3.3073 2.69401 3.16349C3.01488 3 3.43492 3 4.275 3H7.725C8.56508 3 8.98512 3 9.30599 3.16349C9.58823 3.3073 9.8177 3.53677 9.96151 3.81901C10.125 4.13988 10.125 4.55992 10.125 5.4V13.5M10.125 13.5V6H13.125L15.375 9M15.375 9V13.5M15.375 9H10.125" 
                  stroke="#00C3B6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"/>
          </svg>
          <span className="text-primary">Доставка</span>
        </div>
        
        <div className="delivery-methods">
          {offer.deliveryMethods.map((method, index) => (
            <div key={index} className="delivery-method">
              <div className="delivery-dot"></div>
              <span className="text-secondary">{method}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card-divider"></div>
      
      {/* Footer */}
      <div className="card-footer">
        <div className="last-update">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3.01037 4.66667C2.37218 5.62007 2 6.76657 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2V4M8 8L5.33333 5.33333" 
                  stroke="url(#paint0_linear)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-secondary">{offer.lastUpdate}</span>
        </div>
        
        <button className="favorite-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" 
                  stroke="#5A6060" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"/>
          </svg>
        </button>
        
        <button className="buy-btn btn-primary">
          Купить
        </button>
      </div>
    </div>
  );
};