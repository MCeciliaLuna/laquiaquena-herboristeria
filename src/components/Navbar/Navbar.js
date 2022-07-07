import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
      <div className="navbar-completo pt-5 d-block text-center">
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid d-flex justify-content-around">
      <a className="navbar-brand text-light" href="/#">LA QUIAQUEÑA HERBORISTERÍA</a>
      <div className="d-flex" id="navbarSupportedContent">
            <a className="nav-link text-light" href="/#">Stevia NOA</a>
            <a className="nav-link text-light" href="/#">Marcas</a>
            <a className="nav-link text-light" href="/#" >Tienda</a>
      </div>
      </div>
  </nav>
  </div>
  );
};

export default Navbar;