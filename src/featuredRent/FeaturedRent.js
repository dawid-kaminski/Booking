import React from 'react';
import './FeaturedRent.css';
import FeaturedRentItem from './FeaturedRentItem.js';
import { useSelector } from "react-redux";
import { loadMoreApartments } from "../ducks/ApartmentList.js"

function FeaturedRent() {

  const ApartmentStore = useSelector((state)=>state.apartmentlist)
  console.log(ApartmentStore)

  const GetAllApartmentsRender = React.memo(({id, name, price, location, houseType, forRent, description, coverImg}) => {
    return <FeaturedRentItem id={id} name={name} price={price} location={location} houseType={houseType} forRent={forRent} description={description} coverImg={coverImg} />  
  }, [])

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
          {/* <FeaturedRentItem />
          <FeaturedRentItem />
          <FeaturedRentItem />
          <FeaturedRentItem />
          <FeaturedRentItem />
          <FeaturedRentItem /> */}
          {
          ApartmentStore.list.slice(0, 6).map((apartment, index)=>
          {return <FeaturedRentItem key={index} id={apartment.id} name={apartment.name} price={apartment.price} location={apartment.location} houseType={apartment.houseType} forRent={apartment.forRent} description={apartment.description} coverImg={apartment.coverImg} />})
        }
        </div>
      </div>
    </div>
  )
}

export default FeaturedRent;