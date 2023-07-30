import React from 'react'
import './copertina.css'
import osservatorio from '../img/osservatorioCAST.jpg';
import logoCAST from '../img/logoCASTbianco.png';

function copertina() {
  return (
    <div className="copertina-container">
      <div className="copertina">
        <img id="immagine-copertina" src={osservatorio} alt="Immagine dell'osservatorio CAST"></img>
        <img id="immagine-logo" src={logoCAST} alt="Circolo astrofili Talmassons"></img>
      </div>
    </div>
  )
}

export default copertina