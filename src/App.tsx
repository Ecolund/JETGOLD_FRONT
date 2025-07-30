import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Screen } from "./screens/Screen/Screen";
import { ScreenScreen } from "./screens/ScreenScreen/ScreenScreen";
import { DivWrapper } from "./screens/DivWrapper/DivWrapper";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Screen />} />
          <Route path="/main" element={<ScreenScreen />} />
          <Route path="/coin/:id" element={<DivWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};