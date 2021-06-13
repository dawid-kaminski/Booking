import React from 'react';
import './FeaturedRent.css';
import FeaturedRentItem from './FeaturedRentItem.js';
import { useSelector, useDispatch } from "react-redux";
import { getAllApartments } from "../ducks/ApartmentList.js"

function FeaturedRent() {

  const apartmentlistSlice = useSelector((state)=>state).apartmentlist

  return(
    <div className="featured__container">
      <div className="featured">
        <div className="featured__header">
          Featured listings to rent
        </div>
        <div className="featured__subheader">
          The most trendy accommodations available​
        </div>
        <div className="featured__apartments">
          <FeaturedRentItem />
          <FeaturedRentItem />
          <FeaturedRentItem />
          <FeaturedRentItem />
          <FeaturedRentItem />
          <FeaturedRentItem />
        </div>
      </div>
    </div>
  )
}

export default FeaturedRent;