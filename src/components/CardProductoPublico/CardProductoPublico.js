import React, { useState, useEffect } from 'react';
import ButtonAgregarAlPedido from '../ButtonAgregarAlPedido/ButtonAgregarAlPedido';
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
          <div className="card-producto d-flex justify-content-center m-3 col-2 align-items-around">
          <div className="card card-productodestacado h-auto text-center">
            <div className="card-image-producto">
            <img
              src={producto.image.secure_url}
              className="card-img-top"
              alt={producto.nombre}
            /> 
            </div>
            <div className="card-destacados card-body p-2">
              <h4 id="nombre" className="titulo-destacados card-title d-flex justify-content-center align-items-center">{producto.nombre}</h4>
              <p><i>{producto.categoria}</i></p>
              <p className="descripcion-destacados card-text d-flex justify-content-center align-items-center">{producto.descripcion}</p>
              <p id="precio">${producto.precio}</p>
                <ButtonAgregarAlPedido _id={producto._id} producto={producto._id} />
            </div>
          </div>
        </div>
        ))

      }
          </div>
  );
};

export default CardProductoPublico;