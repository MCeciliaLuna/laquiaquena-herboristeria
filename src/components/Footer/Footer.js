import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer d-block p-3">
    <h4 className="text-center text-light">Todos los derechos reservados a La Quiaqueña Herboristería | 2022</h4>
    <Link to="/login" className="text-light text-center">
      <p className="linklogueo text-light">Logueo de Administrador</p>
      </Link>
    </div>
  );
};

export default Footer;