import React from 'react';
import ButtonUserVolverPedido from '../../components/ButtonUserVolverPedido/ButtonUserVolverPedido';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import TablePedido from '../../components/TablePedido/TablePedido';
import './PedidoPage.css'

const PedidoPage = () => {
  
  if (!localStorage.getItem("pedido")) {
      alert('No tenés seleccionado ningún producto para comprar')
      window.location = "/productos"
    }

  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "ADMIN" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-evenly align-items-center">
    <ButtonUserVolverPedido />
    <h2 className="mb-0 text-light">Mi Pedido</h2>
    </div>
      <TablePedido />
      <Footer />
    </>
  );
};

export default PedidoPage;