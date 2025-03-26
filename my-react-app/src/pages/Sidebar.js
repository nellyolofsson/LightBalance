import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Kategorier</h3>
      <ul>
        <li><Link to="/">Hem</Link></li> {/* Endast länk till Hem */}
      </ul>
    </div>
  );
};

export default Sidebar;
