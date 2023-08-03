/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function mappa() {
  return (
    <div className="mappawrapper">
      <div className="mainpagesection">
        <iframe
          titie="mappagooglemaps"
          className="googleelement"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.7630717024003!2d13.110924675342684!3d45.93603500183492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477bc8f30ba6fc8d%3A0x6844ad277a8ee594!2sOsservatorio%20Astronomico%20di%20Talmassons!5e0!3m2!1sit!2sit!4v1690881544182!5m2!1sit!2sit"
          allowfullscreen="TRUE"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="mainpageindicazionitestuali">
          <div>
            <i class="bi bi-geo-alt-fill littleicon"></i>
          </div>

          <div>
            <p className="mainpagetitolosezione">Osservatorio</p>
            <p>Via Cadorna 57 - 33030 Talmassons (UD)</p>
            <p>Breve storia dell'osservatorio</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Commodo viverra maecenas accumsan lacus. Nulla facilisi nullam
              vehicula ipsum. Turpis egestas sed tempus urna et pharetra
              pharetra massa. Morbi tempus iaculis urna id volutpat. Aliquam
              malesuada bibendum arcu vitae elementum curabitur vitae. Cras
              semper auctor neque vitae tempus quam. Aliquam sem fringilla ut
              morbi tincidunt augue. Urna neque viverra justo nec ultrices.
              Facilisis magna etiam tempor orci eu lobortis elementum nibh.
              Commodo viverra maecenas accumsan lacus vel. Malesuada proin
              libero nunc consequat interdum varius. Fermentum iaculis eu non
              diam phasellus. A scelerisque purus semper eget duis at tellus at
              urna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mappa;
