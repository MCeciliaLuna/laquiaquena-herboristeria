import React from 'react';
import BotonWhatsapp from '../../components/BotonWhatsapp/BotonWhatsapp';
import Footer from '../../components/Footer/Footer';
import Login from '../../components/Login/Login';
import './LoginInicial.css'

const LoginInicial = () => {
  localStorage.clear();
  return (
    <>
    <div className="height-login">
    <BotonWhatsapp />
    <Login />
    <Footer />
    </div>
    </>
  );
};

export default LoginInicial;