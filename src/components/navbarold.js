// rfce
import React from 'react'
import './navbar.css'

function navbar() {
  return (
    <div className='mainpagenavbar'>
    <nav className='mainpagenavbarmenu'>
      <ul classname='mainpagenavbarul'>
      <li classname='mainpagenavbali'>Foto</li>
        <li classname='mainpagenavbali'>Articoli</li>
        <li classname='mainpagenavbali'>Costellazioni</li>
        <li classname='mainpagenavbali'>Sistema solare</li>
        <li classname='mainpagenavbali'> Dizionario</li>
      </ul>
    </nav>
    </div>
  )
}

export default navbar