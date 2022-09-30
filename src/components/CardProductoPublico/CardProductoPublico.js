import React from 'react';

const CardProductoPublico = ({productos = []}) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      {
        productos.map((item, index) => (
    <div className="card-producto d-flex justify-content-center p-0 m-3 col-2" key={index}>
            <div className="card text-center">
              <img
                src="https://picsum.photos/400/?random=55"
                className="card-img-top"
                alt={item.nombre}
              />
              <div className="card-body p-2">
                <h4 className="card-title py-1 m-0">{item.nombre}</h4>
                <p className="card-text py-2 m-0">{item.descripcion}</p>
                <h5 className="card-text py-2 m-0"> $ {item.precio}</h5>
                <div className="text-center">
                  <a href={`https://api.whatsapp.com/send?phone=543816427068&text=Informacion%20sobre%20${item.nombre}`} target="new" >
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
  );
};

export default CardProductoPublico;