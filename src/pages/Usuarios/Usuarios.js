import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import UsuariosTable from '../../components/UsuariosTable/UsuariosTable';
import ButtonAdminVolver from '../../components/ButtonAdminVolver/ButtonAdminVolver';

const Usuarios = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "USER" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-evenly align-items-center">
    <ButtonAdminVolver />
    <h2 className="text-light mb-0 pb-0">Usuarios Registrados</h2>
    </div>
    <UsuariosTable />
<Footer />
</>
  );
};

export default Usuarios;