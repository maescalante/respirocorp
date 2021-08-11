import React from "react";
import { Container, Button } from "react-bootstrap";
import File1 from "../assets/docs/151_01_ACTA_DE_CONSTITUCION.pdf";
import File2 from "../assets/docs/151_02_EEFF_BALANCE_INICIAL.pdf";
import File3 from "../assets/docs/151_03_CCB_RESPIROCORP.pdf";
import File4 from "../assets/docs/151_04_ACTA_ASAMBLEA_AUT_RL.pdf";
import File5 from "../assets/docs/151_05_ESTATUTOS_RESPIROCORP.pdf";
import File6 from "../assets/docs/151_06_CERTIFICADO_CUMPLIMIENTO_364_3.pdf";
import File7 from "../assets/docs/RUT_ACTUALIZADO.pdf";
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
            151_01_ACTA_DE_CONSTITUCION
          </Button>
          <Button className="downloads" href={File2} download>
            {" "}
            151_02_EEFF_BALANCE_INICIAL
          </Button>
          <Button className="downloads" href={File3} download>
            {" "}
            151_03_CCB_RESPIROCORP
          </Button>
          <Button className="downloads" href={File4} download>
            {" "}
            151_04_ACTA_ASAMBLEA_AUT_RL
          </Button>
          <Button className="downloads" href={File5} download>
            {" "}
            151_05_ESTATUTOS_RESPIROCORP
          </Button>
          <Button className="downloads" href={File6} download>
            {" "}
            151_06_CERTIFICADO_CUMPLIMIENTO_364_3
          </Button>
          <Button className="downloads" href={File7} download>
            {" "}
            RUT_ACTUALIZADO
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Documents;
