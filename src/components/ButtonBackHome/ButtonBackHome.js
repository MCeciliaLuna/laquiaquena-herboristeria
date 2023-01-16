import React from 'react';

const ButtonBackHome = () => {
  const volverAtras = () =>{
    window.location.href ="/home"
  }
  return (
      <button className="btn text-light border-0 mx-5 mt-2 mb-3" onClick={volverAtras}>
      Volver
      </button>
  );
};

export default ButtonBackHome;