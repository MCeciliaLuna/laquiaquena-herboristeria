import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import ButtonPedidos from "../../components/ButtonPedidos/ButtonPedidos";
import './Home.css'

const Home = () => {
  return (
    <div>
        <Navbar />
      <Carousel />
      <ButtonPedidos />
        <Footer />
    </div>
  );
};

export default Home;