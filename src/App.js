import React from "react";
import "./App.css";
import PortfolioNavbar from "./components/NavBar";
import Projects from "./pages/Projects"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PortfolioNavbar />
        <Switch>
          <Route exact path="/">
            hello
          </Route>
          <Route exact path="/about">
            about
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/contact">
            contact
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
