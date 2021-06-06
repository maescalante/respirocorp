import React from "react";

import {
  Navbar,
  Nav,
  NavDropdown,

} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../assets/img/lung.png";

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Navbar.Brand href="#home">
        <img className="logo d-inline-block align-top" src={Logo} alt="logo" />{" "}
        Corporación Respiro de Colombia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <LinkContainer to="/"><Nav.Link >Inicio</Nav.Link></LinkContainer>
          <LinkContainer to="/about"><Nav.Link >Acerca de Nosotros</Nav.Link></LinkContainer>
          <NavDropdown title="Servicios" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Contactanos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
