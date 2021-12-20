import React from 'react';
import './App.scss';

import HeaderSection from './HeaderSection';
import HelloSection from './HelloSection';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

function App() {
	return (
		<div className="App">
			<HeaderSection/>
			<HelloSection/>
			<PortfolioSection/>
			<AboutSection/>
			<ContactSection/>
			<Footer/>
		</div>
	);
}

export default App;
