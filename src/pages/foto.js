import React from "react";

import AlwaysTopNavbar from "../components/topnavbar";
import Footer from "../components/footer";
import FotoCard from "../components/foto/fotocard";

import { Tabs, Tab } from "react-bootstrap";

function foto() {
  const immagini = {
    placeholder: require("../components/foto/copertine/placeholder.png"),
    copertinaGruppolocale: require("../components/foto/copertine/ilgruppolocale.jpg"),
    copertinaOggettiMessier: require("../components/foto/copertine/gruppomessier.jpg"),
    copertinaCatalogoNGC: require("../components/foto/copertine/catalogongc.jpg"),
    copertinaCatalogoUGC: require("../components/foto/copertine/catalogougc.jpg"),
    copertinaCatalogoPGC: require("../components/foto/copertine/catalogopgc.jpg"),
    copertinaCatalogoVCC: require("../components/foto/copertine/catalogovcc.jpg"),
    copertinaCatalogoIC: require("../components/foto/copertine/catalogoic.jpg"),
    copertinaAltreGalassie: require("../components/foto/copertine/altregalassie.jpg"),
    // Aggiungi altri link delle immagini qui
  };

  return (
    <div className="pagecontainer">
      <AlwaysTopNavbar />

      <h1 className="titolopagina text-center">Foto</h1>

      <div class="container-fluid sottotitolopagina">
        <p class="text-start">
          Benvenuti nella sezione fotografica del CAST! In questa pagina potrete
          trovare la collezione di fotografie digitalizzate, immagini c.c.d e
          dati meteorici condivisi dai soci del Circolo Astrofili Talmassons.
          L'archivio delle immagini è enormemente più vasto di quanto proposto.
          Chi desiderasse un soggetto particolare, non disponibile tra le nostre
          immagini inserite in rete, lo può richiedere contattandoci tramite
          mail.
        </p>

        <p class="text-start">
          Tutte le immagini sono soggette a copyright e quindi tutelate dalle
          leggi vigenti. La loro (eventuale) utilizzazione sarà concessa, per
          scopi senza fini di lucro, da un'apposita decisione del Consiglio
          Direttivo dell'Associazione.
        </p>
      </div>
      <Tabs justify className="ilcasttab">
        <Tab eventKey="Le galassie" title="Le galassie">
          <p></p>
          <FotoCard
            titolo="Il gruppo locale"
            fotolink={immagini.copertinaGruppolocale}
            descrizione="Il Gruppo Locale è una comunità cosmica di oltre 80 galassie, prevalentemente di dimensioni modeste, di cui la Via Lattea è parte integrante. La sua posizione centrale di gravità è situata tra la Via Lattea e la maestosa Galassia di Andromeda, preludio a un futuro incontro spettacolare. Con un diametro di circa 10 milioni di anni luce, questo gruppo è un laboratorio naturale per studiare l'interazione tra galassie, la formazione galattica e le dinamiche su larga scala dell'Universo."
          />

          <FotoCard
            titolo="Oggetti del Catalogo Messier"
            fotolink={immagini.copertinaOggettiMessier}
            descrizione="Gli Oggetti Messier sono una collezione celeste di 110 nebulose, ammassi stellari e galassie catalogati dal astronomo Charles Messier nel XVIII secolo. Questa raccolta cosmica comprende affascinanti strutture come la Nebulosa di Orione e l'Ammasso Globulare M13. Questi oggetti sono spesso visibili anche con piccoli telescopi, arricchendo l'esperienza astronomica amatoriale. L'elenco Messier è un tesoro per gli appassionati di astronomia, offrendo uno sguardo stimolante alle meraviglie del cielo profondo."
          />

          <FotoCard
            titolo="Galassie del Catalogo NGC"
            fotolink={immagini.copertinaCatalogoNGC}
            descrizione="Il Catalogo NGC (New General Catalogue) elenca oltre 7.000 galassie, nebulose e oggetti celesti. Curato da Johann Dreyer nel 1888, offre uno sguardo su una varietà cosmica, dalle galassie luminose alle nebulose suggestive. Un tesoro per gli appassionati di astronomia e una risorsa essenziale per gli studiosi"
          />

          <FotoCard
            titolo="Galassie del Catalogo UGC"
            fotolink={immagini.copertinaCatalogoUGC}
            descrizione="Le galassie del Catalogo UGC (Uppsala General Catalogue) sono un insieme di oltre 12.000 galassie, catalogate per la prima volta nel 1973 dall'astronomo Peter Nilson. Questo ampio elenco celeste abbraccia una vasta gamma di strutture, dalle maestose galassie spirali alle galassie ellittiche e irregolari. Molte di queste galassie sono accessibili anche con strumenti amatoriali, consentendo agli appassionati di esplorare la diversità galattica. Il Catalogo UGC è un prezioso strumento per gli astronomi e un invito a esplorare le meraviglie del cielo profondo."
          />
          <FotoCard
            titolo="Galassie del Catalogo PGC"
            fotolink={immagini.copertinaCatalogoPGC}
            descrizione="Le galassie del Catalogo PGC (Principal Galaxies Catalog) sono oltre 700.000 oggetti celesti, catalogati per la prima volta nel 1989. Questo vasto elenco comprende una varietà di galassie, da spirali e ellittiche a irregolari. Il Catalogo PGC è una risorsa essenziale per gli astronomi, offrendo uno sguardo in profondità all'universo galattico."
          />
          <FotoCard
            titolo="Galassie del Catalogo VCC"
            fotolink={immagini.copertinaCatalogoVCC}
            descrizione="GLe galassie del Catalogo VCC (Virgo Cluster Catalog) sono un insieme di oltre 1.300 galassie, catalogate all'interno del famoso Ammasso di Virgo. Questa collezione cosmica, compilata per la prima volta nel 1959, rivela una varietà di forme galattiche, dalle spirali alle galassie ellittiche. Esplorare il Catalogo VCC offre preziose informazioni sulla struttura dell'ammasso e sull'evoluzione galattica all'interno di ambienti densi come quello di Virgo. Un punto di riferimento per gli studiosi di galassie in ammassi e uno sguardo affascinante verso la diversità galattica in contesti unici."
          />
          <FotoCard
            titolo="Oggetti del Catalogo IC"
            fotolink={immagini.copertinaCatalogoIC}
            descrizione="Gli oggetti del Catalogo IC (Index Catalogue) sono una collezione di oltre 5.000 oggetti celesti, creati per estendere il lavoro del Catalogo NGC. Questa lista, compilata per la prima volta nel 1895, include nebulose, ammassi stellari e galassie, ciascuno con una designazione numerica. Il Catalogo IC è una risorsa preziosa per gli astrofili e gli astronomi, consentendo l'identificazione e lo studio di oggetti spettacolari nel cielo, dalla Nebulosa del Granchio all'Ammasso Aperto IC 2391. Un compagno essenziale per chi esplora le profondità dell'Universo"
          />
          <FotoCard
            titolo="Altre Galassie"
            fotolink={immagini.copertinaAltreGalassie}
            descrizione="Ssplendide foto catturate negli anni dal gruppo CAST. Queste immagini mostrano meraviglie celesti, da galassie spirali a ammassi di stelle e galassie, offrendo affascinanti scorci dell'Universo. Queste immagini rivelano la bellezza e la varietà del nostro cosmo, un vero tesoro per gli amanti dell'astronomia e un'ispirazione per coloro che desiderano esplorare i segreti del cielo notturno."
          />
        </Tab>

        <Tab eventKey="Le stelle" title="Le stelle"></Tab>

        <Tab eventKey="Il Sistema Solare" title="Il Sistema Solare"></Tab>

        <Tab eventKey="Le nebulose" title="Le nebulose"></Tab>
      </Tabs>

      <Footer />
    </div>
  );
}

export default foto;
