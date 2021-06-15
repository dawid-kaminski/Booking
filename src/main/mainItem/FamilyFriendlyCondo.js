import React from 'react';
import './FamilyFriendlyCondo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

function FamilyFriendlyCondo() {
  return(
    <div className="familyfriendlycondo__content-styling">
      <div className="familyfriendlycondo">
        <div className="familyfriendlycondo__value">
          <div className="familyfriendlycondo__price">
          <FontAwesomeIcon icon={faDollarSign} color="#fff" /> 68
          </div>
          <div className="familyfriendlycondo__length-of-stay">
            /per night
          </div>
        </div>
        <div className="familyfriendlycondo__name">
          Family Friendly Condo
        </div>
        <span className="familyfriendlycondo__description">
          Located in the heart of Greenwich Village, This building is wonderfully situated on a quiet tree–lined street between West 4th Street and Bleecker Street, Close to all West Village eateries, shops and clubs, this building is just a short walk from Soho, Tribeca, Little Italy and Chinatown. The subway is only one block away. Newly renovated...
        </span>
        <div className="familyfriendlycondo__button">
          <button className="view-more">view more</button>
        </div>
      </div>
    </div>
  )
}

export default FamilyFriendlyCondo;