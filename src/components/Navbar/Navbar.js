import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid d-flex justify-content-around">
    <a className="navbar-brand" href="/#">LA QUIAQUEÑA HERBORISTERÍA</a>
    <form>
      <input className="p-1 border-1" type="search" />
      <button className="mx-1 p-1 border-1">Buscar</button>
    </form>
    <div className="d-flex" id="navbarSupportedContent">
          <a className="nav-link" href="/#">Stevia NOA</a>
          <a className="nav-link" href="/#">Marcas</a>
          <a className="nav-link" href="/#" >Tienda</a>
    </div>
  </div>
</nav>
  );
};

export default Navbar;