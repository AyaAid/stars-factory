import React, { useState } from 'react';
import './style/WaitListModal.css';
import { supabase } from '../supabaseClient';

function WaitListModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.from('waitlist').insert({ email });

    if (error) {
      console.error(error.message);
      setError('Something went wrong. Try again later.');
    } else {
      setSubmitted(true);
      setEmail('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="waitlist-overlay">
      <div className="waitlist-modal">
        <button className="waitlist-close" onClick={onClose}>×</button>
        <h2>Join the Waitlist</h2>
        <p>Be the first to train like an astronaut. Enter your email below.</p>

        {submitted ? (
          <p className="waitlist-success">You're now on the list 🚀</p>
        ) : (
          <form onSubmit={handleSubmit} className="waitlist-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Join</button>
            {error && <p className="waitlist-error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

export default WaitListModal;