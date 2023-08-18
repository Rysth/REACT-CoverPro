import React from 'react';
import UserImage from '../../assets/images/user.png';
import './Leaderboard.css';

function Leaderboard() {
  return (
    <div className="leaderboard">
      <header className="leaderboard-header">
        <h3 className="leaderboard-title">Clasificación</h3>
        <i className="fa-solid fa-calendar" />
      </header>
      <div className="leaderboard-best">
        <h4 className="leaderboard-seller">Mejor Vendedor</h4>
        <div className="leaderboard-profile">
          <img className="leaderboard-user" src={UserImage} alt="Profile user" />
          <p className="leaderboard-text">John Palacios</p>
          <p className="leaderboard-text red">50,000</p>
        </div>
      </div>
      <div className="leaderboard-content">
        <ul className="leaderboard-list">
          <LeaderboardItem />
          <LeaderboardItem />
          <LeaderboardItem />
        </ul>
      </div>
    </div>
  );
}

function LeaderboardItem() {
  return (
    <li className="leaderboard-item">
      <img className="leaderboard-user item" src={UserImage} alt="Profile user" />
      <p className="leaderboard-text item">John Palacios</p>
      <p className="leaderboard-text item red">45,000</p>
    </li>
  );
}

export default Leaderboard;
