import BotonWhatsapp from '../../components/BotonWhatsapp/BotonWhatsapp';
// import Buscador from '../../components/Buscador/Buscador';
import Carousel from '../../components/Carousel/Carousel';
// import Clientes from '../../components/Clientes/Clientes';
// import Contacto from '../../components/Contacto/Contacto';
import Footer from '../../components/Footer/Footer';
import IntroStevia from '../../components/IntroStevia/IntroStevia';
import Navbar from '../../components/Navbar/Navbar';
import ProductosDestacados from '../../components/ProductosDestacados/ProductosDestacados';
import './Home.css';


function Home() {
  localStorage.removeItem('access-token') 
  return (
    <body>
      {/* <Buscador /> */}
      <Navbar />
      <BotonWhatsapp />
      <Carousel />
      <IntroStevia />
      <ProductosDestacados />
      {/* <Contacto /> */}
      {/* <Clientes /> */}
      <Footer />
    </body>
  );
}

export default Home;