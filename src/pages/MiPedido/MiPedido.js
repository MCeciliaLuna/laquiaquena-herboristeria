import React from 'react';
import ButtonAdminVolver from '../../components/ButtonAdminVolver/ButtonAdminVolver';
import FormPedido from '../../components/FormPedido/FormPedido';
import './MiPedido.css'
import BotonWhatsapp from '../../components/BotonWhatsapp/BotonWhatsapp';
import { Navigate } from 'react-router-dom';

const MiPedido = () => {
  const pedidos = localStorage.getItem("pedido") || null;

  const emptyCartCase = () => {
    alert("𝗡𝗢 seleccionaste 𝗻𝗶𝗻𝗴𝘂́𝗻 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝗼 todavía! 🤨");
    return(<Navigate to='/productos' replace />);
  };

  return (
    <>
      {!pedidos ?  emptyCartCase() : (
        <>
          <BotonWhatsapp />
          <div className="d-flex justify-content-evenly align-items-center">
            <ButtonAdminVolver />
            <h1 className="mb-0 text-light">Mi Pedido</h1>
          </div>
          <FormPedido />
        </>
        )}
    </>
  );
};

export default MiPedido;