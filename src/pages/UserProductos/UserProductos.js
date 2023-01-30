import React from "react";
import "./UserProductos.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProductoUser from "../../components/CardProductoUser/CardProductoUser";
import ButtonPedidos from "../../components/ButtonPedidos/ButtonPedidos";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ButtonUserVolver from "../../components/ButtonUserVolver/ButtonUserVolver";
import LinksCategoriasUser from "../../components/LinksCategoriasUser/LinksCategoriasUser";

const ProductosUser = () => {
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

  const aux = productos.sort((a,b) =>{
    
    if (a.nombre > b.nombre) {
    return 1;
  }
  if (a.nombre < b.nombre) {
    return -1;
  }
  return 0 })
  const [productosOrdenados, setProductosOrdenados] = useState([])
  useEffect(() => {
    setProductosOrdenados(aux)
  }, [aux])

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-evenly align-items-center">
    <ButtonUserVolver />
    <h1 className="mb-0 text-light">Productos</h1>
    </div>
      <div className="div-productos-page h-auto d-flex flex-wrap align-items-center justify-content-center">
      <LinksCategoriasUser/>
      <ButtonPedidos />
      <div className="d-flex justify-content-center">
        <div className="div-productos-page d-flex flex-wrap align-items-center justify-content-evenly">
        {productosOrdenados.map((producto) => (
          <CardProductoUser
          producto={producto}
          />
        ))}
      </div>
      </div>
    </div>
        <Footer />
    </>
  );
};

export default ProductosUser;
