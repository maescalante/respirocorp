import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/img/respiroTemp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer class="site-footer">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <img className="footerLogo" src={Logo} alt="logo" />
          </Col>

          <Col xs={6} md={3}>
            <h6>Contacto</h6>
            <ul class="footer-links">
              <li>
                Email:{" "}
                <a href="mailto: respirocorp@gmail.com">
                  respirocorp@gmail.com
                </a>
              </li>
              <li>Cel: +57 3104780605</li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h6>Otra información</h6>
            <ul class="footer-links">
              <li>
                <a href="/">Informacion 1</a>
              </li>
              <li>
                <a href="/">Informacion 2</a>
              </li>
              <li>
                <a href="/">Informacion 3</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
      </Container>
      <Container>
        <Row>
          <Col>
            <p class="copyright-text">
              Respiro Corp{" "}
              <a href="mailto: respirocorp@gmail.com">respirocorp@gmail.com</a>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
