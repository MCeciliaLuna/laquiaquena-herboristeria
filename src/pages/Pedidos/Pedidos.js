import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TablePedidosAdmin from '../../components/TablePedidosAdmin/TablePedidosAdmin';

const Pedidos = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "USER" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  return (
    <>
    <Navbar />
      <TablePedidosAdmin />
      <Footer />
    </>
  );
};

export default Pedidos;