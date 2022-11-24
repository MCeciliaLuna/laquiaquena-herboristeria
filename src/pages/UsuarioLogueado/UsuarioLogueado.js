import "./UsuarioLogueado.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProductoVenta from "../../components/CardProductoVenta/CardProductoVenta";
import ButtonSalirSesion from "../../components/ButtonSalirSesion/ButtonSalirSesion";
import ButtonAgregarProducto from "../../components/ButtonAgregarProducto/ButtonAgregarProducto";

const UsuarioLogueado = () => {
  const token = localStorage.getItem('access-token')
  if (!token) {
    window.location.href = '/'
  }

  
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const info = await axios.get('https://laquiaquenaherboristeriabe.onrender.com/traerproductos');
      setProductos(info.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProductos()
  }, [])


  
  return (
    <div className="page-usuariologueado pt-4">
      <div className="w-100">
      <h2 className="title-logueado text-center pt-3 d-block text-light">¡Bienvenid@!</h2>
      <ButtonSalirSesion />
        </div>
     <ButtonAgregarProducto />
      <div className="d-flex">
        <div className="div-productos-page">
          <CardProductoVenta productos={productos} />
        </div>
      </div>
    </div>
  );
};

export default UsuarioLogueado;
