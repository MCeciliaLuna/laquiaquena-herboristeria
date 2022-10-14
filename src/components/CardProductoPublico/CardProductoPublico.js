import React, { useState, useEffect } from 'react';
import '../CardProductoPublico/CardProductoPublico.css'

const CardProductoPublico = ({productos = []}) => {
  
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
                <h4 className="cardpublico-titulo card-title mt-3 pt-1 mb-0 d-flex justify-content-center align-items-center">{producto.nombre}</h4>
                <p className="cardpublico-descripcion card-text m-0 p-1 d-flex justify-content-center align-items-center">{producto.descripcion}</p>
                {/* <h5 className="card-text py-2 m-0"> $ {producto.precio}</h5> */}
                <div className="text-center">
                  <a href={`https://api.whatsapp.com/send?phone=5493812183467&text=%C2%A1Hola%20*La%20Quiaque%C3%B1a%20Herborister%C3%ADa*%20%F0%9F%91%8B%F0%9F%8C%BF%20!%20Visit%C3%A9%20su%20p%C3%A1gina%20web%20y%20quisiera%20informaci%C3%B3n%20del%20producto%20*${producto.nombre}*.%20Muchas%20gracias!%20%E2%98%BA`} target="new" >
                  <button
                    type="button"
                    className="btn text-light m-1"
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
  );
};

export default CardProductoPublico;