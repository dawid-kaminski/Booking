import React from 'react';
import './FeaturedRentItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faMapMarker, faHome } from '@fortawesome/free-solid-svg-icons'

function FeaturedRentItem(props) {

  return(
    <div className="item__container">
      <div className="item">
        <div className="item__img">
          <img itemprop="image" src="https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/blue-400x314.jpg" />
          <div className="item__price">
            <div className="item__price-unit">
              $ 45
              <div className="item__time-period">
                /per night
              </div>
            </div>
          </div>
        </div>
        <div className="item__details">
          <div className="item__rating">
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
          </div>
          <div className="item__name">
            Modern Villa with Pool
          </div>
          <div className="item__address-and-favourite">
            <div className="item__address-and-type">
              <div className="item__address">
                <div className="item__icon">
                  <FontAwesomeIcon icon={faMapMarker} color="#5d6475" />
                </div>
                East Side, New York
              </div>
              <div className="item__type">
                <div className="item__icon">
                  <FontAwesomeIcon icon={faHome} color="#5d6475" />
                </div>
                Villa / Entire home
              </div>
            </div>
            <div className="item__add-to-favourite--button">
              <button className="add-to-favourite">
                <FontAwesomeIcon icon={faHeart} color="#ffffff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedRentItem;