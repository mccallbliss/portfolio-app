import React, { useState } from 'react';
import './PortfolioItem.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PortfolioItem({item} : PortfolioItemProps) {
  	const [isInfoVisible, setIsInfoVisible] = useState(false);

	return (
		<div className="portfolio-item"
			key={item.id}
		>
			<a href={item.url} target="_blank" rel="noopener noreferrer">
				<LazyLoadImage src={`/images/${item.id}.png`}
					className={'portfolio-img'}
					alt={item.title}
					effect="blur"
				/>
			</a>
			<div className="portfolio-item-about">
				<div className="portfolio-item-title">{item.title}</div>
				<div className="portfolio-item-created">Created {item.created}</div>
				<div className="portfolio-item-description">{item.description}</div>  
			</div>
		</div>
	);
}

export interface PortfolioItemObject {
	title: string;
	created: string;
	description: string;
	id: string;
	category: string[];
	url?: string;
}

interface PortfolioItemProps {
	item: PortfolioItemObject;
}