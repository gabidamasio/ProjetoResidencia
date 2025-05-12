// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      © 2025 Todos os direitos reservados
    </footer>
  );
};

export default Footer;

// Estilos para o Footer
const footerStyle: React.CSSProperties = {
  backgroundColor: '#9b59b6',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  borderBottomLeftRadius: '12px',
  borderBottomRightRadius: '12px',
};
