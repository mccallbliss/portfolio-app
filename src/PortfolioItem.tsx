import React from 'react';
import './PortfolioItem.css';

export default function PortfolioItem({item} : PortfolioItemProps) {
  return (
    <div className="portfolio-item">
      <img className="portfolio-item-img" src={`images/${item.id}`} />
      <div className="portfolio-item-about">
        <div className="portfolio-item-title">{item.title}</div>
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
}

interface PortfolioItemProps {
    item: PortfolioItemObject;
}