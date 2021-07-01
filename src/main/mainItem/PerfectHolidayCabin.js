import React from 'react';
import './PerfectHolidayCabin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

function PerfectHolidayCabin() {
  return (
    <div className="perfectholidaycabin__content-styling">
      <div className="perfectholidaycabin">
        <div className="perfectholidaycabin__value">
          <div className="perfectholidaycabin__price">
            <FontAwesomeIcon icon={faDollarSign} color="#fff" /> 59
          </div>
          <div className="perfectholidaycabin__length-of-stay">/per night</div>
        </div>
        <div className="perfectholidaycabin__name">Perfect Holiday Cabin</div>
        <span className="perfectholidaycabin__description">
          Spectacular Condo In Summerlin! View of Spring Mountains and
          Charleston Peak!!! 1 Bedrooms, Private Bathroom and a Queen Size
          Vertical Wall Bed. Fireplace, Kitchen, Dishwasher and Microwave , Open
          And Spacious Floorplan! Great Summerlin Location!
        </span>
        <div className="perfectholidaycabin__button">
          <button className="view-more">view more</button>
        </div>
      </div>
    </div>
  );
}

export default PerfectHolidayCabin;
