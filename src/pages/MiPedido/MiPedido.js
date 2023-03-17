import React from 'react';
import ButtonAdminVolver from '../../components/ButtonAdminVolver/ButtonAdminVolver';
import FormPedido from '../../components/FormPedido/FormPedido';
import './MiPedido.css'
import BotonWhatsapp from '../../components/BotonWhatsapp/BotonWhatsapp';

const MiPedido = () => {
  if (!localStorage.getItem("pedido")) {
    alert("𝗡𝗢 seleccionaste 𝗻𝗶𝗻𝗴𝘂́𝗻 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝗼 todavía! 🤨");
    window.location.href = "/productos";
  }
  return (
    <>
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