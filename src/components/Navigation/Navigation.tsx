import React from "react";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav className="bottom-navigation">
      <div className="nav-container">
        <div className="nav-highlight"></div>
        
        <div className="nav-items">
          <button className="nav-item active">
            <div className="nav-icon">
              <img src="/img/group-14-2x.png" alt="Home" />
            </div>
            <span className="nav-label">Главная</span>
          </button>
          
          <button className="nav-item">
            <div className="nav-icon">
              <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M4.67499 14H9.92499L10.8 19H3.79999L4.67499 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.175 5H15.425L16.3 10H9.29999L10.175 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.675 14H20.925L21.8 19H14.8L15.675 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="nav-label">Слитки</span>
          </button>
          
          <button className="nav-item">
            <div className="nav-icon">
              <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M13.6 3H8.79998C7.67987 3 7.11982 3 6.69199 3.21799C6.31567 3.40973 6.00971 3.71569 5.81796 4.09202C5.59998 4.51984 5.59998 5.0799 5.59998 6.2V17.8C5.59998 18.9201 5.59998 19.4802 5.81796 19.908C6.00971 20.2843 6.31567 20.5903 6.69199 20.782C7.11982 21 7.67987 21 8.79998 21H12.6M13.6 3L19.6 9M13.6 3V7.4C13.6 7.96005 13.6 8.24008 13.709 8.45399C13.8048 8.64215 13.9578 8.79513 14.146 8.89101C14.3599 9 14.6399 9 15.2 9H19.6M19.6 9V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="nav-label">Ордера</span>
          </button>
          
          <button className="nav-item">
            <div className="nav-icon">
              <img src="/img/frame.svg" alt="Announcements" />
            </div>
            <span className="nav-label">Объявления</span>
          </button>
          
          <button className="nav-item">
            <div className="nav-icon">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M6.73437 1.96875C8.36534 1.96875 9.6875 4.61307 9.6875 7.875M6.73437 1.96875C5.10341 1.96875 3.78125 4.61307 3.78125 7.875C3.78125 11.1369 5.10341 13.7812 6.73437 13.7812M6.73437 1.96875H10.3437C11.7935 1.96875 12.9687 4.61307 12.9687 7.875M9.6875 7.875C9.6875 11.1369 8.36534 13.7812 6.73437 13.7812M9.6875 7.875H12.9687M6.73437 13.7812H10.3437C11.7935 13.7812 12.9687 11.1369 12.9687 7.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9"/>
              </svg>
            </div>
            <span className="nav-label">Мои монеты</span>
          </button>
        </div>
      </div>
    </nav>
  );
};