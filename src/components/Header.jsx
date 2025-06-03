import React from 'react';
import './style/Header.css';
import logo from '../assets/logo-transp.png'; 

function Header() {
  return (
    <header className="header">
  <div className="header-wrapper">
    <div className="lang-switch-placeholder" />
    <div className="header-centered-logo">
      <img src={logo} alt="Stars Factory Logo" className="logo" />
    </div>
  </div>
</header>
  );
}

export default Header;