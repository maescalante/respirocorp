import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <h1>Acerca de Nosotros</h1>
      <Row>
        <Col className="sameHeight">
          <Card>
            <Card.Body>
              <Card.Title>Misión</Card.Title>
              <Card.Text>
                Nuestra razón de ser, nuestros pacientes y sus familias. Nuestro
                objetivo servir siempre y cuidar la vida. Nuestro propósito
                brindar atención integral, a personas aquejadas por patologías
                respiratoria. Nuestras virtudes humanidad, respeto, tolerancia,
                honestidad, y calidad científica. El fin último, acompañar y
                consolar siempre, aliviar y curar cuando se puede y contribuir
                al mejoramiento de la calidad de vida del individuo, la familia
                y la sociedad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="sameHeight">
          {" "}
          <Card>
            <Card.Body>
              <Card.Title>Visión</Card.Title>
              <Card.Text>
                Ser neumólogos, realizados en el servicio a nuestros pacientes.
                Proporcionar a nuestros pacientes conocimiento, medicación,
                dispositivos, rehabilitación y tecnología que le permita mejorar
                su bienestar, salud respiratoria y calidad de vida. Disminuir la
                brecha entre el conocimiento actual y su implementación en el
                paciente y la sociedad. Recolectar información y llevar a cabo
                su consolidación científica, que mejore el conocimiento de la
                fisiología y la patología respiratoria en general y en sus
                particularidades con relación a la altura de Bogotá, DC. Nuestra
                recompensa la gratitud más que el reconocimiento.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="sameHeight">
          <Card>
            <Card.Body>
              <Card.Title>Pilares</Card.Title>
              <Card.Text>
                Nuestros pilares, son nuestras virtudes, son nuestros valores
                dispuestos a la atención de nuestros pacientes. Nuestras
                acciones deben ser siempre engalanadas de humanidad, respeto,
                tolerancia, honestidad y calidad científica. Ninguna acción será
                buena si esta desprovista de humanidad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <p>
        Somos un grupo de médicos especialistas con larga experiencia en la
        atención de pacientes con patologías respiratorias, agrupados hoy en una
        corporación que tiene el propósito de mejorar el bienestar de la
        sociedad y de cada uno de sus miembros, a través de la atención
        integral, oportuna, amable y de gran calidad científica de todo aquel
        aquejado por enfermedades respiratorias de diferente índole.
        <br /> Nuestra formación nos permite no solo brindar atención
        especializada de neumología. Estamos en capacidad de facilitar y mejorar
        la atención de pacientes con patologías respiratorias frecuentes,
        enfermedades de elevada complejidad diagnóstica y terapéutica y
        enfermedad crónicas, por medio de la conformación de grupos de atención
        como son la clínica de asma, clínica de enfermedad pulmonar obstructiva
        crónica EPOC, consulta de enfermedad pulmonar intersticial y fibrosis
        pulmonar, consulta de hipertensión pulmonar, programas de rehabilitación
        pulmonar y grupos de control de terapias de suministro de oxígeno y
        ventilación no invasiva domiciliaria.
        <br /> Estamos convencidos que la atención de los pacientes y sus
        diferentes patologías, debe ir acompañada de programas de educación en
        la enfermedad, que fomenten no solo la mejoría de la salud, sino que
        promuevan el autocuidado y la mejoría de la calidad de vida, por lo cual
        estamos en capacidad de implementar programas de educación y
        capacitación a médicos y pacientes, con acceso a los mismos por
        diferentes medios difusión, empezando por nuestra página y aplicaciones
        institucionales. <br /> Somos adicionalmente neumólogos con experiencia
        en el montaje, realización e interpretación de diferentes pruebas de
        diagnóstico respiratorio como son la espirometría, volúmenes pulmonares,
        capacidad de difusión monóxido de carbono, prueba de caminata de seis
        minutos, prueba de esfuerzo cardiopulmonar integrada, entre otras
        pruebas.
        <br /> Poseemos el conocimiento, entrenamiento y experiencia para la
        realización de procedimientos diagnósticos y terapéuticos, como son
        toracentesis, broncoscopia flexible y rígida y biopsia de pleura, con
        los cuales estamos seguros de que nuestros pacientes están siempre en
        las mejores manos. <br /> Por último, todos estos conocimientos y
        experiencias están siempre acompañados por nuestra vocación de servicio,
        por lo que no dudamos en asegurar que la gratitud de nuestros pacientes
        y sus familias, siempre será nuestra mejor recompensa.
      </p>
    </Container>
  );
};

export default About;
