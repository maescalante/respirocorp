import React from "react";
import { Form, Button, Container } from "react-bootstrap";
const ContactUs = () => {

  const handleMail=()=>{

  }
  return (
    <Container>
      <h4>
        Si tienes dudas, comentarios o necesitas mas información no dudes en
        contactarnos. Ingresa Tus datos y te reponderemos lo mas pronto posible{" "}
      </h4>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Ingresa tu mensaje" />
        </Form.Group>
        <br />

        <a><Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default ContactUs;
