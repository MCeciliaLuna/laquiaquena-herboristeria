import {useState, useEffect} from 'react';
import axios from 'axios';
import ButtonAgregarProducto from '../../components/ButtonAgregarProducto/ButtonAgregarProducto';
import CardProductoVenta from '../../components/CardProductoVenta/CardProductoVenta';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ButtonAdminVolver from '../../components/ButtonAdminVolver/ButtonAdminVolver';
import SelectCategoriasAdmin from '../../components/SelectCategoriasAdmin/SelectCategoriasAdmin';

const ProductosAdmin = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "USER" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  
  const [productos, setProductos] = useState([]);
  
  const getProductos = async () => {
    try {
      const info = await axios.get('http://localhost:8000/traerproductos');
      setProductos(info.data)
    } catch (error) {
      alert('No pudieron cargarse los productos; intentá nuevamente')
    }
  }
  useEffect(() => {
    getProductos()
  }, [])

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
    <ButtonAdminVolver />
    <h2 className="text-light mb-0 pb-0">Productos</h2>
    </div>
    <div className="d-flex justify-content-center align-items-center">
     <ButtonAgregarProducto />
     <SelectCategoriasAdmin />
     </div>
      <div className="d-flex justify-content-center">
        <div className="div-productos-page d-flex flex-wrap align-items-center justify-content-center">
        {productosOrdenados.map((producto, index) => (
          <CardProductoVenta 
          producto={producto} index={index}
          />
        ))}
      </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductosAdmin;