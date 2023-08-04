import React from "react";

function direttivo() {
  return (
    <div class="card-body text-center cardbodyilcast ">
      <h5 class="card-title">Il direttivo del CAST</h5>

      <div className="row align-items-center ">
        <div className="col card">
          <div class="card-body">
            <h5 className="card-title">Presidente</h5>
            <p class="card-text">Cristian Liberale</p>
          </div>
        </div>
      </div>

      <div className="row align-items-center ">
        <div className="col card">
          <div class="card-body">
            <h5 className="card-title">Viceresidente</h5>
            <p class="card-text">Virginio Savani</p>
          </div>
        </div>
        <div className="col card">
          <div class="card-body">
            <h5 className="card-title">Segretario</h5>
            <p class="card-text">Federica Mattiussi</p>
          </div>
        </div>
        <div className="col card">
          <div class="card-body">
            <h5 className="card-title">Tesoriere</h5>
            <p class="card-text">Enrico Perissinotto</p>
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col card">
          <div class="card-body">
            <h5 className="card-title">Consiglieri effettivi</h5>
            <p class="card-text">Paolo Beltrame</p>
            <p class="card-text">Fabrizio Romanello</p>
            <p class="card-text">Francesco Scarpa</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col card">
          <div class="card-body">
            <h5 className="card-title">Revisori dei conti</h5>
            <p class="card-text">Giuseppe Campodall'Orto</p>
            <p class="card-text">Agostino Malisani</p>
          </div>
        </div>

        <div className="col card">
          <div class="card-body">
            <h5 className="card-title">Probiviri</h5>
            <p class="card-text">Michael Ronutti</p>
            <p class="card-text">Mauro Zorzenon</p>
            <p class="card-text">Stefano Codutti</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default direttivo;
