import React from 'react'
import './copertina.css'
import osservatorio from '../../img/osservatorioCAST.jpg';
import logoCAST from '../../img/logoCASTbianco.png';

import { Link } from "react-router-dom";

function copertina() {
  return (
    <div className="copertina-container">
              
      <div className="copertina">
        <img id="immagine-copertina" src={osservatorio} alt="Immagine dell'osservatorio CAST"></img>
        <Link to='ilcast'>
          <img id="immagine-logo" src={logoCAST} alt="Circolo astrofili Talmassons" ></img>
        </Link>
      </div>
    </div>
  )
}

export default copertina