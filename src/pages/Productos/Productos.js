import React from "react";
import "./Productos.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProductoPublico from "../../components/CardProductoPublico/CardProductoPublico";

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
    <div className="productos-page bg-light d-flex">
      <div className="div-productos-page d-flex flex-wrap align-items-center justify-content-center">
        <CardProductoPublico productos={productos} />
        </div>
    </div>
  );
};

export default Productos;
