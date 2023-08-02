import React from 'react';
import styled from 'styled-components';

const trabajos = [
  {
    id: 1,
    titulo: 'Trabajo 1',
    descripcion: 'Descripción del Trabajo 1...',
    fechaInicio: 'Enero 2020',
    fechaFin: 'Marzo 2021',
  },
  {
    id: 2,
    titulo: 'Trabajo 2',
    descripcion: 'Descripción del Trabajo 2...',
    fechaInicio: 'Abril 2021',
    fechaFin: 'Julio 2022',
  },
  {
    id: 3,
    titulo: 'Trabajo 1',
    descripcion: 'Descripción del Trabajo 1...',
    fechaInicio: 'Enero 2020',
    fechaFin: 'Marzo 2021',
  },
  {
    id: 4,
    titulo: 'Trabajo 2',
    descripcion: 'Descripción del Trabajo 2...',
    fechaInicio: 'Abril 2021',
    fechaFin: 'Julio 2022',
  },
];

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Transición suave para el efecto de escala */
  &:hover {
    transform: scale(1.05); /* Aumenta el tamaño al 105% cuando se pasa el mouse por encima */
  }
`;

const Experiencia = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Mi Experiencia Laboral</h2>
      <div style={styles.timeline}>
        {trabajos.map((trabajo) => (
          <Card key={trabajo.id}>
            <h3 style={styles.titulo}>{trabajo.titulo}</h3>
            <p style={styles.fecha}>{`${trabajo.fechaInicio} - ${trabajo.fechaFin}`}</p>
            <p style={styles.descripcion}>{trabajo.descripcion}</p>
          </Card>
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
  timeline: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
  },
  titulo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  fecha: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#777',
  },
  descripcion: {
    fontSize: '16px',
    marginBottom: '10px',
  },
};

export default Experiencia;
