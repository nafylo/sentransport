import React from 'react';
import './Header.css';

function Header() {
  const dateAujourdhui = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="header">
      <h1 className="header-titre"> SénTransport</h1>
      <p className="header-sous-titre">Plateforme de gestion du transport urbain au Sénégal</p>
      <p className="header-date">{dateAujourdhui}</p>
    </header>
  );
}

export default Header;
