import React, {useState} from 'react';
import './HeaderSection.scss';

export default function HeaderSection() {
	const [selected, setSelected] = useState('');
	const navItems = ['About', 'Projects', 'Contact'];

	function renderNavItem(item: string, link?: string) {
		return (
			<li className="nav-item">
				{renderNavLink(item, link)}
			</li>
		);
	}

	function renderNavLink(item: string, link?: string) {
		if (link !== '') {
			link = item.toLowerCase();
		}
		return (
			<a className={`nav-item-link ${selected === item ? 'selected' : ''}`} onClick={() => setSelected(item)} href={`#${link}`}>
				{item}
			</a>
		);
	}

	return (
		<div className="header-section">
			<header className="app-header">
				{renderNavLink('McCall Bliss', '')}
				<ul className="menu-nav">
					{navItems.map(item => renderNavItem(item))}
				</ul>
				<div className="nav-item-link" onClick={() => window.open('/assets/resume-updated.pdf', '_blank')}>Resume</div>
			</header>
	  </div>
	);
}