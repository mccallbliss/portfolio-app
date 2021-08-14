import React from 'react';
import './Footer.css';
import data from './data/socials.json';

export default function Footer() {
	return (
		<div className="app-footer">
			<div className="footer-socials">
				{data.map(item => <a href={item.url} className="footer-social">{item.site}</a>)}
			</div>
		</div>
	);
}

export interface SocialLink {
    title: string;
}
