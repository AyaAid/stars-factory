import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Scene3D from './components/Scene3D';
import About from './components/About';
import Features from './components/Features';
import Why from './components/Why';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import JoinDiscord from './components/JoinDiscord';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Scene3D />
        <About />
        <Features />
        <Why />
        <JoinDiscord/>
        <ContactForm />
        <CookieConsent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
