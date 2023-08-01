import React from 'react'

function prenotaunavisita() {
  return (
    <div className='prenotaunavisitawrapper'>
        <div className='prenotaunavisita'>
            <p className='aperturatitolo'>Aperture straoridnarie</p>
            <p className='aperturatesto'> 
              Visita la cupola e osserva le stelle con i nostri telecopi in maniera privata.<br></br>
              L'offerta è dedicata a scolaresche, associazioni e gruppi di persone.<br></br>
              Data e orario devono essere concordate per tempo, possono subire variazioni in base al meteo e al calendario astronomico.
            </p>
            <ul className='prenotaunavisitalista'>
              <li>€ 5,00 a persona</li>
              <li>minimo 8 persone</li>
            </ul>
            <p className='aperturaprenota'>Contattaci su <a href="http://m.me/castfvg" target="_blank" rel="noreferrer">Messanger</a> o via <a href="MAILTO:info@castfvg.it">Mail</a></p>
          </div>
    </div>
  )
}

export default prenotaunavisita