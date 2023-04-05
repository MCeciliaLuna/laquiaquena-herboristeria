import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Administrador.css";
import Swal from "sweetalert2";

const Administrador = () => {
  if (
    !sessionStorage.getItem("role") ||
    !sessionStorage.getItem("access-token")
  ) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }

  const alertPedidos = () => {
    Swal.fire({
      color: "#161a1d",
      text: `🚨🚨🚨 Recordá chequear el envío de 𝗖𝗢𝗠𝗣𝗥𝗢𝗕𝗔𝗡𝗧𝗘𝗦 𝗗𝗘 𝗣𝗔𝗚𝗢 por 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 📲 y el 𝗥𝗘𝗖𝗜𝗕𝗜𝗠𝗜𝗘𝗡𝗧𝗢 𝗗𝗘 𝗧𝗥𝗔𝗡𝗦𝗙𝗘𝗥𝗘𝗡𝗖𝗜𝗔𝗦 en tu 𝘤𝘶𝘦𝘯𝘵𝘢 𝘣𝘢𝘯𝘤𝘢𝘳𝘪𝘢 💳 de los 𝙥𝙚𝙙𝙞𝙙𝙤𝙨 que figuran 𝗣𝗔𝗚𝗔𝗗𝗢𝗦✅ 🚨🚨🚨`,
      confirmButtonText: "ENTENDIDO",
      confirmButtonColor: "#7fab1f",
    });
  };

  return (
    <>
      <Navbar />
      <div className="page-administrador d-flex flex-column justify-content-center align-items-center">
        <Link to="/administrador/pedidos">
          <h2
            className="buttons-movile btn mb-4 p-5 text-light"
            onClick={alertPedidos}
          >
            PEDIDOS ✅
          </h2>
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
