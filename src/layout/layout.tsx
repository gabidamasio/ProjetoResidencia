// src/layout/Layout.tsx
import type { ReactNode } from 'react';
import Navbar from '../components/navbar';  // Importando a Navbar
import Footer from '../components/footer';  // Importando o Footer

type LayoutProps = {
  children: ReactNode; // O conteúdo da página será inserido aqui
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={containerStyle}>
      {/* Navbar - Apenas uma instância de Navbar */}
      <Navbar />

      {/* Renderiza o conteúdo da página (children) */}
      <main style={mainStyle}>
        {children}
      </main>

      {/* Footer - Apenas uma instância de Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

// Estilos para o Layout
const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  margin: 0,
  backgroundColor: '#e4d0f7',
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  padding: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem',
  lineHeight: '1.6',
};