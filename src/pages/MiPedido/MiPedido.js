import React from 'react';
import ButtonAdminVolver from '../../components/ButtonAdminVolver/ButtonAdminVolver';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import FormPedido from '../../components/FormPedido/FormPedido';
import './MiPedido.css'
import BotonWhatsapp from '../../components/BotonWhatsapp/BotonWhatsapp';

const MiPedido = () => {
  return (
    <>
    <Navbar />
    <BotonWhatsapp />
    <div className="d-flex justify-content-evenly align-items-center">
    <ButtonAdminVolver />
    <h1 className="mb-0 text-light">Mi Pedido</h1>
    </div>
      <FormPedido />
      <Footer />
    </>
  );
};

export default MiPedido;