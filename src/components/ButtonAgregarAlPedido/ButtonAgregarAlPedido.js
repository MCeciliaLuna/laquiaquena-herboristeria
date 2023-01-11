import React from 'react';

const ButtonAgregarAlPedido = (_id, producto) => {
console.log(_id)
  return (
    <button
                  type="button"
                  className="btn button-destacados-comprar text-light mt-3 align-items-end"
                > 
                  Comprar
                </button>
  );
};

export default ButtonAgregarAlPedido;