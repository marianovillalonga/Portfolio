// Menu.js
import React from 'react';

const Menu = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <a href="#inicio" style={styles.navLink}>
            Inicio
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#sobremi" style={styles.navLink}>
            Sobre Mí
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#proyectos" style={styles.navLink}>
            Mis Proyectos
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#contacto" style={styles.navLink}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#3498db', // Color del fondo del menú
    padding: '20px 0',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};

export default Menu;