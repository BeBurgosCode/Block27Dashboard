

// Sidebar.js

import React, { useState } from 'react';


const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside className="sidebar">
      <div className="header">
        <h1>The King's Restaurant</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li className="dropdown" onClick={toggleDropdown}>
            Revenue
            <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              <li>Monthly</li>
              <li>Yearly</li>
             
            </ul>
          </li>
          <li>Contact</li>
       
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
