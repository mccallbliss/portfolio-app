import React, {useState} from 'react';
import './HeaderSection.scss';

export interface NavItemProps {
	item: string;
	selected: string;
	handleOnClick: (item: string) => void;
	link?: string;
}

function NavItem({
	item,
	selected = '',
	handleOnClick,
	link,
} : NavItemProps) {
	if (link !== '') {
		link = item.toLowerCase();
	}
	return (
		<a className={`nav-item-link ${selected === item ? 'selected' : ''}`} onClick={() => handleOnClick(item)} href={`#${link}`}>
			{item}
		</a>
	)
}

export default function HeaderSection() {
	const [selected, setSelected] = useState('');
	const navItems = ['About', 'Projects', 'Contact'];

	const handleOnClick = (item: string) => setSelected(item);

	return (
		<div className="header-section">
			<header className="app-header">
				<NavItem
					item='McCall Bliss' 
					selected={selected}
					handleOnClick={() => setSelected('McCall Bliss')}
					link={''}
				/>
				<ul className="menu-nav">
					{navItems.map(item => <NavItem item={item} selected={selected} handleOnClick={handleOnClick} />)}
				</ul>
				<NavItem item={'Resume'} selected={selected} handleOnClick={() => window.open('/assets/resume-updated.pdf', '_blank')} />
			</header>
	  </div>
	);
}