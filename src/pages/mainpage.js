
import './mainpage.css';
import AlwaysTopNavbar from '../components/topnavbar';
import Copertina from '../components/copertina';
import MyNavbar from '../components/mynavbar';
import MainContainer from '../components/maincontainer';
import Footer from '../components/footer';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <div className="App">
      <AlwaysTopNavbar />
      <Copertina />
      <MyNavbar />
      <MainContainer />
      <Footer />
      
    </div>
  );
}

export default App;
