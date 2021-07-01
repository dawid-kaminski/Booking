import React from 'react';
import './FeaturedPropertiesItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faStar,
  faMapMarker,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

function FeaturedPropertiesItem(props) {
  return (
    <div className="property__container">
      <div className="property">
        <div className="property__img">
          <img itemprop="image" src={props.coverImg} />
          <div className="property__price">
            <div className="property__price-unit">
              $ {props.price}
              <div className="property__time-period">/per night</div>
            </div>
          </div>
        </div>
        <div className="property__details">
          <div className="property__rating">
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
          </div>
          <div className="property__name">{props.name}</div>
          <div className="property__address-and-favourite">
            <div className="property__address-and-type">
              <div className="property__address">
                <div className="property__marker-icon">
                  <FontAwesomeIcon icon={faMapMarker} color="#5d6475" />
                </div>
                {props.location}
              </div>
              <div className="property__type">
                <div className="property__home-icon">
                  <FontAwesomeIcon icon={faHome} color="#5d6475" />
                </div>
                {props.houseType} / {props.forRent}
              </div>
            </div>
            <div className="property__add-to-favourite--button">
              <button className="add-to-favourite">
                <FontAwesomeIcon icon={faHeart} color="#ffffff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPropertiesItem;
