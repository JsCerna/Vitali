import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SCard from "./ServiciosCard";
import cardData from "./Cardata";
import PaginationComponent from "../PaginationComponent"; // Importa el componente de paginación

function Servicios1() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  // Calcula el índice inicial y final de las tarjetas en la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // Cambia la página actual
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Manejar el click en el botón "Atrás"
  const handleGoBack = () => {
    navigate("/project"); // Reemplaza "/projects" con la ruta correcta hacia la que quieres volver
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Tratamientos <strong className="purple">Corporales </strong>
        </h1>
        <p style={{ color: "black" }}>Principales tratamientos corporales.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {currentCards.map((card, index) => (
            <Col md={4} className="project-card" key={index}>
              <SCard
                imgPath={card.imgPath}
                isBlog={false}
                title={card.title}
                description={card.description}
              />
            </Col>
          ))}
        </Row>
        <Button className="btn btn-info" onClick={handleGoBack}>
          Atrás
        </Button>
        {/* Agrega el componente de paginación y pasa las props necesarias */}
        <PaginationComponent
          currentPage={currentPage}
          totalPages={Math.ceil(cardData.length / cardsPerPage)}
          onPageChange={handlePageChange}
        />
      </Container>
    </Container>
  );
}

export default Servicios1;



