// src/pages/contact.tsx
import React, { useState } from 'react';

type Member = {
  name: string;
  img: string;
};

const members: Member[] = [
  { name: 'Hyngrid', img: '/assets/hyngrid.jpeg' },
  { name: 'Diego', img: '/assets/diego.jpeg' },
  { name: 'Maria Gabriela', img: '/assets/gabi.webp' },
  { name: 'Pamela', img: '/assets/pamela.jpg' },
];

const Contact: React.FC = () => {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Integrantes do Grupo</h2>
      <ul style={listStyle}>
        {members.map((member, index) => (
          <li key={index} style={listItemStyle}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelected(member);
              }}
              style={linkStyle}
            >
              {member.name}
            </a>
          </li>
        ))}
      </ul>

      {selected && (
        <div style={selectedMemberStyle}>
          <h3>{selected.name}</h3>
          <img
            src={selected.img}
            alt={selected.name}
            style={imageStyle}
          />
        </div>
      )}
    </div>
  );
};

export default Contact;

// Estilos para o componente Contact
const containerStyle: React.CSSProperties = {
  padding: '2rem',
  backgroundColor: '#e4d0f7', // lilás igual ao layout
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const headingStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  color: '#9b59b6',
  marginBottom: '1rem',
};

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const listItemStyle: React.CSSProperties = {
  marginBottom: '10px',
};

const linkStyle: React.CSSProperties = {
  cursor: 'pointer',
  textDecoration: 'underline',
  color: '#007bff',
  fontWeight: 'bold',
};

const selectedMemberStyle: React.CSSProperties = {
  marginTop: '20px',
  textAlign: 'center',
};

const imageStyle: React.CSSProperties = {
  width: '200px',
  borderRadius: '8px',
  marginTop: '10px',
};