// src/components/navbar.tsx
import React from 'react';

const Navbar: React.FC = () => (
  <header style={navbarStyle}>
    <h1 style={logoStyle}>Projeto React + Vite</h1>
    <nav>
      <a href="/" style={navLinkStyle}>Início</a>
      <a href="/about" style={navLinkStyle}>Sobre</a>
      <a href="/contact" style={navLinkStyle}>Contato</a>
    </nav>
  </header>
);

export default Navbar;

const navbarStyle: React.CSSProperties = {
  backgroundColor: '#9b59b6',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
};

const logoStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '1.5rem',
};

const navLinkStyle: React.CSSProperties = {
  marginLeft: '1rem',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'color 0.3s',
};
