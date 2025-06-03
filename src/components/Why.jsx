import React from 'react';
import './style/Why.css';

function Why() {
  return (
    <section className="why-section-story">
      <h2 className="why-title-story">Why Choose Stars Factory?</h2>

      <div className="why-slide inclusion">
        <div className="why-media inclusion" />
        <div className="why-text">
          <h3>Inclusion</h3>
          <p>
            No matter your background, gender, or abilities—space is for everyone. 
            At Stars Factory, inclusion isn't an option, it's the mission.
          </p>
        </div>
      </div>

      <div className="why-slide reverse accessibility">
        <div className="why-media accessibility" />
        <div className="why-text">
          <h3>Accessibility</h3>
          <p>
            Join the space journey from anywhere. 
            No financial or geographic barriers—our platform is built to be open to all.
          </p>
        </div>
      </div>

      <div className="why-slide immersion">
        <div className="why-media immersion" />
        <div className="why-text">
          <h3>Immersion</h3>
          <p>
            Train like a real astronaut through VR simulations, NFT certification, and a gamified learning experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Why;
