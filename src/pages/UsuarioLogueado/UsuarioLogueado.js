import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./UsuarioLogueado.css";

const UsuarioLogueado = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "USER" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  return (
    <>
    <Navbar />
    <div className="page-usuariologueado mb-5 mt-3 mx-5">
      <div className="mb-4 text-center text-light">
      <h4>En esta sección podrás administrar:</h4>
      </div>
      <Link to="/pedidosadmin">
      <button className="buttons-movile btn w-100 mb-4 p-5 text-light fs-4">PEDIDOS</button>
      </Link>
      <Link to="/productosadmin">
      <button className="buttons-movile btn w-100 mb-4 p-5 text-light fs-4">PRODUCTOS</button>
      </Link>
      <Link to="/usuariosadmin">
      <button className="buttons-movile btn w-100 mb-4 p-5 text-light fs-4">USUARIOS</button>
      </Link>
    </div>
    <Footer />
    </>
  );
};

export default UsuarioLogueado;
