import React from "react";
import { Container, Button } from "react-bootstrap";
import File1 from "../assets/docs/151_01_CERTIFICADO_REMUNERACION_DIRECTIVOS.pdf";
import File2 from "../assets/docs/151_02_INFORME_RESULTADOS_2023.pdf";
import File3 from "../assets/docs/151_03_EF_2022_2021.pdf";
import File4 from "../assets/docs/151_04_CERTIFICADO_CUMPLIMIENTO_364_5.pdf";
import File5 from "../assets/docs/151_05_ESTATUTOS_2022.pdf";
import File6 from "../assets/docs/151_06_CERTIFICADO_CUMPLIMIENTO_364_3.pdf";
import File7 from "../assets/docs/151_07_52451002017754.pdf";
import File8 from "../assets/docs/151_AA_026_ACTA_005_ASAMBLEA_ORD_2023.pdf";

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
            151_01_CERTIFICADO_REMUNERACION_DIRECTIVOS
          </Button>
          <Button className="downloads" href={File2} download>
            {" "}
            151_02_INFORME_RESULTADOS_2023
          </Button>
          <Button className="downloads" href={File3} download>
            {" "}
            151_03_EF_2022_2021
          </Button>
          <Button className="downloads" href={File4} download>
            {" "}
            151_04_CERTIFICADO_CUMPLIMIENTO_364_5
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
          <Button className="downloads" href={File8} download>
            {" "}
            151_AA_026_ACTA_005_ASAMBLEA_ORD_2023
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Documents;
