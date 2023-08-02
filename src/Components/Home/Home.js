import React from "react";
import "./Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import imagenPrincipal from "../Img/imagen-principal.jpg";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nati from "../Img/nati.jpeg";
import Pino from "../Img/pino.jpeg";
import Panchi from "../Img/panchi.jpeg";
import Flower from "../Img/flower4.jpg";
import Type from "./Type";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  const testimonios = [
    {
      imagen: Nati,
      titulo: <strong>Natalia</strong>,
      texto:
        "“Maravilloso servicio. La atención es 100% personalizada, lo cual me gustó mucho.<br>Además, obtuve muy buenos resultados.”",
    },
    {
      imagen: Pino,
      titulo: <strong>María Jesús</strong>,
      texto: "“Excelente servicio y atención. Muy conforme con los resultados de mi tratamiento Reductivo”",
    },
    {
      imagen: Panchi,
      titulo: <strong>Francisca</strong>,
      texto: "“Recomiendo mucho este centro. Quedé muy relajada y aliviada después de mi masaje. Muy buena atención”.",
    },
  ];

  const renderTestimonio = (testimonio) => (
    <div key={testimonio.titulo} className="testimonio-slide">
      <div className="testimonio-imagen-container">
        <img src={testimonio.imagen} alt={testimonio.titulo} className="testimonio-imagen" />
      </div>
      <h3 className="testimonio-titulo">{testimonio.titulo}</h3>
      <p
        className="testimonio-texto"
        dangerouslySetInnerHTML={{ __html: testimonio.texto }}
      ></p>
    </div>
  );

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={8} className="card-container">
              <div className="imagen-container">
                <img
                  src={imagenPrincipal}
                  alt="Imagen Principal"
                  className="img-fluid img-small"
                />
              </div>
              <div className="card-text">
                <h1>
                  VITALI es un centro de Salud y Belleza, que ofrece tratamientos faciales y corporales orientados
                  a mejorar la salud, estética y bienestar de las personas.
                </h1>
              </div>
              <Button type="button" className="btn btn-info" onClick={handleClick}>
                Ver más
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="card-container" style={{ marginTop: "40px" }}>
              <div className="flower-card">
                <div className="imagen-container">
                  <img
                    src={Flower}
                    alt="Imagen Principal"
                    className="img-fluid img-small flower-image"
                  />
                </div>
                <div className="card-text">
                  <div style={{ padding: 20, textAlign: "left" }}>
                  <Type />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="testimonios-container">
                <h2>Testimonios Clientes</h2>
                <Carousel
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  renderArrowPrev={() => null}
                  renderArrowNext={() => null}
                  dotColor="black" // Establece el color de los puntos
                  dotActiveColor="rgb(8, 8, 8)" // Establece el color del punto activo
                >
                  {testimonios.map(renderTestimonio)}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;











