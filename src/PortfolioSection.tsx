import {useState, useMemo} from 'react';
import './PortfolioSection.scss';
import PortfolioItem from './PortfolioItem';
import SectionTitle from './SectionTitle';

import data from './data/projects.json';

type Category = "branding" | "development" | "design";

export interface PortfolioItemObject {
	title: string;
	created: string;
	description: string;
	id: string;
	category: string[];
	url?: string;
}

export default function PortfolioSection() {
	const projects = useMemo(() => data, []);

	const [categories, setCategories] = useState<string[]>([]);
	const [selectedCategory, setSelectedCategory] = useState('all');

	useMemo(() => {
		let categoryItems: string[] = [];
		projects.forEach(item => {
			for (var i = 0; i < item.category.length; i++) {
				if (categoryItems.indexOf(item.category[i]) === -1) {
					categoryItems.push(item.category[i]);
				}
			}
		});
		setCategories(categoryItems);
	}, [projects]);

	return (
		<div className="portfolio-section section-component">
      		<SectionTitle title={'Projects'}/>
			{categories && (
				<div className="portfolio-section-categories">
					<button className="portfolio-section-category button-boxed" data-selected={'all' === selectedCategory} role="button" onClick={() => setSelectedCategory('all')}>all</button>
					{categories.map(category => (
						<button className="portfolio-section-category button-boxed" data-selected={category === selectedCategory} role="button" onClick={() => setSelectedCategory(category as Category)}>{category}</button>
					))}
				</div>
			)}
			<div className="portfolio-section-projects">
				{projects.filter(project => selectedCategory === 'all' || project.category.includes(selectedCategory)).map(project => <PortfolioItem item={project}/>)}
			</div>
		</div>
	);
}