import React from "react";
import "./Productos.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProductoPublico from "../../components/CardProductoPublico/CardProductoPublico";
import BotonWhatsapp from "../../components/BotonWhatsapp/BotonWhatsapp";
import Navbar from "../../components/Navbar/Navbar";
// import Buscador from "../../components/Buscador/Buscador";
import Footer from "../../components/Footer/Footer";
import Clientes from "../../components/Clientes/Clientes";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const info = await axios.get("http://localhost:8000/traerproductos");
      setProductos(info.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      {/* <Buscador /> */}
      <Navbar />
      <BotonWhatsapp />
    <div className="productos-page bg-light d-flex">
      <div className="div-productos-page d-flex flex-wrap align-items-center justify-content-center">
        <CardProductoPublico productos={productos} />
        </div>
    </div>
    <Clientes />
    <Footer />
    </div>
  );
};

export default Productos;
