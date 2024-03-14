// Proyectos.js
import React from 'react';
import '../css/Proyectos.css';
import imagenProyecto1 from '../img/proyecto1.jpg';
import imagenProyecto2 from '../img/proyecto2.jpg';
import imagenProyecto3 from '../img/proyecto3.jpg';

const Proyectos = () => {
  
  const proyectos = [
    {
      id: 1,
      nombre: 'Proyecto real en React',
      descripcion: 'Descripción del Proyecto 1...',
      imagen: imagenProyecto1,
      enlace: 'https://proyecto-carlos.netlify.app/',
      github: 'https://github.com/marianovillalonga/proyectoRealCoder'
    },
    {
      id: 2,
      nombre: 'Control de gastos',
      descripcion: 'Descripción del Proyecto 2...',
      imagen: imagenProyecto2,
      enlace: 'https://control-gastos-mariano.netlify.app/',
      github: 'https://github.com/marianovillalonga/Control-Gastos-React'
    },
    {
      id: 3,
      nombre: 'Proyecto Veterinaria',
      descripcion: 'Descripción del Proyecto 3...',
      imagen: imagenProyecto3,
      enlace: 'https://citas-prueba-cursoreact.netlify.app/',
      github: 'https://github.com/marianovillalonga/React-Tailwind'
    },
  ];

  return (
    <section className="container" id="proyectos">
      <h2 className="title">Mis Proyectos</h2>
      <div className="grid">
        {proyectos.map((proyecto, index) => (
          <div key={proyecto.id} className="card">
            <div className={index % 2 === 0 ? 'content' : 'contentReverse'}>
              <div>
                <h3 className="projectName">{proyecto.nombre}</h3>
                <p className="description">{proyecto.descripcion}</p>
                <a className="linkButton" href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
                  Ver proyecto
                </a>
                <a className="githubButton" href={proyecto.github} target="_blank" rel="noopener noreferrer">
                  Ver en GitHub
                </a>
              </div>
              <img src={proyecto.imagen} alt={proyecto.nombre} className="image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
