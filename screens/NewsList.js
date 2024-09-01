import React, { useEffect } from 'react';
import './NewsList.css';
import dataNews from './data/News.json'; // Importez les données depuis le fichier JSON

const NewsList = () => {
  useEffect(() => {
    // Fonction pour afficher la notification
    const showNotification = (title, options) => {
      if (Notification.permission === "granted") {
        new Notification(title, options);
      }
    };

    // Demander la permission pour les notifications
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    // Afficher les notifications pour les informations urgentes
    dataNews.forEach(newsItem => {
      if (newsItem.priority === 'high') {
        showNotification(newsItem.title, {
          body: newsItem.description,
          icon: '/path/to/icon.png' // Optionnel: ajouter une icône pour la notification
        });
      }
    });
  }, []);

  // Fonction pour trier les actualités par priorité
  const sortedNews = dataNews.sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="news-container">
      {sortedNews.map((news) => (
        <div className="news-item" key={news.id}>
          <h2 className="news-title">
            {news.link ? (
              <a href={news.link} target="_blank" rel="noopener noreferrer">
                {news.title}
              </a>
            ) : (
              news.title
            )}
          </h2>
          <p className="news-description">{news.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
