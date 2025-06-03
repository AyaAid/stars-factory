import React from 'react';
import './style/Features.css';
import { FaGraduationCap, FaRocket, FaCertificate } from 'react-icons/fa';

function Features() {
  return (
    <section className="features-section">
      <h2 className="features-title">Your Journey with Stars Factory</h2>
      <p className="features-subtitle">Step into space. One mission at a time.</p>
      <div className="features-grid">
  <div className="feature-card learn">
    <div className="feature-sticker learn">
      <FaGraduationCap />
    </div>
    <FaGraduationCap className="feature-icon" />
    <h3 className="feature-heading">Learn</h3>
    <p className="feature-description">
      Dive into interactive modules—video, VR, and written content—built with space industry experts.
    </p>
  </div>
  <div className="feature-card train">
    <div className="feature-sticker train">
      <FaRocket />
    </div>
    <FaRocket className="feature-icon" />
    <h3 className="feature-heading">Train</h3>
    <p className="feature-description">
      Experience real astronaut challenges like microgravity, survival, and comms through immersive simulations.
    </p>
  </div>
  <div className="feature-card certify">
    <div className="feature-sticker certify">
      <FaCertificate />
    </div>
    <FaCertificate className="feature-icon" />
    <h3 className="feature-heading">Get Certified</h3>
    <p className="feature-description">
      Earn a blockchain-based NFT certificate recognized by our space industry partners.
    </p>
  </div>
</div>
    </section>
  );
}

export default Features;