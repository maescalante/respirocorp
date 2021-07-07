import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/img/LOGOS/JPG/LOGOBL.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer class="site-footer">
      <Row>
        <Col sm={12} md={6}>
          <img className="footerLogo" src={Logo} alt="logo" />
        </Col>

        <Col xs={6} md={3}>
          <h6>Contacto</h6>
          <ul class="footer-links">
            <li>
              Email:{" "}
              <a href="mailto: respirocorp@gmail.com">respirocorp@gmail.com</a>
            </li>
            <li>Cel: +57 3104780605</li>
          </ul>
        </Col>

        <Col xs={6} md={3}>
          <h6>RTE - Régimen Tributario Especial </h6>
          <ul class="footer-links">
            <li>
              <a href="/">Estados financieros y revelaciones</a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
