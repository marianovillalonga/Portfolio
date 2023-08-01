import React from 'react';
import imagen from '../../public/perfil.jpg';

const SobreMi = () => {
  return (
    <section style={styles.container} id="sobre-mi">
      <div style={styles.content}>
        <h2 style={styles.title}>Sobre Mí</h2>
        <div style={styles.aboutMe}>
            <img src={imagen} alt="Foto de Perfil" style={styles.profileImage} />
            <p style={styles.description}>
                ¡Hola! Soy [Tu Nombre], un apasionado desarrollador web con experiencia en React y otras tecnologías.
                Aquí puedes describir tus habilidades, intereses, experiencia laboral, proyectos destacados, etc.
            </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '100px 0',
    textAlign: 'center',
    background: '#f9f9f9',
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
};

export default SobreMi;
