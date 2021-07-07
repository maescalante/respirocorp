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
            <h6>Links</h6>
            <ul class="footer-links">
              <li>
                <a href="/">Acerca de Nosotros</a>
              </li>

              <li>
                <a href="/">Contactanos</a>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h6>Otra informacion</h6>
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
          <Col md={8} sm={6} xs={12}>
            <p class="copyright-text">
              Copyright &copy; 2021 Respiro Corp.
              <a href="#ssd">Link</a>.
            </p>
          </Col>

          <Col md={4} sm={6} xs={12}>
            <ul class="social-icons">
              <li>
                <a class="socialIcon" href="#d">
                  <FontAwesomeIcon icon={faAt} />
                </a>
              </li>
              <li>
                <a class="socialIcon" href="#d">
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
