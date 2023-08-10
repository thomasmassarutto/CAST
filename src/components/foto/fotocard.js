import React from "react";

//props: titolo, fotolink, descrizione
function fotocard(props) {
  return (
    <div>
      <div class="card mb-3">
        <div class="row g-1">
          <div class="col-md-3">
            <img
              src={props.fotolink}
              class="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">{props.titolo}</h5>
              <p class="card-text">{props.descrizione}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default fotocard;
