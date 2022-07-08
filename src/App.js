import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import BotonWhatsapp from './components/BotonWhatsapp/BotonWhatsapp';
import Buscador from './components/Buscador/Buscador';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <BrowserRouter>
      <BotonWhatsapp />
      <Buscador />
      <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Error />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
