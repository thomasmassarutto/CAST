import React from "react";
import "./topnavbar.css";
import logoCAST from "../img/logoCASTbianco.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function topnavbar() {
  return (
    <div className="topnavbarwrapper sticky-top">
      <div className="topnavbar">
        <nav class="navbar">

          <div class="container-fluid d-flex align-items-center">
            <Link className="navbar-brand" to="/">
              <img className="imagecast"
                src={logoCAST}
                alt="Logo"
                width="auto"
                height="60"
                class="d-inline-block align-text-top"
              ></img>
            </Link >
          </div>

          <div className="brand d-flex flex-column container-fluid nav-item">
          <h1 class="navbar-brand titolo">
          Circolo AStrofili Talmassons
          </h1>
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
