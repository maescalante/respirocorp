import React from "react";

import { Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../assets/img/LOGOS/JPG/LogoWeb.jpg";

const Header = () => {
  return (
    <div>
      <Row>
        <Col md={2}>
          <img
            className="logo"
            src={Logo}
            alt="logo"
          />
        </Col>
        <Col>
          <Navbar className="header" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <LinkContainer to="/">
                  <Nav.Link className="text-nowrap">
                    <p className="whiteHeader">Inicio</p>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link className="text-nowrap">
                    <p className="whiteHeader"> Acerca de Nosotros</p>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/documents">
                  <Nav.Link className="text-nowrap">
                    <p className="whiteHeader">Régimen Tributario Especial</p>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
