import React from "react";
import "./Productos.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProductoPublico from "../../components/CardProductoPublico/CardProductoPublico";
import BotonWhatsapp from "../../components/BotonWhatsapp/BotonWhatsapp";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SelectCategorias from "../../components/SelectCategorias/SelectCategorias";

const Productos = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "ADMIN" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const info = await axios.get("https://laquiaquenaherboristeriabe.onrender.com/traerproductos");
      setProductos((info.data))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   getProductos()
  }, []);

  return (
    <div>
      <Navbar />
      <div className="div-productos-page d-flex flex-wrap align-items-center justify-content-center">
      <SelectCategorias/>
      <BotonWhatsapp />
    <div className="productos-page d-flex">
        <CardProductoPublico productos={productos} />
        </div>
    </div>
    {/* <Clientes /> */}
    <Footer />
    </div>
  );
};

export default Productos;
