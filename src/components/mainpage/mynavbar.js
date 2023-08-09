// rfce
import React from "react";
import "./mynavbar.css";
import { Outlet, Link } from "react-router-dom";

function mynavbar() {
  return (
    <div className="mainpagenavbar">
      <nav className="mainpagenavbarmenu">
        <ul class="nav nav-underline nav-fill mainpagenavbarul">
          <li class="nav-item">
            <a class="nav-link mainpagenavbarlink" href="/Foto">
              Foto
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mainpagenavbarlink" href="#">
              Articoli
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mainpagenavbarlink" href="#">
              Costellazioni
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link mainpagenavbarlink" href="#">
              Sistema solare
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mainpagenavbarlink" href="#">
              Dizionario
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default mynavbar;
