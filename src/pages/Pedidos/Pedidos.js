import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TablePedidosAdmin from '../../components/TablePedidosAdmin/TablePedidosAdmin';
import ButtonAdminVolver from '../../components/ButtonAdminVolver/ButtonAdminVolver';

const Pedidos = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "USER" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-evenly align-items-center">
    <ButtonAdminVolver />
    <h2 className="text-light mb-0 pb-0">Pedidos</h2>
    </div>
      <TablePedidosAdmin />
      <Footer />
    </>
  );
};

export default Pedidos;