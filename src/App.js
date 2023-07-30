
import './App.css';
import AlwaysTopNavbar from './components/topnavbar';
import Copertina from './components/copertina';
import Navbar from './components/navbar';

import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <AlwaysTopNavbar />
      <Copertina />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
