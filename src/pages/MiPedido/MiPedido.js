import React from 'react';
import ButtonUserVolverPedido from '../../components/ButtonUserVolverPedido/ButtonUserVolverPedido';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import FormPedido from '../../components/FormPedido/FormPedido';
import './MiPedido.css'

const MiPedido = () => {
  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-evenly align-items-center">
    <ButtonUserVolverPedido />
    <h1 className="mb-0 text-light">Mi Pedido</h1>
    </div>
      <FormPedido />
      <Footer />
    </>
  );
};

export default MiPedido;