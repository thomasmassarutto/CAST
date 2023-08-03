import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function prenotaunavisita() {
  return (
    <div className="prenotaunavisitawrapper">
      <div className="prenotaunavisita">
        <p className="aperturatitolo">Aperture straoridnarie</p>
        <p className="aperturatesto">
          Visita la cupola e osserva le stelle con i nostri telecopi in maniera
          privata.<br></br>
          L'offerta è dedicata a scolaresche, associazioni e gruppi di persone.
          <br></br>
          Data e orario devono essere concordate per tempo, possono subire
          variazioni in base al meteo e al calendario astronomico.
        </p>
        <ul className="prenotaunavisitalista">
          <li>€ 5,00 a persona</li>
          <li>minimo 8 persone</li>
        </ul>
        <p className="aperturaprenota">
          Contattaci su Messanger o via Mail
        </p>
        <MDBBtn
          className="m-1 footercontattiicona"
          href="MAILTO:info@castfvg.it"
        >
          <MDBIcon fas icon="envelope" /> Mail
        </MDBBtn>

        <MDBBtn
          className="m-1 footercontattiicona"
          style={{ backgroundColor: "#3b5998" }}
          href="http://m.me/castfvg"
        >
          <MDBIcon fab icon="facebook-messenger" /> Messanger
        </MDBBtn>
      </div>
    </div>
  );
}

export default prenotaunavisita;
