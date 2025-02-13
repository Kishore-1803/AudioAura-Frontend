import React from 'react';
import '../Homepage.css';
import logo from '../Icons/1w.png';
import ai from '../Icons/ai.png';
import equalizer from '../Icons/equalizer.png';
import layout from '../Icons/layout.png';
import interfac from '../Icons/interfac.png';


function Homepage({ onLoginClick }) {
  return (
    <div className="homepage">
      {/* Title Bar */}
      <header className="title-bar">
        <div className="logo-container">
          <img
            src={logo} // Replace with your logo path
            alt="AI Podcast Generator Logo"
            width={300}
          />
        </div>
        <div className="auth-options">
          <button className="login-button" onClick={onLoginClick}>
            Login / Sign Up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="homepage-content">
        <h2>Create Amazing Podcasts Effortlessly</h2>
        <section className="features">
          <h3>Features of Audio Aura</h3>
          <div className="features-grid">
            <div className="feature-card">
              <img src={ai} alt="Icon 1" className="feature-icon" /> 
              <h4>AI-powered podcast generation</h4>
              <p>Generate podcasts using advanced AI technology.</p>
            </div>
            <div className="feature-card">
              <img src={equalizer} alt="Icon 2" className="feature-icon" />
              <h4>High-quality audio output</h4>
              <p>Experience crystal clear audio quality.</p>
            </div>
            <div className="feature-card">
              <img src={layout} alt="Icon 3" className="feature-icon" />
              <h4>Customizable podcast templates</h4>
              <p>Choose from a variety of templates to suit your style.</p>
            </div>
            <div className="feature-card">
              <img src={interfac} alt="Icon 4" className="feature-icon" />
              <h4>Easy-to-use interface</h4>
              <p>Navigate and create with ease using our intuitive interface.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="homepage-footer">
        <div className="contact-info">
          <p>Contact Us: contact@aipodcast.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;