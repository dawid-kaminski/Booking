import React from 'react';
import './Article.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Article() {
  return(
    <div className="article-container">
      <div className="article__spacing">
      </div>
      <div className="article-wrapper">
        <div className="article">
          <div className="article__price-unit">
            <div className="article__price">
              $ 50
            </div>
            <div className="article__length-of-stay">
              /night
            </div>
          </div>
          <div className="article__rating">
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
            <FontAwesomeIcon icon={faStar} color="#ffc662" />
          </div>
          <div className="article__name">
            Spacious family home with ocean view
          </div>
          <div className="article__read-more">
            discover more
            <div className="article__chevron-icon">
            <FontAwesomeIcon icon={faChevronRight} color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article;