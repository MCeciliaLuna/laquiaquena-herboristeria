import Carousel from '../../components/Carousel/Carousel';
import ButtonPedidos from '../../components/ButtonPedidos/ButtonPedidos';
import './Home.css';
import BotonWhatsapp from '../../components/BotonWhatsapp/BotonWhatsapp';

const Home = () => {
  return (
    <div>
      <BotonWhatsapp />
      <Carousel />
      <ButtonPedidos />
    </div>
  );
};

export default Home;
