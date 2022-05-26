import './App.css';
import Carousel from './components/Carousel/Carousel';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import IntroStevia from './components/IntroStevia/IntroStevia';
import Marcas from './components/Marcas/Marcas';
import Navbar from './components/Navbar/Navbar';
import ProductosDestacados from './components/ProductosDestacados/ProductosDestacados';

function App() {
  return (
    <body>
      <Navbar />
      <Carousel />
      <IntroStevia />
      <Marcas />
      <ProductosDestacados />
      <Contacto />
      <Footer />
    </body>
  );
}

export default App;
