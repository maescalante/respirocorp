import React from "react";
import Carrusel from "../Components/Carrusel";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const Home = () => {
  return (
    <section id="hero">
      <Carrusel />
    </section>
  );
};

export default Home;
