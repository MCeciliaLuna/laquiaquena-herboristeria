import React from 'react';
import ButtonUserVolverPedido from '../../components/ButtonUserVolverPedido/ButtonUserVolverPedido';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import FormPedido from '../../components/FormPedido/FormPedido';
import './MiPedido.css'

const MiPedido = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  if (!localStorage.getItem("pedido")) {
      alert(`${usuario.nombre} ☺, todavía 𝗡𝗢 𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗔𝗦𝗧𝗘 𝗡𝗜𝗡𝗚𝗨́𝗡 𝗣𝗥𝗢𝗗𝗨𝗖𝗧𝗢 𝗣𝗔𝗥𝗔 𝗖𝗢𝗠𝗣𝗥𝗔𝗥 👀 `)
      window.location = "/productos"
    }

  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "ADMIN" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-evenly align-items-center">
    <ButtonUserVolverPedido />
    <h1 className="mb-0 text-light">Mi Pedido</h1>
    </div>
      <FormPedido />
      <Footer />
    </>
  );
};

export default MiPedido;