import React, { useState } from 'react';
import './Main.css';
import Header from '../header/Header.js';
import FamilyFriendlyCondo from './mainItem/FamilyFriendlyCondo.js';
import PerfectHolidayCabin from './mainItem/PerfectHolidayCabin.js';
import BeautifulCabin from './mainItem/BeautifulCabin.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

function Main() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickButtonLeft = () => {
    if (activeIndex === 0) {
      setActiveIndex(2);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const onClickButtonRight = () => {
    if (activeIndex === 2) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="main__container">
      <Header />
      <div className="main__button-container--left">
        <button className="slide-left" onClick={onClickButtonLeft}>
          <FontAwesomeIcon icon={faChevronLeft} size="3x" color="#fff" />
        </button>
      </div>
      {activeIndex === 0 ? <FamilyFriendlyCondo /> : null}
      {activeIndex === 1 ? <PerfectHolidayCabin /> : null}
      {activeIndex === 2 ? <BeautifulCabin /> : null}
      <div className="main__button-container--right">
        <button className="slide-right" onClick={onClickButtonRight}>
          <FontAwesomeIcon icon={faChevronRight} size="3x" color="#fff" />
        </button>
      </div>
    </div>
  );
}

export default Main;
