import {useState, useEffect} from 'react';
import axios from 'axios';
import ButtonAgregarProducto from '../../components/ButtonAgregarProducto/ButtonAgregarProducto';
import CardProductoAdmin from '../../components/CardProductoAdmin/CardProductoAdmin';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LinksCategoriasUser from '../../components/LinksCategoriasUser/LinksCategoriasUser';
import './AdminProductos.css'
import ButtonAdminVolverProductos from '../../components/ButtonAdminVolverProductos/ButtonAdminVolverProductos';

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [productosOrdenados, setProductosOrdenados] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  
  const getProductos = async () => {
    try {
      const info = await axios.get('https://laquiaquenaherboristeriabe.onrender.com/traerproductos');
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

  useEffect(() => {
    setProductosOrdenados(aux)
  }, [aux])

  useEffect(() => {
    if(selectedCategory !== 'Todos'){
      const productosFiltrados = productosOrdenados.filter(producto => producto.categoria === selectedCategory);
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productosOrdenados);
    }
  }, [productosOrdenados, selectedCategory])


  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-evenly align-items-center">
    <ButtonAdminVolverProductos />
    <h1 className="text-light mb-0 pb-0">Productos</h1>
    </div>
    <div className="d-flex justify-content-center align-items-center">
     <ButtonAgregarProducto />
     </div>
          <LinksCategoriasUser setSelectedCategory={setSelectedCategory}/>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap align-items-center justify-content-evenly">
        {productosFiltrados.map((producto, index) => (
          <CardProductoAdmin 
          producto={producto} index={index}
          />
        ))}
      </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminProductos;