import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
      <div className="navbar-completo d-block text-center">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-around">
    <div className="d-flex align-items-center">
    <Link className="link-navbar title-navbar navbar-brand text-light fs-4 ps-2 m-0" to="/">
      <img src={logo} className="logo-navbar me-2" alt="logo" />
      LA QUIAQUEÑA Herboristería</Link>
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