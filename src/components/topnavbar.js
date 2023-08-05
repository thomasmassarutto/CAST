import React from "react";
import "./topnavbar.css";
import { Link } from "react-router-dom";
import logoCAST from "../img/logoCASTbianco.png";

function topnavbar() {
  return (
    <div className="topnavbar">
      <nav class="navbar">
        <div>
          <Link class="navbar-brand" to="/">
            <img src={logoCAST} alt="Bootstrap" width="" height="70"></img>
          </Link>
        </div>

        <div className="text-center">
          <h1 className="titolosito">Centro AStrofili Talmassons</h1>

          <div>
            <p className="sottotitolosito">
              <small>45°56'12" N - 13°06'52"E - 42 mt. s.l.m.</small>
            </p>
            <p className="sottotitolosito">
              <small>Via Cadorna 57 - 33030 Talmassons (UD)</small>
            </p>
          </div>
        </div>

        <div>
          <ul class="list-group list-group-flush">
            <li class="">
              <a href="https://www.facebook.com/castfvg">
                <i class="bi bi-facebook"></i> Circolo Astrofili Talmassons
              </a>
            </li>

            <li class="">
              <a href="MAILTO:info@castfvg.it">
                <i class="bi bi-envelope"></i> info@castfvg.it
              </a>
            </li>

            <li class="">
              <a href="MAILTO:circolo.astrofili.talmassons@gmail.com">
                <i class="bi bi-envelope"></i>{" "}
                circolo.astrofili.talmassons@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default topnavbar;
