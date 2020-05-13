import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PortfolioNavbar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PortfolioNavbar />
        <Switch>
          <Route exact path="/">hello</Route>
          <Route exact path="/about"></Route>
          <Route exact path="/projects"></Route>
          <Route exact path="/contact"></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
