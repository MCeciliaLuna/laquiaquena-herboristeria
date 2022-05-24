import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import IntroStevia from './components/IntroStevia/IntroStevia';
import Marcas from './components/Marcas/Marcas';
import Navbar from './components/Navbar/Navbar';
import ProductosDestacados from './components/ProductosDestacados/ProductosDestacados';

function App() {
  return (
    <div>
      <Navbar />
      <Carrousel />
      <IntroStevia />
      <Marcas />
      <ProductosDestacados />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
