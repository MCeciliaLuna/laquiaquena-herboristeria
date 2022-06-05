import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid d-flex justify-content-around">
    <a className="navbar-brand" href="/#">LOGO</a>
    <form>
      <input type="search" />
      <button className="mx-1">Buscar</button>
    </form>
    <div className="d-flex" id="navbarSupportedContent">
          <a className="nav-link" href="/#">Home</a>
          <a className="nav-link" href="/#">Link</a>
          <a className="nav-link" href="/#" >Disabled</a>
    </div>
  </div>
</nav>
  );
};

export default Navbar;