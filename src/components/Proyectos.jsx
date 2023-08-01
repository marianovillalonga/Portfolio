import React from 'react';

const Proyectos = () => {
  
  const proyectos = [
    {
      id: 1,
      nombre: 'Proyecto 1',
      descripcion: 'Descripción del Proyecto 1...',
      imagen: 'ruta/imagen-proyecto-1.jpg',
      enlace: 'https://www.ejemplo.com/proyecto1',
    },
    {
      id: 2,
      nombre: 'Proyecto 2',
      descripcion: 'Descripción del Proyecto 2...',
      imagen: 'ruta/imagen-proyecto-2.jpg',
      enlace: 'https://www.ejemplo.com/proyecto2',
    },
    {
        id: 3,
        nombre: 'Proyecto 3',
        descripcion: 'Descripción del Proyecto 2...',
        imagen: 'ruta/imagen-proyecto-2.jpg',
        enlace: 'https://www.ejemplo.com/proyecto2',
    },
    {
      id: 3,
      nombre: 'Proyecto 4',
      descripcion: 'Descripción del Proyecto 2...',
      imagen: 'ruta/imagen-proyecto-2.jpg',
      enlace: 'https://www.ejemplo.com/proyecto2',
    },
  ];

  return (
    <section style={styles.container} id="proyectos">
      <h2 style={styles.title}>Mis Proyectos</h2>
      <div style={styles.grid}>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} style={styles.card}>
            <img src={proyecto.imagen} alt={proyecto.nombre} style={styles.image} />
            <h3 style={styles.projectName}>{proyecto.nombre}</h3>
            <p style={styles.description}>{proyecto.descripcion}</p>
            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer" style={styles.link}>
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '100px 0',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'left',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  projectName: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  link: {
    display: 'inline-block',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#3498db',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
};

export default Proyectos;