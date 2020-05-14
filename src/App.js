import React from "react";
import "./App.css";
import PortfolioNavbar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PortfolioNavbar />
        <Switch>
          <Route exact path="/">
          <About />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
