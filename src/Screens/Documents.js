import React from "react";
import { Container, Button } from "react-bootstrap";
import File1 from "../assets/docs/151_BALANCE_INICIAL_FIRMADO.pdf";
import File2 from "../assets/docs/151_CERTIFICADO_ANTECEDENTES_DIRECTIVOS.pdf";
import File3 from "../assets/docs/151_CERTIFICADO_CUMPLIMIENTO_364_3.pdf";
import File4 from "../assets/docs/151_ESTATUTOS_ANEXO_1.pdf";
import File5 from "../assets/docs/151_REMUNERACION_DIRECTIVOS.pdf";
import File6 from "../assets/docs/151_RUT_ACTUALIZADO.pdf";

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
          <Button className="downloads" href={File1} download>
            {" "}
            151_BALANCE_INICIAL_FIRMADO
          </Button>
          <Button className="downloads" href={File2} download>
            {" "}
            151_CERTIFICADO_ANTECEDENTES_DIRECTIVOS
          </Button>
          <Button className="downloads" href={File3} download>
            {" "}
            151_CERTIFICADO_CUMPLIMIENTO_364_3
          </Button>
          <Button className="downloads" href={File4} download>
            {" "}
            151_ESTATUTOS_ANEXO_1
          </Button>
          <Button className="downloads" href={File5} download>
            {" "}
            151_REMUNERACION_DIRECTIVOS
          </Button>
          <Button className="downloads" href={File6} download>
            {" "}
            151_RUT_ACTUALIZADO
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Documents;
