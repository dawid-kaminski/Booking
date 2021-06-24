import React from 'react';
import './FeaturedProperties.css';
import FeaturedPropertiesItem from './FeaturedPropertiesItem.js';
import { useSelector } from "react-redux";
import { loadMoreApartments } from "../ducks/ApartmentList.js"

function FeaturedProperties() {

  const ApartmentStore = useSelector((state)=>state.apartmentlist)
  console.log(ApartmentStore)

  const GetAllApartmentsRender = React.memo(({id, name, price, location, houseType, forRent, description, coverImg}) => {
    return <FeaturedPropertiesItem id={id} name={name} price={price} location={location} houseType={houseType} forRent={forRent} description={description} coverImg={coverImg} />  
  }, [])

  return(
    <div className="properties-container">
      <div className="properties">
        <div className="properties__header">
          Featured properties
        </div>
        <div className="properties__subheader">
          The most trendy listings on our website
        </div>
        <div className="properties__item">
          {
          ApartmentStore.list.slice(8, 10).map((apartment, index)=>
            {return <FeaturedPropertiesItem key={index} id={apartment.id} name={apartment.name} price={apartment.price} location={apartment.location} houseType={apartment.houseType} forRent={apartment.forRent} description={apartment.description} coverImg={apartment.coverImg} />})
          }
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties;