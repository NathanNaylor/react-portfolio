import React from "react";
import "./App.css";
import PortfolioNavbar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <img alt="Mountain Panorama" src="../Assets/Images/pano-mountains.jpg" width="100%"/>
      <PortfolioNavbar />
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
