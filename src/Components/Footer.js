import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import Logo from "../assets/img/respiroTemp.png"
const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return (
        <footer id="footer">
      <Container className="footer-content">

        <Row>
          <Col xs={12}>
            Contacto:skdjkdj
          
          </Col>
          <Col xs={12}>
            <div onClick={scrollToTop}>
           
            </div>
          </Col>
        </Row>
        <Row><img className="footerLogo" src={Logo} alt="logo"></img></Row>
      </Container>
    </footer>
    )
}

export default Footer
