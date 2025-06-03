import React from 'react';
import './style/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Learn Space <br/> Live Space</h1>
        <p className="hero-subtitle">
          An immersive learning journey to reach the stars with no limits, no borders.
        </p>
      </div>
      <div className="hero-bg"></div>
    </section>
  );
}

export default Hero;