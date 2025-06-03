import React, { useState } from 'react';
import './style/Hero.css';
import WaitListModal from './WaitListModal';

function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Learn Space <br/> Live Space</h1>
        <p className="hero-subtitle">
          An immersive learning journey to reach the stars with no limits, no borders.
        </p>
        <div className="hero-cta">
          <button className="hero-button" onClick={() => setShowModal(true)}>
            Join the Journey
          </button>
          <a
            href="https://discord.gg/vTEG6apndR"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-discord-link"
          >
            Or join our Discord
          </a>
        </div>
      </div>
      <div className="hero-bg"></div>
      {showModal && (
  <WaitListModal isOpen={showModal} onClose={() => setShowModal(false)} />
)}
    </section>
  );
}

export default Hero;