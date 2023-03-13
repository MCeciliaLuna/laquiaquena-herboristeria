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
import BotonWhatsapp from "../../components/BotonWhatsapp/BotonWhatsapp";

const ProductosUser = ({ setPedido, pedido }) => {
  const [productos, setProductos] = useState([]);
  const [productosOrdenados, setProductosOrdenados] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  //alert('💡 𝗣𝗥𝗘𝗦𝗜𝗢𝗡𝗔́ en la 𝗙𝗢𝗧𝗢 de cada producto para conocer sus 𝙋𝙍𝙊𝙋𝙄𝙀𝘿𝘼𝘿𝙀𝙎 𝙔 𝘾𝘼𝙍𝘼𝘾𝙏𝙀𝙍𝙄́𝙎𝙏𝙄𝘾𝘼𝙎 💡')
  
  useEffect(() => {
    const getProductos = async () => {
      try {
        const info = await axios.get("https://laquiaquenaherboristeriabe.onrender.com/traerproductos");
        setProductos((info.data))
        setProductosFiltrados((info.data))
      } catch (error) {
        console.error(error);
      }
    };
    
    getProductos();
  }, []);
  
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
      <BotonWhatsapp />
      <div className="d-flex justify-content-evenly align-items-center">
    <ButtonUserVolver />
    <h1 className="mb-0 text-light">Productos</h1>
    </div>
      <div className="div-productos-page h-auto d-flex flex-wrap align-items-center justify-content-center">
      <LinksCategoriasUser setSelectedCategory={setSelectedCategory} />
      <ButtonPedidos />
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap align-items-center justify-content-evenly">
        {productosFiltrados.map((producto, index) => (
          <CardProductoUser
          index={index}
          producto={producto}
          setPedido={setPedido}
          pedido={pedido}
          setProductos={setProductos}
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
