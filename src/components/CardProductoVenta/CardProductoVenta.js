import axios from "axios";
import { useState, useEffect } from "react";
import ModalEditar from "../ModalEditar/ModalEditar";
import '../CardProductoVenta/CardProductoVenta.css';

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
                
                  <button
                    type="button"
                    id="botonEliminar"
                    className="btn boton-logueado-eliminar text-light mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                    onClick={(_id) => eliminarProducto(item._id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
                  </button>
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