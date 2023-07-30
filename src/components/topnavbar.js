import React from 'react'
import './topnavbar.css';
import logoCAST from '../img/logoCASTbianco.png';

function topnavbar() {
  return (
    <div className='topnavbar'>
    <nav className='navbar1'>

        <div className='logo'>
          <img id='castlogo' src={logoCAST} alt="Circolo astrofili Talmassons"></img>
        </div>

        <div className='centro'>
            <p id="CAST-titolo">Circolo AStrofili Talmassons</p>
            <p id='CAST-coordinate'>45°56'12" N - 13°06'52"E - 42 mt. s.l.m.</p>
            <p id='CAST-coordinate'>Via Cadorna 57 - 33030 Talmassons (UD)</p>
        </div>

        <div className='contatti'>
          <div>
          <p id="contatti">Contatti:</p>
          </div>
          <div className='listacontatti'>
            <ul>
              <li className='listitem'><a href="MAILTO:info@castfvg.it"><b>info@castfvg.it</b></a></li>
              <li className='listitem'><a href="MAILTO:circolo.astrofili.talmassons@gmail.com"><b>circolo.astrofili.talmassons@gmail.com</b></a></li>
            </ul>
          </div>
        </div>
       
    </nav>
    </div>
  )
}

export default topnavbar