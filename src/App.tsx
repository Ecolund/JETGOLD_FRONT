import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CoinsMain } from "./screens/CoinsMain/CoinsMain";
import { CoinsList } from "./screens/CoinsList/CoinsList";
import { CoinDetails } from "./screens/CoinDetails/CoinDetails";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<CoinsMain />} />
          <Route path="/coins" element={<CoinsList />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
        </Routes>
      </div>
    </Router>
  );
};