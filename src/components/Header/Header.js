import React from 'react';
import PropTypes from 'prop-types';
import UserImage from '../../assets/images/user.png';
import './Header.css';

function Header({ name }) {
  return (
    <div className="header">
      <div className="header-user">
        <div className="header-profile">
          <img className="header-image" src={UserImage} alt="User" />
          <button type="button" className="header-button">
            <i className="fa-solid fa-chevron-down" />
          </button>
        </div>
      </div>
      <div className="header-content">
        <div className="header-title">
          Bienvenid@
          <span className="header-username">{name}</span>
        </div>
        <p className="header-text">Excelente día para laborar.</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
