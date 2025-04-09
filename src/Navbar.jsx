import React from 'react';

const Navbar = ({ onNavClick }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    onNavClick(id);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li className="navbar-item">
            <a 
              href="#" 
              onClick={(e) => handleClick(e, 'home')} 
              className="navbar-button"
            >
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#" 
              onClick={(e) => handleClick(e, 'about')} 
              className="navbar-button"
            >
              About
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#" 
              onClick={(e) => handleClick(e, 'portfolio')} 
              className="navbar-button"
            >
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#" 
              onClick={(e) => handleClick(e, 'contact')} 
              className="navbar-button"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;