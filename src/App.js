import React from "react";
import "./App.css";
import PortfolioNavbar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">
      <div className="intro">
        <h1 className="myName">Nathan Naylor</h1>
        <h2 className="title">Full Stack Web Developer</h2>
        <Button className="introButton bg-dark">
          <a href="#about" rel="noopener noreferrer">
            Take a Look
          </a>
        </Button>
      </div>
      <PortfolioNavbar />
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact" className="wrap">
        <Contact />
      </div>
    </div>
  );
}

export default App;
