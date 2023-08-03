import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logoImage from "../Img/vitalifooter.jpeg"; 

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <img src={logoImage} alt="Logo" className="footer-logo" />
        </Col>
        <Col md="4" className="footer-cote">
          <h3>copyright jsc {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h1 className="contacto-text">Contacto</h1>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={`https://api.whatsapp.com/send?phone=+56940126447&text=Hola,%20me%20contacto%20contigo%20porque%20me%20interesa%20alguno%20de%20tus%20tratamientos.`}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100067918561592&mibextid=LQQJ4d"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:vitalisaludyestetica@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/vitali_saludyestetica"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

