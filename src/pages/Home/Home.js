import ButtonPedidos from '../../components/ButtonPedidos/ButtonPedidos';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import IntroStevia from '../../components/IntroStevia/IntroStevia';
import Navbar from '../../components/Navbar/Navbar';
import ProductosDestacados from '../../components/ProductosDestacados/ProductosDestacados';
import './Home.css';


function Home() {
  return (
    <body>
      <Navbar />
      <ButtonPedidos />
      <Carousel />
      <IntroStevia />
      <ProductosDestacados />
      <Footer />
    </body>
  );
}

export default Home;