import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./components/Game";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <Route exact path="/" component={Game} />
      </div>
    </Router>
  );
}

export default App;
