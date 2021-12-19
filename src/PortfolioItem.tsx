import React, { useState } from 'react';
import './PortfolioItem.css';

export default function PortfolioItem({item} : PortfolioItemProps) {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  return (
    <div className="portfolio-item-card"
      key={item.id}
      onMouseEnter={() => setIsInfoVisible(true)}
      onMouseLeave={() => setIsInfoVisible(false)}
      style={{ 
        backgroundImage: `url("./images/${item.id}.png")` 
      }}
    >
      <div className={`portfolio-item-overlay ${isInfoVisible}`}>
        <div className="portfolio-item-about">
          <div className="portfolio-item-title">{item.title}</div>
          <div className="portfolio-item-description">{item.description}</div>
          <div className="portfolio-item-created">Created on {item.created}</div>
          {item.url && <a href="{item.url}" target="_blank" rel="noopener noreferrer" className="btn">Explore</a>}
        </div>
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