import React, { useMemo } from 'react';
import './Footer.scss';
import data from './data/socials.json';

import { ReactComponent as YouTubeIcon } from './images/youtube.svg';
import { ReactComponent as GithubIcon } from './images/github.svg';
import { ReactComponent as InstagramIcon } from './images/instagram.svg';
import { ReactComponent as TwitterIcon } from './images/twitter.svg';
import { ReactComponent as FacebookIcon } from './images/facebook.svg';
import { ReactComponent as LinkedInIcon } from './images/linkedin.svg';


function renderIcon(site: string) {
	switch (site) {
		case 'linkedin': 
			return <LinkedInIcon />
		case 'facebook':
			return <FacebookIcon />
		case 'instagram':
			return <InstagramIcon />
		case 'twitter':
			return <TwitterIcon />
		case 'youtube':
			return <YouTubeIcon />
		case 'github':
			return <GithubIcon />
	}
}

function SocialIcon({ site, url } : SocialLink) {
	return (
		<a href={url} target="_blank" className="footer-social">
			{renderIcon(site)}
			<span className="social-name">{site}</span>
		</a>
	)
}

export default function Footer() {
	const socialLinks = useMemo(() => data, []);

	return (
		<div className="app-footer">
			<div className="copyright">@2024 by McCall Bliss</div>
			<div className="footer-socials">
				{socialLinks.filter(item => item.visible).map(item => <SocialIcon site={item.site} url={item.url} />)}
			</div>
		</div>
	);
}

export interface SocialLink {
    site: string;
    url: string;
}
