import React from 'react';
import './GroupList.css'; // Assurez-vous que le chemin est correct
import dataGroup from './data/Group.json'; // Importez les données depuis le fichier JSON

const GroupList = () => {
  // Limitez le nombre d'éléments affichés à 3
  const visibleGroups = dataGroup.slice(0, 3);

  return (
    <div className="group-list">
      <div className="header-row">
        <div className="header-col">Image</div>
        <div className="header-col">Lien</div>
        <div className="header-col">Scène et Heure</div>
      </div>
      {visibleGroups.map((item) => (
        <div className="group-row" key={item.id}>
          <div className="group-col image-col">
            <img src={item.image} alt={item.name} className="group-image" />
          </div>
          <div className="group-col link-col">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          </div>
          <div className="group-col details-col">
            <div className="details-content">
              <div className="details-item">
                {item.scene ? `Scène: ${item.scene}` : 'Scène inconnue'}
              </div>
              <div className="details-item">
                {item.time ? `Heure: ${item.time}` : 'Heure inconnue'}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
