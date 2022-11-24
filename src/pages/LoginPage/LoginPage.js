import React from 'react';
import './LoginPage.css';
import Login from '../../components/Login/Login'
import ButtonPaginaprincipal from '../../components/ButtonPaginaPrincipal/ButtonPaginaprincipal';

const LoginPage = () => {

  return (
    <div className="login-page bg-light text-center position-relative">
      <div className="position-absolute top-50 start-50 translate-middle">
      <h2 className="text-login fs-1 pt-0 pb-2 d-block text-light">Ingresá</h2>
      <Login />
      <ButtonPaginaprincipal />
    </div>
    </div>
  );
};

export default LoginPage;
