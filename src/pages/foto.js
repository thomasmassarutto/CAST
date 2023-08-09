import React from "react";

import AlwaysTopNavbar from "../components/topnavbar";
import Footer from "../components/footer";

import { Tabs, Tab } from "react-bootstrap";

function foto() {
  return (
    <div className="pagecontainer">
      <AlwaysTopNavbar />

      <h1 className="titolopagina text-center">Foto</h1>

      <div class="container-fluid">  
      <p class="text-start">
        Benvenuti nella sezione fotografica del CAST! In questa pagina potrete
        trovare la collezione di fotografie digitalizzate, immagini c.c.d e dati
        meteorici condivisi dai soci del Circolo Astrofili Talmassons.
        L'archivio delle immagini è enormemente più vasto di quanto proposto.
        Chi desiderasse un soggetto particolare, non disponibile tra le nostre
        immagini inserite in rete, lo può richiedere contattandoci tramite mail.
      </p>

      <p class="text-start">
        Tutte le immagini sono soggette a copyright e quindi tutelate dalle
        leggi vigenti. La loro (eventuale) utilizzazione sarà concessa, per
        scopi senza fini di lucro, da un'apposita decisione del Consiglio
        Direttivo dell'Associazione.
      </p>
      </div>
      <Tabs justify className="ilcasttab">
        <Tab eventKey="Le galassie" title="Le galassie"></Tab>

        <Tab eventKey="Le stelle" title="Le stelle"></Tab>

        <Tab eventKey="Il Sistema Solare" title="Il Sistema Solare"></Tab>

        <Tab eventKey="Le nebulose" title="Le nebulose"></Tab>
      </Tabs>
      <Footer />
    </div>
  );
}

export default foto;
