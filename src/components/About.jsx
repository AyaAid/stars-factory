import React from 'react';
import './style/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">Space Education. Without Limits.</h2>
        <p className="about-description">
          Stars Factory makes astronaut training accessible to everyone. Through immersive learning, cutting-edge tech, and a truly inclusive approach, you can learn, train, and get certified—no matter your location, background, or budget.
        </p>
        <div className="about-tags">
          <span>🚀 VR Training</span>
          <span>📜 NFT Certification</span>
          <span>🌐 Global & Inclusive</span>
        </div>
      </div>
    </section>
  );
}

export default About;