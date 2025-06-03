import React, { useState, useEffect } from 'react';
import './style/CookieConsent.css';

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setTimeout(() => setVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
    window.gtag && window.gtag('config', 'G-7GJKZSDP90');
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent">
      <p>
        We use cookies to analyze traffic and enhance your experience.{' '}
      </p>
      <div className="cookie-buttons">
        <button className="accept-btn" onClick={acceptCookies}>Accept</button>
        <button className="decline-btn" onClick={declineCookies}>Decline</button>
      </div>
    </div>
  );
}

export default CookieConsent;