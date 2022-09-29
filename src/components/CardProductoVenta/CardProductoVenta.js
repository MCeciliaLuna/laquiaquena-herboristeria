import React from 'react';

const CardProductoVenta = ({productos = []}) => {
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
                  <button
                    type="button"
                    className="boton-logueado-editar btn  text-light mb-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn boton-logueado-eliminar text-light mt-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
          </div>
  );
};

export default CardProductoVenta;