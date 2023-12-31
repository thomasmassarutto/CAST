// rfce
import React from "react";
import "./footer.css";

import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function footer() {
  return (
    <div className="footerwrapper">
      <footer className="footer">
        <div className="collab divfooter">
          <div>
            <a href="http://www.skypoint.it">
              <img
                src="https://www.skypoint.it/media/logo/stores/1/skypoint-logo.png"
                alt="skypoint"
              ></img>
            </a>
          </div>
          <p>
            <b>Skypoint s.r.l.</b>
          </p>
          <p>Via Zorutti, 145/11 - 33030 - CAMPOFORMIDO (UD)</p>
          <p>
            e-mail: <a href="mailto:info@skypoint.it">info@skypoint.it</a>
          </p>
          <p>
            TEL: <a href="tel:00390432652609">+39 0432 652609</a>
          </p>
          <p>
            WHATSAPP:{" "}
            <a
              href="https://wa.me/393392009603"
              target="_blank"
              rel="noopener noreferrer"
            >
              +39 0432 652609
            </a>
          </p>
        </div>

        <div className="contattifooter divfooter">
          <div className="contattifootertitolo">
            <p>I nostri contatti</p>
          </div>
          <div className="contattofooter">
            <MDBBtn
              className="m-1 footercontattiicona"
              style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com/castfvg"
            >
              <MDBIcon fab icon="facebook-f" /> Facebook
            </MDBBtn>
          </div>

          <div className="contattofooter">
            <MDBBtn className="m-1 footercontattiicona"
            href="MAILTO:info@castfvg.it"
            >
              <MDBIcon fas icon="envelope" /> Mail
            </MDBBtn>
          </div>

          <div className="contattofooter">
            <MDBBtn
              className="m-1 footercontattiicona"
              style={{ backgroundColor: "#ed302f" }}
              href="https://www.youtube.com/@AstrofiliTalmassons"
            >
              <MDBIcon fab icon="youtube" /> Youtube
            </MDBBtn>
          </div>

          <div className="contattofooter">
            <MDBBtn
              className="m-1 footercontattiicona"
              style={{ backgroundColor: "#333333" }}
              href="#"
            >
              <MDBIcon fab icon="github" /> Github
            </MDBBtn>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
