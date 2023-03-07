import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import ButtonPedidos from "../../components/ButtonPedidos/ButtonPedidos";
import './Home.css'

const Home = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "ADMIN" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
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