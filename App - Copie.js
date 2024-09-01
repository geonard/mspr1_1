import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hamburger from './screens/Hamburger'; // Assure-toi que le chemin est correct
import Home from './screens/Home';
import Faq from './screens/Faq'; // Assure-toi que le chemin est correct


const menuItems = [
  {
    id: 'main',
    label: 'Main Menu',
    subItems: [
      { id: 'action1', label: 'Action 1', action: '/action1' },
      {
        id: 'settings',
        label: 'Settings',
        subItems: [
          { id: 'general', label: 'General Settings', action: '/settings/general' },
          { id: 'account', label: 'Account Settings', action: '/settings/account' },
        ],
      },
    ],
  },
  {
    id: 'faq',
    label: 'FAQ',
    action: '/faq', // Assure-toi que cette route est correctement configurée
  },
  { id: 'logout', label: 'Logout', action: '/logout' },
];

const App = () => {
  return (
    <Router>
      <div>
        <Hamburger items={menuItems} logoSrc="/screens/data/Lemmy.png" /> {/* Remplace le chemin du logo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          {/* Ajoute d'autres routes ici si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
