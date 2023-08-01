import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function aperturapubblica() {
  return (
    <div className="aperturapubblicawrapper">
      <div className="aperturapubblica">
        <p className="aperturatitolo">Aperture pubbliche</p>
        <p className="aperturatesto">
          L'Osservatorio di Talmassons apre al pubblico per dare modo a tutti di
          osservare diversi oggetti celesti del cielo.<br></br>
          Durante la serata sarà possibile osservare i cieli sia dalla cupola
          sia dai telescopi sul prato.<br></br>
        </p>
        <ul className="prenotaunavisitalista">
          <li>€ 5,00 a persona</li>
          <li>prenotazione obbligatoria</li>
        </ul>
        <p className="aperturaprenota">Prenota il tuo posto su Eventbrite</p>

        <MDBBtn
          className="m-1 footercontattiicona"
          href="https://www.eventbrite.it/o/circolo-astrofili-talmassons-34137836731"
        >
          <MDBIcon fas icon="calendar-day" /> Eventbrite
        </MDBBtn>
      </div>
    </div>
  );
}

export default aperturapubblica;
