import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className="navbar-completo pt-5 d-block text-center">
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid d-flex justify-content-around">
      <a className="title-navbar navbar-brand text-light fs-4" href="/#">LA QUIAQUEÑA Herboristería</a>
      <div className="d-flex" id="navbarSupportedContent">
            <Link className="link-navbar nav-link text-light fs-5" to="/productos" >Productos</Link>
      </div>
      </div>
  </nav>
  </div>
  );
};

export default Navbar;