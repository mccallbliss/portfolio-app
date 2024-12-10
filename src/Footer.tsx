import React from 'react';
import './Footer.scss';
import data from './data/socials.json';

function SocialIcon({ site, url, icon} : SocialLink) {
	return (
		<a href={url} className="footer-social">
			<img src={icon} alt={site} />
			<span className="social-name">{site}</span>
		</a>
	)
}

export default function Footer() {
	return (
		<div className="app-footer">
			<div className="copyright">@2024 by McCall Bliss</div>
			<div className="footer-socials">
				{data.map(item => <SocialIcon site={item.site} url={item.url} icon={item.icon} />)}
			</div>
		</div>
	);
}

export interface SocialLink {
    site: string;
    url: string;
	icon: string;
}
