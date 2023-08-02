import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import './About.css';
import Box from "../Img/box.JPG"
import Tia from "../Img/tia.jpg"

const About = () => {
  return (
    <div className="about-section">
      <h2 className="about-title">¿Quiénes Somos?</h2>

      <div className="image-container">
      <Image className="single-image" src={Box} alt="About Us" fluid />
      </div>
      <Card className="card-container">
        <Card.Body className="card-body">
          <p className="card-text">
            VITALI es un Centro de Salud y Belleza que ofrece Tratamientos Faciales y Corporales orientados a mejorar la salud, estética y bienestar de las personas.<br />
            Dentro de los tratamientos ofrecidos, destacan: Masoterapia Integral, Tratamientos Reductivos y Reafirmantes, Depilación Láser, Kinesiología Post Quirúrgica, Tratamientos Faciales, entre otros.<br />
            🔹 Todos nuestros servicios se enmarcan en la Kinesiología Dermatofuncional, lo que diferencia a Vitali de otros Centros de Belleza, en que se encarga de prevenir, mejorar y/o recuperar la función de la piel.<br />
            🔹 Nuestra misión es entregar un servicio de excelencia a nuestros pacientes, otorgando una experiencia única, de calidad y 100% personalizada según los requerimientos y objetivos de tratamiento.<br />
            🔹 Nuestro compromiso y dedicación nos permite obtener resultados garantizados.
          </p>
        </Card.Body>
      </Card>

      <div className="person-section">
        <div className="person-image-container">
          <Image className="person-image" src={Tia} roundedCircle />
        </div>
        <h1>Verónica Morales</h1>
        <p className="person-subtitle">
        <strong>“Estética también es salud.”</strong>
        </p>
        <p className="person-subtitle">
          Kinesiologa Dermatofuncional
        </p>
      </div>
    </div>
  );
};

export default About;


