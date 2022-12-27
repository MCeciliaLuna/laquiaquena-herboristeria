import React from 'react';
import { Link } from 'react-router-dom';

const ButtonPedidos = () => {
  return (
    <>
    <Link to="/mipedido">
      <button type="button" className="btn border-0 text-light btn-flotante">Ver mi pedido</button>
      </Link>
    </>
  );
};

export default ButtonPedidos;