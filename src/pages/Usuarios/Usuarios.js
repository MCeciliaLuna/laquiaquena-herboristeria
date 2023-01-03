import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import UsuariosTable from '../../components/UsuariosTable/UsuariosTable';

const Usuarios = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "USER" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  return (
    <>
    <Navbar />
    <UsuariosTable />
<Footer />
</>
  );
};

export default Usuarios;