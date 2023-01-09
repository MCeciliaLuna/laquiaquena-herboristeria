import axios from "axios";
import ModalEditar from "../ModalEditar/ModalEditar";
import '../CardProductoVenta/CardProductoVenta.css';

const CardProductoVenta = ({producto, index}) => {

    const eliminarProducto = async (_id) => {
      if (window.confirm(`¿Estás seguro que querés eliminar ${producto.nombre}?`)) {
      await axios.delete(`http://localhost:8000/eliminarproducto/${_id}`)
      alert('Producto eliminado exitosamente')
      window.location.replace('/productosadmin')
    }
    }

  
  return (
              <div className="card-producto d-flex justify-content-center col-2 align-items-around m-3 rounded-3">
              <div className="bg-light text-center card-productoventa h-auto p-2 rounded-3">
              <img
                src={producto.image.secure_url}
                className="card-img-top"
                alt="nombre"
              />
              <div className="card-body p-2">
                <h4 className="cardventa-titulo d-flex justify-content-center align-items-center card-title">{producto.nombre}</h4>
                <p><i>{producto.categoria}</i></p>
                <p className="cardventa-descripcion fs-6 d-flex justify-content-center align-items-center card-text">{producto.descripcion}</p>
                <h5>$ {producto.precio}</h5>
                <div className="d-flex align-items-center justify-content-around">
                  <button
                    type="button"
                    className="btn boton-logueado-eliminar text-light"
                    onClick={(_id) => eliminarProducto(producto._id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
                  </button>
<ModalEditar producto={producto} id={index} />
                </div>
                </div>
                </div>
              </div>
  );
};

export default CardProductoVenta;