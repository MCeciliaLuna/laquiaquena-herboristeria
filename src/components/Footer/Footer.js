import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer d-block ">
    <h4 className="text-center mt-4 text-light pt-5">Todos los derechos reservados a La Quiaqueña Herboristería | 2022</h4>
    <a href="/login" className="text-light text-center m-0">
      <p className="linklogueo">Logueo de Administrador</p>
      </a>
    </div>
  );
};

export default Footer;