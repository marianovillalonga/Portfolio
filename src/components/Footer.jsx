// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>
        © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#3498db', // Color del fondo del footer
    padding: '20px 0',
    textAlign: 'center',
    position: 'absolute',
    
    left: 0,
    width: '100%',
  },
  footerText: {
    color: '#fff',
    fontSize: '14px',
  },
};

export default Footer;
