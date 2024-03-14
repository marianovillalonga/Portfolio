import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import './Style.css'; // Archivo de estilos

const VistosoCard = () => {
  return (
    <div className="vistoso-card">
      <div className="vistoso-card-content">
        <h2>Mis Skill</h2>
        {/* Utiliza flexbox para colocar los iconos uno al lado del otro */}
        <div className="skill-item-container">
          <div className="skill-item">
            <MDBIcon fab icon="github" style={{ fontSize: '2.5rem', marginRight: '0.5rem' }} />
            <span className="skill-name">GitHub</span>
          </div>
          <div className="skill-item">
            <MDBIcon fab icon="html5" style={{ fontSize: '2.5rem', marginRight: '0.5rem' }} />
            <span className="skill-name">HTML</span>
          </div>
          <div className="skill-item">
          <MDBIcon fab icon="css3-alt" style={{ fontSize: '2.5rem', marginRight: '0.5rem' }} />
            <span className="skill-name">CSS</span>
          </div>
          <div className="skill-item">
          <MDBIcon fab icon="js" style={{ fontSize: '2.5rem', marginRight: '0.5rem' }} />
            <span className="skill-name">JavaScript</span>
          </div>
          <div className="skill-item">
            <MDBIcon fab icon="react" style={{ fontSize: '2.5rem', marginRight: '0.5rem' }} />
            <span className="skill-name">React</span>
          </div>
          <div className="skill-item">
          <MDBIcon fab icon="node" style={{ fontSize: '2.5rem', marginRight: '0.5rem' }} />
            <span className="skill-name">NodeJS</span>
          </div>
          <div className="skill-item">
          <MDBIcon fab icon="mdb" style={{ fontSize: '2.5rem', marginRight: '0.5rem' }} />
            <span className="skill-name">NodeJS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistosoCard;
