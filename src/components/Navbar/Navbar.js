import React from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const volverLoginInicial = () => {
    if (
      window.confirm("¿Estás segur@ que querés volver a la página inicial?")
    ) {
      window.location.href = "/";
    }
  }

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const usuarioNombre = JSON.stringify(`${usuario.nombre} ${usuario.apellido}`).replace(
    /['"]+/g,
    ""
  );

  return (
      <div className="navbar-completo d-block text-center">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex align-items-center justify-content-around">
    <div className="d-flex align-items-center link-navbar" href="#"
          onClick={volverLoginInicial}>
      <img src={logo} className="logo-navbar me-2" alt="logo" />
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="salir-navbar bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg>
      </div>
      <div className="d-flex" id="navbarSupportedContent">
            <p className="nombre-navbar nav-link text-light fs-5 mb-0 pb-0">Bienvenid@ {usuarioNombre} 👋</p>
      </div>
      </div>
  </nav>
  </div>
  );
};

export default Navbar;