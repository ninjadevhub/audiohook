import React from 'react';
import { Link } from "react-router-dom";

// Assets
import './Style.scss'
const logoImg = '/images/logo.svg';
const avatarImg = '/images/avatar.png';
const dropdownArrowImg = '/images/dropdown-arrow.svg';
const notificationImg = '/images/notification.svg';
const logoutImg = '/images/logout.svg';

// TODO: get from BE
const name = 'Kuhn Rocio'
const email = 'kuhn.rocio@yahoo.com'

const Header = () => {
  return (
    <div className="header">
      <div className="header-right">
        <Link to="/" className="logo">
          <img src={logoImg} />
        </Link>
        <div className="header-logoText">
          ACME Corp Audio Dash
        </div>
      </div>
      <div className="header-left">
        <div className="user">
          <div className="user-info">
            <div className="user-name">
              {name}
            </div>
            <div className="user-email">
              {email}
            </div>
          </div>
          <div className="user-avatar">
            <img className="user-avatarImg" src={avatarImg} />
            <img className="user-dropdownIcon" src={dropdownArrowImg} />
          </div>
          <div className="user-separator" />
          <div className="user-notification">
            <img src={notificationImg} />
          </div>
          <div className="user-logout">
            <img src={logoutImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header