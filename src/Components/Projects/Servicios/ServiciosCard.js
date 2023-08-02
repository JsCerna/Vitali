import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { BsCalendar2Check } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./ServiciosCards.css";

function ServiciosCards(props) {
  const [mostrarContenidoCompleto, setMostrarContenidoCompleto] = useState(
    false
  );
  const navigate = useNavigate();

  const toggleMostrarContenido = () => {
    setMostrarContenidoCompleto(!mostrarContenidoCompleto);
  };

  let mostrarTexto = props.description;
  if (typeof mostrarTexto !== "string") {
    mostrarTexto = "";
  } else if (mostrarTexto.length > 150) {
    mostrarTexto = mostrarContenidoCompleto
      ? props.description
      : props.description.slice(0, 150);
  }

  const handleAgendarHora = () => {
    navigate("/Calendly"); // Redirige al usuario a la ruta "/Calendly"
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
      <Card.Title style={{ fontSize: "22px" }}>{props.title}</Card.Title>
        <Card.Text>
          <div className="description-container">
            <pre className="description-text" style={{ textAlign: "left" }}>
              {mostrarTexto}
            </pre>
            {props.description.length > 150 && (
              <span onClick={toggleMostrarContenido} className="read-more">
                {mostrarContenidoCompleto ? "Leer menos" : "Leer más"}
              </span>
            )}
          </div>
        </Card.Text>
        <Button className="btn btn-info" onClick={handleAgendarHora}>
          <BsCalendar2Check /> &nbsp;
          {props.isBlog ? "Blog" : "Agendar Hora"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ServiciosCards;








