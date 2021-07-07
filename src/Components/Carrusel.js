import React from "react";
import { Carousel, Container } from "react-bootstrap";
import C1 from "../assets/img/FOTOS/carrusel1.jpeg";
import C2 from "../assets/img/FOTOS/carrusel2.png";
const Carrusel = () => {
  return (
    <Carousel nextLabel="" prevLabel="">
      <Carousel.Item interval={5000}>
        <img className="carrusel d-block w-100" src={C1} alt="First slide" />
        <Carousel.Caption>
          <div className="content">
            <h3>Nuestra razón de ser, nuestros pacientes y sus familias</h3>
            <p>
              Nuestro objetivo servir siempre y cuidar la vida. Nuestro
              propósito brindar atención integral, a personas aquejadas por
              patologías respiratoria. Nuestras virtudes humanidad, respeto,
              tolerancia, honestidad, y calidad científica. El fin último,
              acompañar y consolar siempre, aliviar y curar cuando se puede y
              contribuir al mejoramiento de la calidad de vida del individuo, la
              familia y la sociedad.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="carrusel d-block w-100" src={C2} alt="Second slide" />
        <Carousel.Caption>
          <div className="content">
            <h3>¿Quienes Somos?</h3>
            <p>
              Somos un grupo de médicos especialistas con larga experiencia en
              la atención de pacientes con patologías respiratorias, agrupados
              hoy en una corporación que tiene el propósito de mejorar el
              bienestar de la sociedad y de cada uno de sus miembros, a través
              de la atención integral, oportuna, amable y de gran calidad
              científica de todo aquel aquejado por enfermedades respiratorias
              de diferente índole.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
