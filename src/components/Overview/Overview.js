import React from 'react';
import UserImage from '../../assets/images/user.png';
import './Overview.css';

function Overview() {
  return (
    <div className="overview">
      <div className="overview-header">
        <p className="overview-title">Compañeros</p>
        <p className="overview-title">Conversaciones Abiertas</p>
        <p className="overview-title">Conversaciones Cerradas</p>
      </div>
      <div className="overview-content">
        <div className="overview-item gray">
          <div className="overview-profile">
            <img src={UserImage} alt="User number 1" className="overview-image" />
            <p className="overview-text">John Palacios</p>
          </div>
          <p className="overview-text">45</p>
          <p className="overview-text">30</p>
        </div>
        <div className="overview-item">
          <div className="overview-profile">
            <img src={UserImage} alt="User number 1" className="overview-image" />
            <p className="overview-text">John Palacios</p>
          </div>
          <p className="overview-text">34</p>
          <p className="overview-text">34</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
