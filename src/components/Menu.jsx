import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const Menu = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth', // Esta propiedad habilita el desplazamiento suave
      });

      // Cierra el menú en dispositivos móviles después de hacer clic en un enlace
      if (isMobile) {
        handleMenuClick();
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Cambia este valor según cuánto deseas que el usuario desplace la página antes de aplicar el estilo
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Menú fijo */}
      <div style={scrolling ? { ...styles.fixedMenu, ...styles.scrollingMenu } : styles.fixedMenu}>
        <nav style={styles.nav}>
          {isMobile ? (
            <div style={styles.menuContainer}>
              <div style={styles.hamburgerMenu} onClick={handleMenuClick}>
                <div
                  style={{
                    ...styles.hamburgerLine,
                    transform: isMenuOpen ? 'rotate(45deg)' : 'none',
                    top: isMenuOpen ? '10px' : 0,
                  }}
                />
                <div
                  style={{
                    ...styles.hamburgerLine,
                    opacity: isMenuOpen ? 0 : 1,
                    transform: isMenuOpen ? 'translateX(-20px)' : 'none',
                  }}
                />
                <div
                  style={{
                    ...styles.hamburgerLine,
                    transform: isMenuOpen ? 'rotate(-45deg)' : 'none',
                    top: isMenuOpen ? '-10px' : 0,
                  }}
                />
              </div>
              {isMenuOpen && (
                <ul style={{ ...styles.menuOptions, display: 'flex', flexDirection: 'column' }}>
                  <li style={styles.menuItem}>
                    <a href="#inicio" onClick={(e) => handleScrollTo(e, '#inicio')} style={styles.menuLink}>
                      Inicio
                    </a>
                  </li>
                  <li style={styles.menuItem}>
                    <a href="#sobremi" onClick={(e) => handleScrollTo(e, '#sobremi')} style={styles.menuLink}>
                      Sobre Mí
                    </a>
                  </li>
                  <li style={styles.menuItem}>
                    <a href="#proyectos" onClick={(e) => handleScrollTo(e, '#proyectos')} style={styles.menuLink}>
                      Mis Proyectos
                    </a>
                  </li>
                  <li style={styles.menuItem}>
                    <a href="#contacto" onClick={(e) => handleScrollTo(e, '#contacto')} style={styles.menuLink}>
                      Contacto
                    </a>
                  </li>
                  <li style={{ ...styles.closeMenuItem, display: 'flex', justifyContent: 'center' }} onClick={handleMenuClick}>
                    <span style={styles.closeIcon}>&times;</span> Cerrar
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <div>
              <nav style={styles.nav}>
                <ul style={styles.navList}>
                  <li style={styles.menuItem}>
                    <a href="#inicio" onClick={(e) => handleScrollTo(e, '#inicio')} style={styles.menuLink}>
                      Inicio
                    </a>
                  </li>
                  <li style={styles.menuItem}>
                    <a href="#sobremi" onClick={(e) => handleScrollTo(e, '#sobremi')} style={styles.menuLink}>
                      Sobre Mí
                    </a>
                  </li>
                  <li style={styles.menuItem}>
                    <a href="#proyectos" onClick={(e) => handleScrollTo(e, '#proyectos')} style={styles.menuLink}>
                      Mis Proyectos
                    </a>
                  </li>
                  <li style={styles.menuItem}>
                    <a href="#contacto" onClick={(e) => handleScrollTo(e, '#contacto')} style={styles.menuLink}>
                      Contacto
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

const styles = {
  nav: {
    background: '#3498db',
    padding: '5px 0',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  hamburgerMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '10px',
    position: 'relative',
    zIndex: 1,
  },
  hamburgerLine: {
    width: '30px',
    height: '3px',
    background: '#fff',
    margin: '5px',
    transition: 'transform 0.3s, opacity 0.3s, top 0.3s',
  },
  menuContainer: {
    position: 'relative',
  },
  menuOptions: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: '60px',
    right: 0,
    background: '#3498db',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  menuItem: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  menuLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  closeMenuItem: {
    cursor: 'pointer',
    color: '#fff',
    fontSize: '16px',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  fixedMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: '#3498db',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  scrollingMenu: {
    background: '#222', // Cambia el color de fondo según tus preferencias
    // Agrega cualquier otro estilo adicional aquí
  },
};

export default Menu;
