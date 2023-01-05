import React from 'react';
import ButtonUserVolver from '../../components/ButtonUserVolver/ButtonUserVolver';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import TablePedido from '../../components/TablePedido/TablePedido';

const PedidoPage = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "ADMIN" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-evenly align-items-center">
    <ButtonUserVolver />
    <h2 className="mb-0 text-light">Mi Pedido</h2>
    </div>
      <TablePedido />
      <Footer />
    </>
  );
};

export default PedidoPage;