import React from 'react';
import './Main.css';
import Header from '../header/Header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Main() {
  return(
    <div className="main__container">
      <Header />
      <div className="main__content-styling">
        <div className="main__button-container--left">
          <button className="slide-left">
            <FontAwesomeIcon icon={faChevronLeft} size="3x" color="#fff" />
          </button>
        </div>
        <div className="main">
          <div className="main__value">
            <div className="main__price">
            <FontAwesomeIcon icon={faDollarSign} color="#fff" /> 68
            </div>
            <div className="main__length-of-stay">
              /per night
            </div>
          </div>
          <div className="main__name">
            Family Friendly Condo
          </div>
          <span className="main__description">
            Located in the heart of Greenwich Village, This building is wonderfully situated on a quiet tree–lined street between West 4th Street and Bleecker Street, Close to all West Village eateries, shops and clubs, this building is just a short walk from Soho, Tribeca, Little Italy and Chinatown. The subway is only one block away. Newly renovated...
          </span>
          <div className="main__button">
            <button className="view-more">view more</button>
          </div>
        </div>
        <div className="main__button-container--right">
          <button className="slide-right">
            <FontAwesomeIcon icon={faChevronRight} size="3x" color="#fff" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main;