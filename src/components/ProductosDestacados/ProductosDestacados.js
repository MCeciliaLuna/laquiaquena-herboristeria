import {useState, useEffect} from 'react';
import './ProductosDestacados.css';
import axios from 'axios';

const ProductosDestacados = () => {
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

  const productosFiltrados = productos.filter(producto => productos.length = 5)

  return (
    <div className="productos-destacados border-bottom bg-light">
    <h2 className="title-productosdestacados w-100 text-center fs-1 pt-4 pb-0">Productos Destacados</h2>
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
              <div className="card-body p-2">
                <h4 className="card-title py-1 m-0">{producto.nombre}</h4>
                <p className="card-text py-2 m-0">{producto.descripcion}</p>
                <h5 className="card-text py-2 m-0"> $ {producto.precio}</h5>
                <div className="text-center">
                  <a href={`https://api.whatsapp.com/send?phone=5493816427068&text=%C2%A1Hola%20*La%20Quiaque%C3%B1a%20Herborister%C3%ADa*%20%F0%9F%91%8B%F0%9F%8C%BF%20!%20Visit%C3%A9%20su%20p%C3%A1gina%20web%20y%20quisiera%20informaci%C3%B3n%20del%20producto%20*${producto.nombre}*.%20Muchas%20gracias!%20%E2%98%BA`} target="new" >
                  <button
                    type="button"
                    className="btn text-light mb-1"
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