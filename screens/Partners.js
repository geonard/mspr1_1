import React from 'react';
import partners from './data/Partners.json'; 
import './Partners.css';

const Partners = () => {
  return (
    <div style={{ position: 'absolute', top: '100px', left: '300px' }}>
      {partners.map((partner, index) => (
        <div key={index} className="partner">
          <a href={partner.website} target="_blank" rel="noopener noreferrer">
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
            <p>{partner.name}</p>
            <p>Catégorie : {partner.category}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Partners;
