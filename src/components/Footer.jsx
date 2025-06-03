import React from 'react';
import './style/Footer.css';
import logo from '../assets/logo-transp.png'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Stars Factory Logo" className="footer-logo" />
        <p className="footer-text">© {new Date().getFullYear()} Stars Factory. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/company/stars-factory" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://discord.gg/vTEG6apndR" target="_blank" rel="noopener noreferrer">Discord</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;