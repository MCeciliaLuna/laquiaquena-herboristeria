import Carousel from '../../components/Carousel/Carousel';
import Clientes from '../../components/Clientes/Clientes';
import Contacto from '../../components/Contacto/Contacto';
import IntroStevia from '../../components/IntroStevia/IntroStevia';
import ProductosDestacados from '../../components/ProductosDestacados/ProductosDestacados';
import './Home.css';


function Home() {
  return (
    <body>
      <Carousel />
      <IntroStevia />
      <ProductosDestacados />
      <Contacto />
      <Clientes />
    </body>
  );
}

export default Home;