import ButtonPedidos from '../../components/ButtonPedidos/ButtonPedidos';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import IntroStevia from '../../components/IntroStevia/IntroStevia';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';


function Home() {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "ADMIN" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  return (
    <body>
      <Navbar />
      <ButtonPedidos />
      <Carousel />
      <IntroStevia />
      <Footer />
    </body>
  );
}

export default Home;