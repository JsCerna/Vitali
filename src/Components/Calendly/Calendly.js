import React from 'react';
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Calendly.css";

function CalendlyComponent() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <div className='home-content'>
          <h1>Reservaciones.</h1>
        </div>
        <div className='calendly-container'> 
          <div className="button-container">
            <Button as={Link} to="/servicios1"  className="btn btn-info">
              Procedimientos Estéticos
            </Button>
            <Button as={Link} to="/servicios2" className="btn btn-info">
              Procedimientos Faciales
            </Button>
          </div>
          <iframe
            src="https://calendly.com/agendar-hr-vitali/hr-procedimiento-estetico"
            width="100%"
            height="800"
            frameborder="0"
            title="Calendly Widget"
            className="calendly-iframe"
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

export default CalendlyComponent;


