import React from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardSubTitle,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Experiencia = () => {
  return (
    <div className="text-center" style={{ marginTop: '1vh', marginBottom: '5vh' }}>
      <h2>Mi experiencia laboral</h2>
      <div className="d-flex justify-content-center align-items-center">
        <MDBCard style={{ maxWidth: '400px', width: '100%' }}>
          <MDBCardBody>
            <MDBCardTitle>Cobromix </MDBCardTitle>
            <MDBCardText>NodeJS, express, React, redux, MySql, Next.</MDBCardText>
            <MDBBtn href='https://www.linkedin.com/company/cobromix/'>Linkedin de la empresa</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div style={{ marginBottom: '20px' }}></div>
      <div className="d-flex justify-content-center align-items-center">
        <MDBCard style={{ maxWidth: '400px', width: '100%' }}>
          <MDBCardBody>
            <MDBCardTitle>Coderhouse </MDBCardTitle>
            <MDBCardText>NodeJS, express, mongoDB, MySql.</MDBCardText>
            <MDBBtn href='https://www.linkedin.com/school/coderhouse/'>Linkedin de la empresa</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div style={{ marginBottom: '20px' }}></div>
      <div className="d-flex justify-content-center align-items-center">
        <MDBCard style={{ maxWidth: '400px', width: '100%' }}>
          <MDBCardBody>
            <MDBCardTitle>Version Dos</MDBCardTitle>
            <MDBCardText>PHP, JavaScript, MySql.</MDBCardText>
            <MDBBtn href='https://www.linkedin.com/company/version-dos/'>Linkedin de la empresa</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div style={{ marginBottom: '20px' }}></div>
      <div className="d-flex justify-content-center align-items-center">
        <MDBCard style={{ maxWidth: '400px', width: '100%' }}>
          <MDBCardBody>
            <MDBCardTitle>Oeste Servicios Sociales</MDBCardTitle>
            <MDBCardText>C#, MySql.</MDBCardText>
            <MDBBtn href='https://www.linkedin.com/company/oeste-servicios-sociales/'>Linkedin de la empresa</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default Experiencia;
