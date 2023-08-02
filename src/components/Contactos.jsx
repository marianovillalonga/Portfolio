import React, { useState } from 'react';

const Contacto = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section style={styles.container} id="contacto">
      <div style={styles.content}>
        <h2 style={styles.title}>Contacto</h2>
        <p style={styles.description}>¡Si deseas ponerte en contacto conmigo, no dudes en enviar un mensaje!</p>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="nombre">Nombre:</label>
            <input style={styles.input} type="text" id="nombre" name="nombre" required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email:</label>
            <input style={styles.input} type="email" id="email" name="email" required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="mensaje">Mensaje:</label>
            <textarea style={styles.textarea} id="mensaje" name="mensaje" rows="4" required />
          </div>
          <button
            style={{ ...styles.submitButton, ...(hovered && styles.submitButtonHovered) }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            type="submit"
          >
            Enviar mensaje
          </button>
        </form>
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
    maxWidth: '400px',
    margin: '0 auto',
    color: '#fff',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  description: {
    fontSize: '20px',
    marginBottom: '40px',
  },
  form: {
    textAlign: 'left',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    resize: 'vertical',
  },
  submitButton: {
    display: 'block',
    padding: '10px 20px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#3498db',
    backgroundColor: '#3498db',
    transition: 'background-color 0.3s ease',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  submitButtonHovered: {
    backgroundColor: '#2980b9',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
  },
};

export default Contacto;
