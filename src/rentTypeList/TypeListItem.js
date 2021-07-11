import React from 'react';
import './TypeListItem.css';

function TypeListItem(props) {
  return (
    <div className="type-item-container">
      <div className="type-item">
        <div className="type-item__attribute">{props.attribute}</div>
        <img src={props.img} height="365px" width="287.5px" alt="" />
        <div className="type-item__type">{props.type}</div>
        <div className="type-item__listing">{props.listing}</div>
      </div>
    </div>
  );
}

export default TypeListItem;
