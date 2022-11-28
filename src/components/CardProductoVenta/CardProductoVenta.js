import axios from "axios";
import { useState, useEffect } from "react";
import ModalEditar from "../ModalEditar/ModalEditar";
import '../CardProductoVenta/CardProductoVenta.css'

const CardProductoVenta = ({productos = []}) => {

    const eliminarProducto = async (_id) => {
      await axios.delete(`https://laquiaquenaherboristeriabe.onrender.com/eliminarproducto/${_id}`)
      alert('Producto eliminado exitosamente')
      window.location.replace('/usuariologueado')
    }

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
              productosOrdenados.map((item, index)=>
              <div className="card-producto d-flex justify-content-center col-2 align-items-around m-3">
              <div className="card text-center card-productoventa h-auto">
              <img
                src={item.image.secure_url}
                className="card-img-top"
                alt="nombre"
              />
              <div className="card-body p-2">
                <h4 className="cardventa-titulo d-flex justify-content-center align-items-center card-title">{item.nombre}</h4>
                <p><i>{item.categoria}</i></p>
                <p className="cardventa-descripcion fs-6 d-flex justify-content-center align-items-center card-text">{item.descripcion}</p>
                <h5>$ {item.precio}</h5>
                
                  <div className="d-block">
                  <button
                    type="button"
                    id="botonEliminar"
                    className="btn boton-logueado-eliminar text-light mt-3"
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