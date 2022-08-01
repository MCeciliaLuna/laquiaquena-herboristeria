import Carousel from '../../components/Carousel/Carousel';
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
    </body>
  );
}

export default Home;