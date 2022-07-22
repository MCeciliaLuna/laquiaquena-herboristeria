import React from 'react';
import './Buscador.css';

const Buscador = () => {
  return (
    <div className="buscador fixed-top d-flex justify-content-center p-2 w-100">
      <form>
        <input className="input-buscador p-2 border-0 rounded-3 bg-light" type="search" maxLength="30" />
        <button className="boton-buscador mx-1 p-2 border-0 rounded-3">Buscar</button>
      </form>
    </div>
  );
};

export default Buscador;