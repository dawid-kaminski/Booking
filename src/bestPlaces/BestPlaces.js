import React from 'react';
import './BestPlaces.css';
import Mattapan from './mattapan/Mattapan.js'
import Philadelphia from './philadelphia/Philadelphia.js'
import Washington from './washington/Washington.js'
import WesleyHeights from './wesleyHeights/WesleyHeights.js'
import WestSide from './westSide/WestSide.js' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function BestPlaces() {
  return(
    <div className="best-container">
      <div className="best">
        <div className="best__header">
          Best places to visit
        </div>
        <div className="best__subheader">
          The most trendy cities and areas in the world
        </div>
        <div className="best__slide-left--button">
          <button className="slide-left">
            <FontAwesomeIcon icon={faChevronLeft} size="1x" color="#7f8696;" />
          </button>
        </div>
        <div className="best__offers">
          <WestSide />
          <Philadelphia />
          <Washington />
          <WesleyHeights />
        </div>
        <div className="best__slide-right--button">
          <button className="slide-right">
            <FontAwesomeIcon icon={faChevronRight} size="1x" color="#7f8696;" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BestPlaces;