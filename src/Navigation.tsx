import React from 'react';
import './Navigation.css';
import NavigationItem from './NavigationItem';

export default function Navigation() {
	const navItems = ['home', 'about', 'projects', 'contact'];

	return (
		<ul className="menu-nav">
			{navItems.map(item => <NavigationItem item={item} />)}
	  	</ul>
	);
}