import React, { useEffect, useState } from 'react';
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
              {sidebarContent.map((item) => (
                <SidebarItem
                  key={item.ID}
                  path={item.path}
                  active={item.isActive}
                  icon={item.icon}
                  text={item.text}
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
const SidebarItem = ({ path, active, icon, text }) => {
  /* eslint-enable */
  const iconClassName = `sidebar-icon fa-solid fa-${icon}`;
  const [status, setStatus] = useState(active);
  const [itemClass, setItemClass] = useState('sidebar-item ');

  useEffect(() => {
    if (status) {
      setItemClass((actualClass) => {
        if (actualClass.includes('active')) {
          return actualClass.replace('active', 'active');
        }

        return actualClass.concat('active');
      });
    } else {
      setItemClass((actualClass) => actualClass.replace('active', ''));
    }
  }, [status]);

  const handleStatus = (e) => {
    e.preventDefault();
    setStatus((status) => !status);
  };

  return (
    <li className={itemClass}>
      <a href={path} onClick={handleStatus} className="sidebar-link">
        <i className={iconClassName} />
        <span className="sidebar-text">{text}</span>
      </a>
    </li>
  );
};

SidebarItem.propTypes = {
  path: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Sidebar;
