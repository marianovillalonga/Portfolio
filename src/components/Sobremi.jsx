import React, { useState } from 'react';
import imagen from '../img/perfil.jpg';
import cvPDF from '../img/MarianoVillalonga.pdf';
import Skill from './Skill';

const SobreMi = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <section style={styles.container} id="sobre-mi">
      <div style={styles.content}>
        <h2 style={styles.title}>Sobre Mí</h2>
        <div style={styles.aboutMe}>
          <img src={imagen} alt="Foto de Perfil" style={styles.profileImage} />
          <p style={styles.description}>
            ¡Hola! Soy Mariano Villalonga, un apasionado desarrollador fullstack de Argentina!.
            <br />
            <br />
            Me encanta aprender nuevas tecnologías y aplicarlas en mis proyectos. Actualmente estoy
            trabajando en Cobromix y tutor en CoderHouse.
          </p>
        </div>
        <div style={styles.cvButtonContainer}>
          <a
            href={cvPDF}
            download="CV_Mariano_Villalonga.pdf"
            style={{
              ...styles.cvButton,
              ...(hover ? styles.cvButtonHover : {}),
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};
const styles = {
  container: {
    padding: '100px 0',
    textAlign: 'center',
    background: '#f2f2f2',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    color: '#333',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  aboutMe: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '20px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    textAlign: 'left',
  },
  cvButtonContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },

  cvButton: {
    display: 'inline-block',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
    maxWidth: '200px',
    margin: '0 auto',
  },

  cvButtonHover: {
    backgroundColor: '#0056b3',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
  },
};

export default SobreMi;
