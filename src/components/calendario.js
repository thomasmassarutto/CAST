import React from "react";

function calendario() {
  return (
    <div className="calendariowrapper">
      <div className="mainpagesection">
        <iframe
          title="calendariogoogle"
          className="googleelement"
          src="https://calendar.google.com/calendar/embed?height=700&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FRome&showNav=0&showPrint=1&showDate=1&showTitle=0&showCalendars=0&showTz=1&showTabs=1&src=dDFvY2Rub2NqaXNxbHNkMmgyYTNmdW9sbGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26&color=%2333B679"
          frameborder="0"
          s
          crolling="no"
        ></iframe>

        <div className="mainpageindicazionitestuali">
          <div>
            <i class="bi bi-calendar-event-fill littleicon"></i>
          </div>

          <div>
            <p className="mainpagetitolosezione">
              Consulta il calendario per rimanere informato sulle date dei
              nostri eventi
            </p>
            <p>
              Benvenuti all'Osservatorio Astronomico del Circolo Astrofili di
              Talmassons (C.AS.T.)! Le date nel calendario sono indicative e
              potrebbero subire variazioni a causa delle condizioni meteo. Per
              confermare l'apertura e ricevere aggiornamenti, vi invitiamo a
              seguirci sulla nostra pagina Facebook. Durante l'anno,
              organizzeremo diversi eventi astronomici e manifestazioni
              speciali, come osservazioni di sciami meteorici, eclissi lunari e
              solari, opposizioni planetarie e comete luminose. Non perdete
              l'occasione di partecipare alle serate osservative "Luna in
              piazza," dove avrete la possibilità di utilizzare i telescopi dei
              nostri soci e vivere l'emozione dell'astronomia. Per restare
              sempre informati, visitate il sito del Circolo Astrofili
              Talmassons o seguiteci su Facebook. Inoltre, potrete trovare
              ulteriori annunci riguardanti le attività dell'Osservatorio su
              Radio Rai Regione e sui quotidiani locali come il Gazzettino del
              Friuli e il Messaggero Veneto. Siamo entusiasti di condividere la
              nostra passione per l'astronomia e vi aspettiamo all'Osservatorio
              per esplorare insieme l'universo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default calendario;
