import React from "react";
import "./topnavbar.css";
import logoCAST from "../img/logoCASTbianco.png";

function topnavbar() {
  return (
    <div className="topnavbarwrapper sticky-top">
      <div className="topnavbar">
        <nav class="navbar">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src={logoCAST}
                alt="Logo"
                width="auto"
                height="60"
                class="d-inline-block align-text-top"
              ></img>
            </a>
          </div >

          <div className="brand d-flex flex-column container-fluid nav-item">
          <a class="navbar-brand titolo" href="#">
          Circolo AStrofili Talmassons
          </a>
          <small className="sottotitolocentrale">45°56'12" N - 13°06'52"E - 42 mt. s.l.m.</small>
          <small className="sottotitolocentrale">Via Cadorna 57 - 33030 Talmassons (UD)</small>
          </div>

          <div className="topnavbarcontatti nav-item d-flex flex-column">
            <i class="bi bi-facebook">
            <a href="https://www.facebook.com/castfvg">
                  <span> Circolo Astrofili Talmassons</span>
                </a>
            </i>
            <i class="bi bi-envelope">
            <a href="MAILTO:info@castfvg.it">
                  <span> info@castfvg.it</span>
                </a>
            </i>
            <i class="bi bi-envelope">
            <a href="MAILTO:circolo.astrofili.talmassons@gmail.com">
                  <span> circolo.astrofili.talmassons@gmail.com</span>
                </a>

            </i>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default topnavbar;
