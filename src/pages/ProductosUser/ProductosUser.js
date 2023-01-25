import React from "react";
import "./ProductosUser.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProductoPublico from "../../components/CardProductoPublico/CardProductoPublico";
import ButtonPedidos from "../../components/ButtonPedidos/ButtonPedidos";
import Navbar from "../../components/Navbar/Navbar";
import SelectCategorias from "../../components/LinksCategoriasAdmin/LinksCategoriasAdmin";
import ButtonUserVolver from "../../components/ButtonUserVolver/ButtonUserVolver";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";

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
    <div>
      <Navbar />
      <Carousel />
      <div className="div-productos-page h-auto d-flex flex-wrap align-items-center justify-content-center">
        <ButtonUserVolver />
      <SelectCategorias/>
      <ButtonPedidos />
      <div className="d-flex justify-content-center">
        <div className="div-productos-page d-flex flex-wrap align-items-center justify-content-evenly">
        {productosOrdenados.map((producto) => (
          <CardProductoPublico
          producto={producto}
          />
        ))}
      </div>
      </div>
    </div>
        <Footer />
    </div>
  );
};

export default ProductosUser;