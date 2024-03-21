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
            <span className="skill-name">MongoDB</span>
          </div>
          <div className="skill-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-mysql" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" />
              <path d="M9 7h.01" />
            </svg>
            <span className="skill-name">MySql</span>
          </div>
          <div className="skill-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-typescript" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />
              <path d="M9 12h4" />
              <path d="M11 12v6" />
              <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />
            </svg>
            <span className="skill-name">TypeScript</span>
          </div>
          <div className="skill-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-firebase" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4.53 17.05l6.15 -11.72h-.02c.38 -.74 1.28 -1.02 2.01 -.63c.26 .14 .48 .36 .62 .62l1.06 2.01" />
              <path d="M15.47 6.45c.58 -.59 1.53 -.59 2.11 -.01c.22 .22 .36 .5 .41 .81l1.5 9.11c.1 .62 -.2 1.24 -.76 1.54l-6.07 2.9c-.46 .25 -1.01 .26 -1.46 0l-6.02 -2.92c-.55 -.31 -.85 -.92 -.75 -1.54l1.96 -12.04c.12 -.82 .89 -1.38 1.7 -1.25c.46 .07 .87 .36 1.09 .77l1.24 1.76" />
              <path d="M4.57 17.18l10.93 -10.68" />
            </svg>
            <span className="skill-name">Firebase</span>
          </div>
          <div className="skill-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-redux" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M16.54 7c-.805 -2.365 -2.536 -4 -4.54 -4c-2.774 0 -5.023 2.632 -5.023 6.496c0 1.956 1.582 4.727 2.512 6" />
              <path d="M4.711 11.979c-1.656 1.877 -2.214 4.185 -1.211 5.911c1.387 2.39 5.138 2.831 8.501 .9c1.703 -.979 2.875 -3.362 3.516 -4.798" />
              <path d="M15.014 19.99c2.511 0 4.523 -.438 5.487 -2.1c1.387 -2.39 -.215 -5.893 -3.579 -7.824c-1.702 -.979 -4.357 -1.235 -5.927 -1.07" />
              <path d="M10.493 9.862c.48 .276 1.095 .112 1.372 -.366a1 1 0 0 0 -.367 -1.365a1.007 1.007 0 0 0 -1.373 .366a1 1 0 0 0 .368 1.365z" />
              <path d="M9.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M15.5 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
            <span className="skill-name">Redux</span>
          </div>
          <div className="skill-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-php" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0" />
              <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
              <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
              <path d="M12 7.5l-1 5.5" />
              <path d="M11.6 10h2.4l-.5 3" />
            </svg>
            <span className="skill-name">Redux</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistosoCard;
