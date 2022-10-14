import React from 'react';
import '../Error/Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  localStorage.removeItem('access-token')
  return (
    <div className="errorpage d-flex justify-content-center align-items-center container text-light p-5">
    <div>
        <div>
      <h1 className="text-center">Ups! No encontramos lo que estabas buscando</h1>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/">
      <button className="btn text-light text-center m-3 w-auto">Volver a página principal</button>
      </Link>
    </div>
    </div>
    </div>
  );
};

export default Error;