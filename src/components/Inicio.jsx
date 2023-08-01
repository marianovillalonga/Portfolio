import React from 'react';

const Inicio = () => {
  return (
    <section style={styles.container} id="inicio">
      <div style={styles.content}>
        <h1 style={styles.title}>¡Bienvenido a mi Portfolio!</h1>
        <p style={styles.description}>Aquí puedes encontrar información sobre mí y mis proyectos.</p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '100px 0',
    textAlign: 'center',
    background: 'linear-gradient(45deg, #3498db, #8e44ad)',
    color: '#fff',
  },
  content: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    fontSize: '20px',
    lineHeight: '1.6',
  },
};

export default Inicio;
