import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
      <div className="navbar-completo d-block text-center pb-2">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex align-items-center justify-content-between navbar-ipad">
      <div className="w-100">
      <div className="d-flex justify-content-center" id="navbarSupportedContent">
            <p className="nombre-navbar nav-link text-light fs-5 mb-0 pb-0">¡Todo 100% Natural!</p>
      </div>
      </div>
      </div>
  </nav>
  </div>
  );
};

export default Navbar;