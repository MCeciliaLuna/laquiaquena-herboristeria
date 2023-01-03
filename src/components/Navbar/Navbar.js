import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const volverLoginInicial = () => {
    if (
      window.confirm("¿Estás segur@ que querés cerrar sesión?")
    ) {
      window.location.href = "/";
    }
  };
  return (
      <div className="navbar-completo d-block text-center">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-around">
    <div className="d-flex align-items-center link-navbar" href="#"
          onClick={volverLoginInicial}>
      <img src={logo} className="logo-navbar me-2" alt="logo" />
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="salir-navbar bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
</svg>
      </div>
      <div className="d-flex" id="navbarSupportedContent">
            <Link className="link-navbar nav-link text-light fs-5" to="/productos" >Productos</Link>
      </div>
      </div>
  </nav>
  </div>
  );
};

export default Navbar;