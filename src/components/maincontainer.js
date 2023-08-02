import React from 'react'
import './maincontainer.css';
import Calendario from './calendario';
import Mappa from './mappa';
import AperturaPrivata from './aperturaprivata';
import AperturaPubblica from './aperturapubblica';

function maincontainer() {
  return (
    <div className='maincontainerwrapper'>
        <div className='maincontainer'>
          
          <div className='maincontainerelement'>
            <Calendario />
          </div>
          
          <div className='maincontaineraperture'>
            <div className='Apertura'>
            <AperturaPrivata />
            </div>
            <div className='Apertura'>
            <AperturaPubblica/>
            </div>
          </div>

          <div className='maincontainerelement'>
            <Mappa/>
          </div>
          
        </div>
    </div>
  )
}

export default maincontainer