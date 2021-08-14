import React from 'react';
import './NavigationItem.css';

export default function NavigationItem({item}: NavigationItemProps) {
	return (
	  	<li className="nav-item">
	  		<a className="nav-item-link" href={`#${item}`}>
	  			<span>{item}</span>
  			</a>
  		</li>
  	);
}

interface NavigationItemProps {
    item: string;
}