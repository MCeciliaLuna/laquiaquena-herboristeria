import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import ButtonPedidos from "../../components/ButtonPedidos/ButtonPedidos";
import './Home.css'
import BotonWhatsapp from "../../components/BotonWhatsapp/BotonWhatsapp";

const Home = () => {
  return (
    <div>
        <Navbar />
        <BotonWhatsapp />
      <Carousel />
      <ButtonPedidos />
        <Footer />
    </div>
  );
};

export default Home;