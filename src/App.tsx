import React from 'react';
import './App.css';

import Navigation from './Navigation';
import HelloSection from './HelloSection';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Navigation/>
        <HelloSection/>
      </header>
      <PortfolioSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
