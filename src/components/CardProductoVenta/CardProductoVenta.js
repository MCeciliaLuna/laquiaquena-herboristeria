import axios from "axios";
import React from "react";
import ModalEditar from "../ModalEditar/ModalEditar";

const CardProductoVenta = ({productos = []}) => {

    const eliminarProducto = async (_id) => {
      await axios.delete(`http://localhost:8000/eliminarproducto/${_id}`)
      alert('Producto eliminado exitosamente')
      window.location.replace('/usuariologueado')
    }

  
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
            {
              productos.map((item, index)=>
              <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
              <div className="card text-center">
              <img
                src={item.image.secure_url}
                className="card-img-top"
                alt="nombre"
              />
              <div className="card-body p-2">
                <h4 className="card-title py-1 m-0">{item.nombre}</h4>
                <p className="card-text py-2 m-0">{item.descripcion}</p>
                <h5 className="card-text py-2 m-0"> ${item.precio}</h5>
                <div className="text-center d-flex justify-content-around">
                  <button
                    type="button"
                    className="boton-logueado-editar btn text-light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    id="botonEliminar"
                    className="btn boton-logueado-eliminar text-light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                    onClick={(_id) => eliminarProducto(item._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
            </div>
              )
            }

            <ModalEditar />

          </div>
  );
};

export default CardProductoVenta;