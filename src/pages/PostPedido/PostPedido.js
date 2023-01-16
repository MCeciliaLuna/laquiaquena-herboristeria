import React from 'react';
import ButtonBackHome from '../../components/ButtonBackHome/ButtonBackHome';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const PostPedido = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "ADMIN" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  localStorage.removeItem("pedido")
  return (
    <>
    <Navbar />
    <div className="text-light text-center m-5 p-5">
      <ButtonBackHome />
<h2>Envianos un whatsapp avisandonos de tu pedido!</h2>
<h1>Si pagaste por transferencia ENVIANOS EL COMPROBANTE!</h1>
<a href="https://wa.me/c/5493812183467" target="new">
  <button className="btn text-light border-0 m-5">Whatsapp</button>
      </a>
    </div>
    <Footer />
    </>
  );
};

export default PostPedido;