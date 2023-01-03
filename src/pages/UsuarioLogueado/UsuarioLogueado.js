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
    <div className="page-usuariologueado m-5">
      <Link to="/pedidosadmin">
      <button className="btn w-100 mb-4 p-5 text-light fs-4">Pedidos</button>
      </Link>
      <Link to="/productosadmin">
      <button className="btn w-100 mb-4 p-5 text-light fs-4">Productos</button>
      </Link>
      <Link to="/usuariosadmin">
      <button className="btn w-100 mb-4 p-5 text-light fs-4">Usuarios registrados</button>
      </Link>
    </div>
    <Footer />
    </>
  );
};

export default UsuarioLogueado;
