import React, { useState, useEffect } from 'react';
import './SecurityInfo.css'; // Assurez-vous que ce fichier CSS existe
import infoSecurityData from './data/SecurityInfo.json'; // Assurez-vous que le chemin est correct

const SecurityInfo = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Charger les alertes depuis le fichier JSON
    setAlerts(infoSecurityData);
  }, []);

  return (
    <div className="security-info-container">
      {alerts.map((alert) => (
        <div className="security-info-item" key={alert.id}>
          <p className="security-info-text">
            {alert.message}
            {alert.link && (
              <a href={alert.link} target="_blank" rel="noopener noreferrer" className="security-info-link">
                (Plus d'infos)
              </a>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SecurityInfo;
