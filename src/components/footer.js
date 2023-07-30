// rfce
import React from 'react'
import './footer.css'
import foto from '../img/FotoGFonts.png';
import mail from '../img/MailGFonts.png';
import facebook from '../img/facebook.png';
import github from '../img/github-mark.png';

function footer() {
  return (
    <div className='footer'>

        <div className='collab'>
        <a href="http://www.skypoint.it"><img src="https://www.skypoint.it/media/logo/stores/1/skypoint-logo.png" alt="skypoint"></img></a>
        <p><b>Skypoint s.r.l.</b></p>
        <p>Via Zorutti, 145/11 - 33030 - CAMPOFORMIDO (UD)</p>
        <p>e-mail: <a href="mailto:info@skypoint.it">info@skypoint.it</a></p>
        <p>TEL: <a href="tel:00390432652609">+39 0432 652609</a></p>
        <p>WHATSAPP: <a href="https://wa.me/393392009603" target="_blank" rel="noopener noreferrer">+39 0432 652609</a></p>
        </div>

        <div className='contattifooter'>
          <ul className='elencocontatti'>
            <li>
              <div className='iconwrapper'>
                <img className='icon' src={foto} alt="inviaci una foto"></img>
              </div>
            <p>Inviaci una foto</p>
            </li>

            <li >
              <div className='iconwrapper'>
                <img className='icon' src={mail} alt="contattaci"></img>
              </div>
              <p><a href="MAILTO:info@castfvg.it"><b>info@castfvg.it</b></a></p>
            </li>
            
            <li>
              <div className='iconwrapper'>
                <img className='icon' src={facebook} alt="seguici su Facebook"></img>
              </div>
              <p><a href="https://www.facebook.com/castfvg"><b>Circolo Astrofili Talmassons</b></a></p>
            </li>

            <li>
              <div className='iconwrapper'>
                <img className='icon' src={github} alt="git helpme"></img>
              </div>
              <p>Aiutaci su GitHub</p> 
            </li>
          </ul>
        </div>
    </div>
  )
}

export default footer