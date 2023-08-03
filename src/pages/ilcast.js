import AlwaysTopNavbar from "../components/topnavbar";
import Footer from "../components/footer";

import Direttivo from "../components/ilcast/direttivo";
import GruppiRicerca from "../components/ilcast/gruppiricerca";
import Storia from "../components/ilcast/storia";

import { Tabs, Tab } from "react-bootstrap";

import "../components/ilcast/ilcast.css";

function ilcast() {
  return (
    <div className="ilcastmaincontainer">
      <AlwaysTopNavbar />

      <h1 className="titolopagina text-center">IL CAST</h1>

      <Tabs justify className="ilcasttab">
        <Tab eventKey="Direttivo" title="Direttivo" className="nometab">
          <Direttivo />
        </Tab>
        <Tab eventKey="Gruppi di ricerca" title="Gruppi di ricerca">
          <GruppiRicerca />
        </Tab>
        <Tab eventKey="Storia" title="Storia">
          <Storia />
        </Tab>
      </Tabs>
      <Footer />
    </div>
  );
}

export default ilcast;
