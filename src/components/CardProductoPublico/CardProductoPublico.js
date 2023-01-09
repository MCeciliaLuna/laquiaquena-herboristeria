import React, { useState, useEffect } from 'react';
import '../CardProductoPublico/CardProductoPublico.css'

const CardProductoPublico = ({productos}) => {
  
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
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      {
        productosOrdenados.map(producto => (
          <div className="card-producto d-flex justify-content-center m-3 col-2 align-items-around" key={producto._id}>
          <div className="card card-productodestacado h-auto text-center">
            <div className="card-image-producto">
            <img
              src={producto.image.secure_url}
              className="card-img-top"
              alt={producto.nombre}
            /> 
            </div>
            <div className="card-destacados card-body p-2">
              <h4 className="titulo-destacados card-title d-flex justify-content-center align-items-center">{producto.nombre}</h4>
              <p><i>{producto.categoria}</i></p>
              <p className="descripcion-destacados card-text d-flex justify-content-center align-items-center">{producto.descripcion}</p>
              <p>${producto.precio}</p>
                <button
                  type="button"
                  className="btn button-destacados-comprar text-light mt-3 align-items-end"
                  id="producto"
                  onClick={(_id) => localStorage.setItem("pedido", JSON.stringify(producto))}
                > 
                  Comprar
                </button>
            </div>
          </div>
        </div>
        ))

      }
          </div>
  );
};

export default CardProductoPublico;