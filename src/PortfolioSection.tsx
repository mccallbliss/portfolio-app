import React, {useEffect, useState} from 'react';
import './PortfolioSection.scss';
import PortfolioItem, {PortfolioItemObject} from './PortfolioItem';
import SectionTitle from './SectionTitle';

import data from './data/projects.json';

function renderCategories(categories: string[]) {
	return (
		<div className="portfolio-section-categories">
			{categories.map(category => <a href={`#${category}`} >{category}</a>)}
		</div>
	);
}

export default function PortfolioSection() {
	const [categories, setCategories] = useState<string[]>([]);

	useEffect(() => {
		var categoryItems: string[] = [];
		data.forEach(item => {
			for (var i = 0; i < item.category.length; i++) {
				if (categoryItems.indexOf(item.category[i]) === -1) {
					categoryItems.push(item.category[i]);
				}
			}
		});
		setCategories(categoryItems);
	}, []);

	return (
		<div className="portfolio-section section-component">
      		<SectionTitle title={'Work'}/>
			{categories && renderCategories(categories)}
			<div className="portfolio-section-projects">
				{data.map(project => <PortfolioItem item={project}/>)}
			</div>
		</div>
	);
}