import React from "react";
import Game from "./components/Game";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
      <div style={{ textAlign: "center" }}>
        <Routes>
          <Route exact path="/" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
