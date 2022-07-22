import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import BotonWhatsapp from './components/BotonWhatsapp/BotonWhatsapp';
import Buscador from './components/Buscador/Buscador';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Productos from './pages/Productos/Productos';
import Producto from './pages/Producto/Producto';

function App() {
  return (
      <BrowserRouter>
      <BotonWhatsapp />
      <Buscador />
      <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto" element={<Producto />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
