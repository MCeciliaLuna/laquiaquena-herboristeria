import { Link } from "react-router-dom";
import "./Administrador.css";

const Administrador = () => {

  if (
    !localStorage.getItem("role") ||
    !localStorage.getItem("access-token")
  ) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  return (
    <>
      <div className="page-administrador d-flex flex-column justify-content-center align-items-center">
        <Link to="/administrador/pedidos">
          <h2 className="buttons-movile btn mb-4 p-5 text-light">PEDIDOS ✅</h2>
        </Link>
        <Link to="/administrador/productos">
          <h2 className="buttons-movile btn mb-4 p-5 text-light">
            PRODUCTOS 🌿
          </h2>
        </Link>
      </div>
    </>
  );
};

export default Administrador;
