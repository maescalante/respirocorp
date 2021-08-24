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
            src="https://lh3.googleusercontent.com/jAMhxpyKWUX-lEgDqjyOZbx6j38330vL6lHWKi985ixErmI5J-NC0LvQbso7-364X9yD3NqWFfniJd6VwUN59Jlb-bza8-u0hTvwxYyMPxZCQtxi40jO4R7zLK7SI2IWUx2vHpNu9ekzIIZUvg_PrB9yU96kdrFszFmgrKR8xne2ddS8ZZuoGYdYQQ9CVBsPaSjqu583H68DX7owNuSoE4JY_JR3kUWaD03Lj-sh1H6xN9ptWjPMOqdwDqK5Tl-z6piE4dPCM6jfam_HaIHSZ2o3tepQdZQ4wEais8lmB20huO0XgTdBAo7ECdNeAmbEkeLKUPJUCWyIX-Ww31zbjj4p3mwOGvd_ntqVFS_9Le-6S3wj7H4Lt6Zu6Tmx9JiGZas0kgiVQjyZxA17YSD_UaHMVcpNZYoztTTrHTOEBjqwU605OWwsyon8VDksh1Hp7OZuSDbVCQLcA9zRtGxgf-y4nNEr78RvejDEjusEx6gDJukFidFplPMQiExYE0eQn-m8-SVTYO7rux_ceVExkw03iKWUb8__3d-NQRYABk1FNtzZxKHx_vjTIuCjKbNcDVivH8u62vKg4c6-6l7_A0dsFL9e7aF61XzU9GKkJBLiB4Wq9nWq9tlXvleSLVHX3RFJg6GBAQEnUr7Ae1XdijJvOKfNDcKkqVxXRM5uCy1lilH6hnWhYPFBHLUg3ELolF1veYvAe_ZKZnNPGvRQrJw=w1920-h843-no?authuser=0"
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
