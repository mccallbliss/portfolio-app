import React from 'react';
import './PortfolioSection.css';
import PortfolioItem, {PortfolioItemObject} from './PortfolioItem';
import SectionTitle from './SectionTitle';

import data from './data/projects.json';

function renderCategories(data: PortfolioItemObject[]) {
	var categories: string[] = [];
	data.forEach(item => {
		for (var i = 0; i < item.category.length; i++) {
			if (categories.indexOf(item.category[i]) === -1) {
				categories.push(item.category[i]);
			}
		}
	});
	return (
		<div className="portfolio-section-categories">
			{categories.map(category => <a href={`#${category}`} >{category}</a>)}
		</div>
	);
}

export default function PortfolioSection() {
	return (
		<div className="portfolio-section section-component">
      		<SectionTitle title={'Work'}/>
			{renderCategories(data)}
			<div className="portfolio-section-projects">
				{data.map(project => <PortfolioItem item={project}/>)}
			</div>
		</div>
	);
}