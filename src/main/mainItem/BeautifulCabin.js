import React from 'react';
import './BeautifulCabin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

function BeautifulCabin() {
  return(
    <div className="beautifulcabin__content-styling">
      <div className="beautifulcabin">
        <div className="beautifulcabin__value">
          <div className="beautifulcabin__price">
          <FontAwesomeIcon icon={faDollarSign} color="#fff" /> 64
          </div>
          <div className="beautifulcabin__length-of-stay">
            /per night
          </div>
        </div>
        <div className="beautifulcabin__name">
          Beautiful Cabin to rent
        </div>
        <span className="beautifulcabin__description">
          Cozy home in Summerlin only 1.5 miles to Red Rock Resort and Downtown Summerlin with ample shopping, dining and entertainment. Red Rock Canyon State Park is located less than 10 miles away to enjoy hiking and rock climbing. More shopping, dining and entertainment located in Tivoli Village and Boca Park which is 2.5 miles away.
        </span>
        <div className="beautifulcabin__button">
          <button className="view-more">view more</button>
        </div>
      </div>
    </div>
  )
}

export default BeautifulCabin;