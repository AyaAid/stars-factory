import React, { useState } from 'react';
import './style/ContactForm.css';
import { supabase } from '../supabaseClient'; 

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const { name, email, message } = formData;

  if (!name || !email || !message) {
    setError('Please fill in all fields.');
    return;
  }

  const { error } = await supabase.from('contact_message').insert([
    { name, email, message }
  ]);

  if (error) {
    console.error(error);
    setError("An error occurred. Please try again.");
    return;
  }

  setSubmitted(true);
  setFormData({ name: '', email: '', message: '' });
};

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact</h2>
      {submitted && <p className="contact-success">✅ Message sent successfully!</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
        ></textarea>
        {error && <p className="contact-error">⚠️ {error}</p>}
        <button type="submit" className="contact-button">Send</button>
      </form>
    </section>
  );
}

export default ContactForm;