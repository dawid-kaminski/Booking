import React from 'react';
import './Searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faCalendarAlt, faUser, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

function Searchbar() {
  return(
    <div className="searchbar-container">
      <div className="searchbar">
        <div className="searchbar__destination--input">
          <div className="searchbar__icon">
            <FontAwesomeIcon icon={faMapMarker} size="1x" color="#b881fc" />
          </div>
          <input type="text" placeholder="Where do you want to go?"/>
        </div>
        <div className="searchbar__check-in--input">
          <div className="searchbar__icon">
            <FontAwesomeIcon icon={faCalendarAlt} size="1x" color="#b881fc" />
          </div>
          <input type="text" placeholder="Check-In"/>
        </div>
        <div className="searchbar__check-out--input">
          <div className="searchbar__icon">
            <FontAwesomeIcon icon={faCalendarAlt} size="1x" color="#b881fc" />
          </div>
          <input type="text" placeholder="Check-Out"/>
        </div>
        <div className="searchbar__guests">
          <div className="searchbar__icon">
            <FontAwesomeIcon icon={faUser} size="1x" color="#b881fc" />
          </div>
          <input type="text" placeholder="Guests"/>
          <FontAwesomeIcon icon={faChevronCircleDown} size="1x" color="#8A8F9A" />
        </div>
        <div className="searchbar__search--button">
          <button className="search">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar;