import React, { useState } from 'react';
import './Navbar.css';
import SocialMedia from './SocialMedia'; 
import NewsList from './NewsList';
import SecurityInfo from './SecurityInfo'; 
import Programs from './Programs'; 
import Faq from './Faq'; 
import InteractiveMap from './InteractiveMap'; 
import Partners from './Partners'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showComponent, setShowComponent] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      // Si le menu est ouvert, fermez les fenêtres ou sections ouvertes
      setShowComponent('');
    }
  };

  const handleMenuClick = (item) => {
    setShowComponent(item);
    setIsOpen(false); // Ferme le menu après sélection
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <a href="/" className="navbar-logo">
          <img src= '/logo.webp' alt="Logo" className="navbar-logo-img" />
        </a>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li><a href="#info-securite" onClick={() => handleMenuClick('News List')}>NewsList 🔔</a></li>
          <li><a href="#info-securite" onClick={() => handleMenuClick('Informations de Sécurité')}>Informations de Sécurité 🔔</a></li>
          <li><a href="#programmes" onClick={() => handleMenuClick('Programmes')}>Programmes 📅</a></li>
          <li><a href="#infos-pratiques" onClick={() => handleMenuClick('Informations Pratiques et FAQ')}>Informations Pratiques et FAQ ℹ️</a></li>
          <li><a href="#carte-interactive" onClick={() => handleMenuClick('Carte Interactive')}>Carte Interactive 🗺️</a></li>
          <li><a href="#reseaux-sociaux" onClick={() => handleMenuClick('Réseaux Sociaux')}>Réseaux Sociaux 🌐</a></li>
          <li><a href="#partenaires" onClick={() => handleMenuClick('Partenaires')}>Partenaires 🤝</a></li>
        </ul>
      </div>
      {showComponent === 'Informations de Sécurité' && (
        <div className="component-container">
          <SecurityInfo />
        </div>
      )}
      {showComponent === 'News List' && (
        <div className="component-container">
          <NewsList />
        </div>
      )}
      {showComponent === 'Programmes' && (
        <div className="component-container">
          <Programs />
        </div>
      )}
      {showComponent === 'Informations Pratiques et FAQ' && (
        <div className="component-container">
          <Faq />
        </div>
      )}
      {showComponent === 'Carte Interactive' && (
        <div className="component-container">
          <InteractiveMap />
        </div>
      )}
      {showComponent === 'Réseaux Sociaux' && (
        <div className="component-container">
          <SocialMedia />
        </div>
      )}
      {showComponent === 'Partenaires' && (
        <div className="component-container">
          <Partners />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
