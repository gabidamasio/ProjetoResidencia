// src/pages/about.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div style={contentStyle}>
      <h2 style={titleStyle}>Sobre o Projeto</h2>
      <p style={paragraphStyle}>
        Este projeto tem como objetivo <strong>aprender</strong>, <strong>praticar</strong> e{' '}
        <strong>fixar conhecimentos</strong> em tecnologias como <em>Vite</em> e <em>React</em>.
      </p>
    </div>
  );
};

export default About;

// 🔽 Estilos declarados após o componente
const contentStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  textAlign: 'center',
};

const titleStyle: React.CSSProperties = {
  color: '#8854d0',
  fontSize: '2rem',
  marginBottom: '1rem',
};

const paragraphStyle: React.CSSProperties = {
  color: '#333',
  fontSize: '1.2rem',
  lineHeight: '1.6',
};
