import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="status-bar">
        <div className="status-left">
          <span className="time">9:41</span>
        </div>
        <div className="status-right">
          <div className="signal-bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="wifi-icon">📶</div>
          <div className="battery">🔋</div>
        </div>
      </div>
      
      <div className="header-content">
        <div className="user-avatar">
          <img src="/img/image.png" alt="User" className="avatar-image" />
          <div className="online-indicator"></div>
        </div>
        
        <div className="search-bar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="search-icon">
            <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
                  stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"/>
          </svg>
          <div className="voice-search">
            <img src="/img/group-6.png" alt="Voice search" />
          </div>
        </div>
        
        <div className="header-actions">
          <button className="action-btn chart-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 14.6C3 14.0399 3 13.7599 3.10899 13.546C3.20487 13.3578 3.35785 13.2049 3.54601 13.109C3.75992 13 4.03995 13 4.6 13H5.4C5.96005 13 6.24008 13 6.45399 13.109C6.64215 13.2049 6.79513 13.3578 6.89101 13.546C7 13.7599 7 14.0399 7 14.6V19.4C7 19.9601 7 20.2401 6.89101 20.454C6.79513 20.6422 6.64215 20.7951 6.45399 20.891C6.24008 21 5.96005 21 5.4 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V14.6Z" 
                    stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            </svg>
          </button>
          
          <button className="action-btn theme-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2.76648 9.73629C2.76648 13.8784 6.12434 17.2363 10.2665 17.2363C13.4224 17.2363 16.1231 15.287 17.2302 12.5267C16.3664 12.8738 15.4211 13.0696 14.4331 13.0696C10.291 13.0696 6.93315 9.71169 6.93315 5.56956C6.93315 4.58619 7.12592 3.63553 7.47 2.775C4.71292 3.8836 2.76648 6.58264 2.76648 9.73629Z" 
                    stroke="url(#paint0_linear)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              <defs>
                <linearGradient id="paint0_linear" x1="9.99834" y1="2.775" x2="9.99834" y2="17.2363">
                  <stop stopColor="#AF8A39"/>
                  <stop offset="0.413462" stopColor="#FFDE7D"/>
                  <stop offset="1" stopColor="#AF8A39"/>
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};