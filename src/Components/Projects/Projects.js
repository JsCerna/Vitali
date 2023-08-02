import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import "./Project.css"
import Corporal from "../Img/tratamientocorporal.jpg"
import Facial from "../Img/tratamientofacial.jpg"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Tratamientos  <strong className="purple">Disponibles </strong>
        </h1>
        <p style={{ color: "black" }}>
          Se dividen en tratamientos corporales y tratamientos faciales.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Corporal}
              isBlog={false}
              title="Tratamientos Corporales"
              description="La estética corporal abarca una serie de procesos estéticos que buscan mejorar la apariencia física, por medio de tratamientos cosmetológicos, procedimientos manuales y aparatología especializada, sin tener que recurrir al quirófano."
              ghLink="http://localhost:3000/servicios1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Facial}
              isBlog={false}
              title="Tratamientos Faciales"
              description="La estética facial se centra en el rejuvenecimiento, embellecimiento y cuidado de la cara y cuello, corrigiendo aspectos que puedan mejorar la belleza del rostro mediante técnicas no invasivas."
              ghLink="http://localhost:3000/servicios2"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;