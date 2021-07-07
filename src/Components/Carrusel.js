import React from "react";
import { Carousel } from "react-bootstrap";

const Carrusel = () => {
  return (
    <Carousel nextLabel="" prevLabel="">
      <Carousel.Item interval={5000}>
        <img
          className="carrusel d-block w-100"
          src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVkaWNpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt="First slide"
        />
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
        <img
          className="carrusel d-block w-100"
          src="https://images.pexels.com/photos/3952126/pexels-photo-3952126.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Second slide"
        />
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
