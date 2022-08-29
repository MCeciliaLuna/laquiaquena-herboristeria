import React from 'react';
import './Login.css';

const login = () => {
  return (
    <div className="login-page bg-light text-center">
      <h2 className="pt-5 pb-2 d-block">Logueate</h2>
      <form className="mt-0 mb-5 mx-5">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label w-100">Nombre de usuario</label>
    <input type="email" className="input-login form-control w-50 m-2 text-center" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" className="input-login form-control w-50 m-2" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn text-light">Entrar</button>
</form>
    </div>
  );
};

export default login;
