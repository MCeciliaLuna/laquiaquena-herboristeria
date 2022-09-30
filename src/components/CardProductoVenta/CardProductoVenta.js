import axios from 'axios';

const CardProductoVenta = ({productos = []}) => {
    const eliminarProducto = async(_id) => {
        await axios.delete(`http://localhost:8000/eliminarproducto/${_id}`);
    }

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      {
        productos.map((item, index) => (
    <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
            <div className="card text-center" key={item._id}>
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
                    key={item._id}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
            

            <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Editar
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="disabledTextInput" className="fs-5 form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder={item.nombre}
                  />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="fs-5 form-label">
                    Descripción
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder={item.descripcion}
                  />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="fs-5 form-label">
                    Precio
                  </label>
                  <div className="d-flex">
                    <p className="fs-5 m-1 pe-2">$</p>
                    <input
                      type="number"
                      id="disabledTextInput"
                      className="form-control w-50"
                      value={item.precio}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="fs-5 mb-1">Subir foto</label>
                  <input
                    type="file"
                    className="p-1 d-block rounded-3 w-100"
                    id=""
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn text-light">
                    Modificar producto
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {productos.map((item) => (<div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        key={item._id}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Eliminar
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4>
                ¿Estás segur@ de eliminar 
                <b className="text-danger"> {item.nombre}</b>?
              </h4>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn boton-logueado-eliminar text-light"
                onSubmit={eliminarProducto()}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
      ))}
          </div>
        ))
      }
          </div>
  );
};

export default CardProductoVenta;