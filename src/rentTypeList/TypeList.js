import React from 'react';
import TypeListItem from './TypeListItem.js';
import './TypeList.css';
import SharedRoom from './../images/sharedRoom.jpg';
import Apartment from './../images/apartment.jpg';
import Cabin from './../images/cabin.jpg';
import Condos from './../images/condos.jpg';

function TypeList() {
  return (
    <div className="type-container">
      <div className="type">
        <div className="type__header">Best places to rent</div>
        <div className="type__subheader">
          How to travel on a budget around the world
        </div>
        <div className="type__list">
          <TypeListItem
            img={SharedRoom}
            attribute="great views"
            type="Shared room"
            listing="3 Listings"
          />
          <TypeListItem
            img={Apartment}
            attribute="best home"
            type="Apartment"
            listing="3 Listings"
          />
          <TypeListItem
            img={Cabin}
            attribute="best places"
            type="Cabin"
            listing="2 Listings"
          />
          <TypeListItem
            img={Condos}
            attribute="best places"
            type="Condos"
            listing="3 Listings"
          />
        </div>
      </div>
    </div>
  );
}

export default TypeList;
