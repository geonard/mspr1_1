import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assurez-vous que le chemin est correct
import './index.css'; // Vous pouvez inclure des styles globaux ici si nécessaire

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
