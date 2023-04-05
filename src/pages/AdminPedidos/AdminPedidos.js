import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardsAdminPedidos from "../../components/CardsAdminPedidos/CardsAdminPedidos";
import ButtonAdminVolver from "../../components/ButtonAdminVolver/ButtonAdminVolver";
import "./AdminPedidos.css";

const AdminPedidos = () => {
  if (
    !sessionStorage.getItem("role") ||
    !sessionStorage.getItem("access-token")
  ) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-evenly align-items-center pedidos-height">
        <ButtonAdminVolver />
        <h1 className="text-light mb-0 pb-0">Pedidos</h1>
      </div>
      <CardsAdminPedidos />
    </>
  );
};

export default AdminPedidos;
