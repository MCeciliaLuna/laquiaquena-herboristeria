import React from 'react';
import './Buscador.css';

const Buscador = () => {
  return (
    <div className="buscador fixed-top d-flex justify-content-center p-2 w-100">
      <form>
        <input className="input-buscador p-1 border-0 rounded-3" type="search" />
        <button className="boton-buscador mx-1 p-1 border-0 rounded-3">Buscar</button>
      </form>
    </div>
  );
};

export default Buscador;