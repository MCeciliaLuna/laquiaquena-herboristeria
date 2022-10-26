import {useState, useEffect} from 'react';
import './ProductosDestacados.css';
import axios from 'axios';

const ProductosDestacados = () => {
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const info = await axios.get("https://laquiaquenaherboristeriabe.onrender.com/traerproductos");
      setProductos(info.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductos();
  }, []);

  const productosAleatorios = productos.sort(function() { return Math.random() - 0.5 })

  const productosFiltrados = productosAleatorios.filter(producto => productos.length = 4)

  return (
    <div className="productos-destacados border-bottom">
    <h2 className="title-productosdestacados w-100 text-center text-light fs-1 pt-4 pb-0">Productos Destacados</h2>
    <div className="productosdestacados-media d-flex align-items-center my-3">

<div className="div-productos">
<div className="div-margin-moviles g-4 d-flex justify-content-center">
{
   productosFiltrados.map(producto => (
    <div className="card-producto d-flex justify-content-center p-0 m-3 col-2" key={producto._id}>
            <div className="card text-center">
              <div className="card-image-producto">
              <img
                src={producto.image.secure_url}
                className="card-img-top"
                alt={producto.nombre}
              /> 
              </div>
              <div className="card-destacados card-body p-2">
                <h4 className="titulo-destacados card-title mt-3 pt-1 mb-0 d-flex justify-content-center align-items-center">{producto.nombre}</h4>
                <p className="descripcion-destacados card-text m-0 p-1 d-flex justify-content-center align-items-center">{producto.descripcion}</p>
                {/* <h5 className="card-text py-2 m-0"> $ {producto.precio}</h5> */}
                <div className="text-center">
                  <a href={`https://api.whatsapp.com/send?phone=5493812183467&text=%C2%A1Hola%20*La%20Quiaque%C3%B1a%20Herborister%C3%ADa*%20%F0%9F%91%8B%F0%9F%8C%BF%20!%20Visit%C3%A9%20su%20p%C3%A1gina%20web%20y%20quisiera%20informaci%C3%B3n%20del%20producto%20*${producto.nombre}*.%20Muchas%20gracias!%20%E2%98%BA`} target="new" >
                  <button
                    type="button"
                    className="btn button-destacados-comprar text-light m-1"
                  > 
                    Comprar
                  </button> </a>
                </div>
              </div>
            </div>
          </div>
        ))
  }

  </div>
  <div className="pt-3 pb-1 px-5 d-flex aling-items-center">
  <a href="/productos" className="w-100 btn text-light mb-0">
Ver todos los productos
</a>
</div>
</div>
    </div>
    </div>
  );
};

export default ProductosDestacados;