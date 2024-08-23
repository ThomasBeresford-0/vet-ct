import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container-cropped">
        <img src="/assets/vetct-logo.png" alt="VetCT Logo" className="logo" />
      </div>
    </header>
  );
}

export default Header;
