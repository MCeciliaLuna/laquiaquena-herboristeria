import ButtonAdminVolver from "../../components/ButtonAdminVolver/ButtonAdminVolver";
import Navbar from "../../components/Navbar/Navbar";
import FormPedido from "../../components/FormPedido/FormPedido";
import BotonWhatsapp from "../../components/BotonWhatsapp/BotonWhatsapp";
import Swal from "sweetalert2";

const MiPedido = () => {
  if (!sessionStorage.getItem("pedido")) {
    Swal.fire({
      color: "#161a1d",
      title: "No tenés ningún producto seleccionado todavía",
      timer: 1000,
      showConfirmButton: false,
    });
    window.location.href = "/productos";
  }
  return (
    <>
      <Navbar />
      <BotonWhatsapp />
      <div className="d-flex justify-content-evenly align-items-center">
        <ButtonAdminVolver />
        <h1 className="mb-0 text-light">Mi Pedido</h1>
      </div>
      <FormPedido />
    </>
  );
};

export default MiPedido;
