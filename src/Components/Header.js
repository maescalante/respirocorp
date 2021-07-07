import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../assets/img/LOGOS/JPG/LogoWeb.jpg";

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Navbar.Brand href="/">
        <img className="logo" src={Logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link className="text-nowrap">Inicio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="text-nowrap">Acerca de Nosotros</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
