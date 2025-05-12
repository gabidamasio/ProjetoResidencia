// src/components/Section.tsx
import React from 'react';

const Section: React.FC = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Bem-vindo ao Projeto!</h2>
      <p style={styles.paragraph}>
        Este é um projeto para aprender, praticar e fixar conhecimentos sobre React e Vite.
      </p>
    </section>
  );
};

// Estilos para a Section (evitar conflitos de estilo)
const styles = {
  section: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adiciona sombra suave
    width: '80%', // Limita a largura para não ocupar toda a tela
    margin: '0 auto', // Centraliza o conteúdo
  },
  title: {
    color: '#8854d0',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  paragraph: {
    color: '#333',
    fontSize: '1.2rem',
  },
};

export default Section;


