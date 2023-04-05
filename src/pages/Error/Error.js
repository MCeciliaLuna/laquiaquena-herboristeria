import React from "react";
import "../Error/Error.css";

const Error = () => {
  const volverAtras = () => {
    window.history.back();
  };
  return (
    <div className="errorpage d-flex justify-content-center align-items-center container text-light p-5">
      <div>
        <div>
          <h1 className="text-center">
            Ups! No encontramos lo que estabas buscando
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn text-light text-center m-3 w-auto"
            onClick={volverAtras}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
