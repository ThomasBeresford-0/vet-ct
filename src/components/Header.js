import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="header-background-top"></div> {/* Thin burgundy bar at the top */}
      <div className="logo-container">
        <img src="/assets/vetct-logo.png" alt="VetCT Logo" className="logo" />
      </div>
      <div className="header-background-bottom"></div> {/* Thin burgundy bar below the logo */}
    </header>
  );
}

export default Header;
