import React from 'react';
import './SocialMedia.css'; // Assurez-vous d'inclure le CSS correspondant

const SocialMedia = () => {
  return (
    <div className="social-media">
      <h2>Suivez-nous sur les réseaux sociaux</h2>
      <ul className="social-media-list">
        <li><a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-media-link">
          <i className="fab fa-facebook-f"></i> Facebook
        </a></li>
        <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-media-link">
          <i className="fab fa-twitter"></i> Twitter
        </a></li>
        <li><a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-media-link">
          <i className="fab fa-instagram"></i> Instagram
        </a></li>
        <li><a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer" className="social-media-link">
          <i className="fab fa-youtube"></i> YouTube
        </a></li>
        <li><a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="social-media-link">
          <i className="fab fa-linkedin-in"></i> LinkedIn
        </a></li>
        <li><a href="https://www.snapchat.com/add/yourusername" target="_blank" rel="noopener noreferrer" className="social-media-link">
          <i className="fab fa-snapchat-ghost"></i> Snapchat
        </a></li>
      </ul>
    </div>
  );
};

export default SocialMedia;
