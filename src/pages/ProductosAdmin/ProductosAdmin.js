import {useState, useEffect} from 'react';
import axios from 'axios';
import ButtonAgregarProducto from '../../components/ButtonAgregarProducto/ButtonAgregarProducto';
import CardProductoVenta from '../../components/CardProductoVenta/CardProductoVenta';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ProductosAdmin = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "USER" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
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
    <>
    <Navbar />
     <ButtonAgregarProducto />
      <div className="d-flex">
        <div className="div-productos-page">
          <CardProductoVenta 
          productos={productos}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductosAdmin;