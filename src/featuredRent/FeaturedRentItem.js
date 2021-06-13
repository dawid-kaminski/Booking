import React from 'react';
import './FeaturedRentItem.css';

function FeaturedRentItem(props) {

  return(
    <div className="item__container">
      <div className="item">
        {props.coverImg}
      </div>
    </div>
  )
}

export default FeaturedRentItem;