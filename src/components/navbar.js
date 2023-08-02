// rfce
import React from "react";
import "./navbar.css";

function navbar() {
  return (
    <div className="mainpagenavbar">
      <nav className="mainpagenavbarmenu">
        <ul class="nav nav-underline nav-fill">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Foto
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Articoli
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Costellazioni
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Sistema solare
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Dizionario
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
