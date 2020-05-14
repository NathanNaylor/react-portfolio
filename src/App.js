import React from "react";
import "./App.css";
import PortfolioNavbar from "./components/NavBar";
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
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
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
