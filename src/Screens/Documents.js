import React from "react";
import { Container, Button } from "react-bootstrap";

const Documents = () => {
  return (
    <div>
      <Container>
        <div className="row">
          <h1>Régimen Tributario Especial</h1>
          <p>
            A continuación podrá encontrar la documentación referente a nuestro
            proceso de permanencia para el Régimen Tributario Especial en
            cumplimiento a lo citado en el Articulo 1.2.1.5.15 del decreto
            reglamentario 2150 del 20/12/2017.
          </p>
        </div>
        <div className="row">
          <Button className="downloads" href="path_to_file" download="RTE">
            {" "}
            Estados financieros y revelaciones
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Documents;
