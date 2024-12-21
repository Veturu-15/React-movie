import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleToggle = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div className="Header">
      <nav className="nav">
        <p className="logo">MovieDb</p>
        <div className={`nav-items ${menuOpen ? 'active' : ''}`}>
          <Link to="/React-movie"> <p className="nav-item">Popular</p></Link>
          <Link to="/top"> <p className="nav-item">Top Rated</p></Link>
          <Link to="/up"> <p className="nav-item">Upcoming</p></Link>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <button className="btn">Search</button>
        </div>
        <div className="menu-toggle" onClick={handleToggle}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
