import React from 'react';
import BotonWhatsapp from '../../components/BotonWhatsapp/BotonWhatsapp';
import Footer from '../../components/Footer/Footer';
import ModalRegistro from '../../components/ModalRegistro/ModalRegistro';
import './LoginInicial.css'

const LoginInicial = () => {

  return (
    <>
    <div className="height-login">
    <BotonWhatsapp />
    <div className="d-flex justify-content-center align-items-center text-center h-100">
      <form className="pb-5 m-5">
        <div className="pb-4">
    <h3 className="text-light">Bienvenid@ a</h3>
    <h1 className="text-light pb-2">🌿LA QUIAQUEÑA HERBORISTERÍA🌿</h1>
    <h4 className="text-light">Registrate para continuar</h4>
    </div>
  <div className="mb-3 w-100">
    <input type="email" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="EMAIL" />
  </div>
  <div className="mb-3 w-100">
    <input type="password" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CONTRASEÑA" />
  </div>
  <div className="w-100 d-flex justify-content-end">
  <button type="submit" className="btn border-0 text-light me-3">INGRESAR</button>
  <ModalRegistro />
  </div>
</form>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default LoginInicial;