import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Navigation';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Navigation/>
        <div className="section-title">McCall Bliss</div>
      </header>
      <AboutSection/>
      <PortfolioSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
