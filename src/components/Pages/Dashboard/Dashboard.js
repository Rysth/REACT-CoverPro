import React from 'react';
import Header from '../../Header/Header';
import Card from '../../Card/Card';
import './Dashboard.css';

const cardArray = [
  {
    ID: 'card-1',
    icon: 'inbox',
    title: 'Pendiente',
    number: 350,
  },
  {
    ID: 'card-2',
    icon: 'user',
    title: 'Pendiente',
    number: 450,
  },
  {
    ID: 'card-3',
    icon: 'check',
    title: 'Cerrados',
    number: 3500,
  },
];

function Dashboard() {
  return (
    <div>
      <Header name="John" />
      <div className="card-container">
        {cardArray.map((card) => (
          <Card key={card.ID} icon={card.icon} title={card.title} number={card.number} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
