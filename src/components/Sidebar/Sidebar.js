import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/logo.svg';
import './Sidebar.css';

const sidebarContent = [
  {
    ID: 'item-1',
    isActive: true,
    path: '/',
    icon: 'house',
    text: 'Dashboard',
  },
  {
    ID: 'item-2',
    isActive: false,
    path: '/pendientes',
    icon: 'inbox',
    text: 'Pendientes',
  },
  {
    ID: 'item-3',
    isActive: false,
    path: '/asignados',
    icon: 'user',
    text: 'Asignados',
  },
  {
    ID: 'item-4',
    isActive: false,
    path: '/cerrados',
    icon: 'check',
    text: 'Cerrados',
  },
];

const Sidebar = () => {
  const project = 'CoverPro';

  const [items, setItems] = useState(sidebarContent);
  const [link, setLink] = useState('');

  useEffect(() => {
    setItems((prevItems) => {
      const newItems = prevItems.map((item) => {
        if (item.ID === link) {
          return { ...item, isActive: true }; // Activate the selected item
        }

        return { ...item, isActive: false };
      });
      return newItems;
    });
  }, [link]);

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <header className="sidebar-header">
          <img src={Logo} alt="" />
          <h1 className="sidebar-title">{project}</h1>
        </header>
        <div className="sidebar-content">
          <h2 className="sidebar-subtitle">Inbox</h2>
          <nav className="sidebar-nav">
            <ul className="sidebar-list">
              {items.map((item) => (
                <SidebarItem
                  key={item.ID}
                  ID={item.ID}
                  path={item.path}
                  active={item.isActive}
                  icon={item.icon}
                  text={item.text}
                  setLink={setLink}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

/* eslint-disable */
const SidebarItem = ({ ID, path, active, icon, text, setLink }) => {
  /* eslint-enable */
  const iconClassName = `sidebar-icon fa-solid fa-${icon}`;

  const handleStatus = () => {
    setLink(ID);
  };

  return (
    <li className={`sidebar-item ${active ? 'active' : ''}`}>
      <Link to={path} onClick={handleStatus} className="sidebar-link">
        <i className={iconClassName} />
        <span className="sidebar-text">{text}</span>
      </Link>
    </li>
  );
};

SidebarItem.propTypes = {
  ID: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setLink: PropTypes.func.isRequired,
};

export default Sidebar;
