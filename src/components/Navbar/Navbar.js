import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid d-flex justify-content-around">
      <a className="navbar-brand text-light" href="/#">LA QUIAQUEÑA HERBORISTERÍA</a>
      <form>
        <input className="p-1 border-0 rounded-3" type="search" />
        <button className="boton-buscador mx-1 p-1 border-0 rounded-3">Buscar</button>
      </form>
      <div className="d-flex" id="navbarSupportedContent">
            <a className="nav-link text-light" href="/#">Stevia NOA</a>
            <a className="nav-link text-light" href="/#">Marcas</a>
            <a className="nav-link text-light" href="/#" >Tienda</a>
      </div>
      </div>
  </nav>
  );
};

export default Navbar;