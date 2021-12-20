import React from 'react';
import './Footer.scss';
import data from './data/socials.json';

import FacebookIcon from './images/facebook.svg';
import LinkedInIcon from './images/youtube.svg';
import InstagramIcon from './images/instagram.svg';
import TwitterIcon from './images/twitter.svg';

function renderIcon({site, url}: SocialLink) {
	switch (site) {
		case 'linkedin': 
			return <img src={LinkedInIcon} alt="LinkedIn" />
		case 'facebook':
			return <img src={FacebookIcon} alt="Facebook" />
		case 'instagram':
			return <img src={InstagramIcon} alt="Instagram" />
		case 'twitter':
			return <img src={TwitterIcon} alt="Twitter" />
	}
}

export default function Footer() {
	return (
		<div className="app-footer">
			<div className="copyright">
				@2021 by McCall Bliss
			</div>
			<div className="footer-socials">
				{data.map(item => {
					return (
						<a href={item.url} className="footer-social">
							{renderIcon(item)}
							<span className="social-name">{item.site}</span>
						</a>
					);
				})}
			</div>
		</div>
	);
}

export interface SocialLink {
    site: string;
    url: string;
}
