import React from 'react';
import './style/JoinDiscord.css';
import { FaDiscord } from 'react-icons/fa';

function JoinDiscord() {
  return (
    <section className="discord-section">
      <div className="discord-content">
        <div className="discord-box">
          <h2 className="discord-title">Join the Stars Factory Community</h2>
          <p className="discord-subtitle">
            Ask questions, share your journey, join missions and meet future astronauts like you. Our universe is better together.
          </p>
          <a
            href="https://discord.gg/vTEG6apndR"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-button"
          >
            <FaDiscord className="discord-icon" /> Join us on Discord
          </a>
        </div>
      </div>
    </section>
  );
}

export default JoinDiscord;