import React from 'react';
import './FeaturedProperties.css';
import FeaturedPropertiesItem from './FeaturedPropertiesItem.js';

function FeaturedProperties() {
  return(
    <div className="properties-container">
      <div className="properties">
        <div className="properties__header">
          Featured properties
        </div>
        <div className="properties__subheader">
          The most trendy listings on our website
        </div>
        <div className="properties__item">
          <FeaturedPropertiesItem />
          <FeaturedPropertiesItem />
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties;