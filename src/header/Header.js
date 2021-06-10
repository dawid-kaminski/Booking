import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faLock } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return(
    <div className="header">
      <div className="header__logo">
        <img src="https://mainwprentals.b-cdn.net/wp-content/uploads/2018/05/logo_transparent_2x.png" class="img-responsive retina_ready dense-image dense-ready" width="161" height="50" />
      </div>
      <div className="header__options">
        <div className="header__options-item">
          <div className="header__options-item-link">
            demos
          </div>
        </div>
        <div className="header__options-item">
          <div className="header__options-item-link">
            homes
          </div>
        </div>
        <div className="header__options-item">
          <div className="header__options-item-link">
            properties
          </div>
        </div>
        <div className="header__options-item">
          <div className="header__options-item-link">
            owners
          </div>
        </div>
        <div className="header__options-item">
          <div className="header__options-item-link">
            features
          </div>
        </div>
      </div>
      <div className="header__user-menu">
        <div className="header__user-menu-item login">
          <div className="header__icon lock">
            <FontAwesomeIcon icon={faLock} color="#fff" />
          </div>
          <div className="header__user-menu-login">
            login
          </div>
        </div>
        <div className="header__user-menu-item sign-up">
          <div className="header__icon plus">
            <FontAwesomeIcon icon={faPlus} color="#fff" />
          </div>
          <div className="header__user-menu-sing-up">
            sing Up
          </div>
        </div>
        <div className="header__button-placing">
          <div className="header__button">
            <button class="submit">
              submit property
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;