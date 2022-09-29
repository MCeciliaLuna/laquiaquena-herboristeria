import "./UsuarioLogueado.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const UsuarioLogueado = () => {
  const getProductos = async () => {
    try {
      const data = await axios.get('http://localhost:8000/traerproductos');
      console.log(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  getProductos()

  const { register, handleSubmit} = useForm();

  const onSubmit = async (data) => {
    const resp = await fetch('http://localhost:8000/crearproducto', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await resp.json();
    console.log(json)
  }

  return (
    <div className="page-usuariologueado bg-light">
      <h2 className="text-center p-3">Page UsuarioLogueado</h2>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="text-center btn text-light p-3 mb-4"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          AGREGAR NUEVO PRODUCTO
        </button>
      </div>
      <div className="d-flex">
        <div className="div-productos-page d-flex flex-wrap align-items-center justify-content-center">
          <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
            <div className="card text-center">
              <img
                src="https://picsum.photos/400/?random=55"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body p-2">
                <h4 className="card-title py-1 m-0">Card title</h4>
                <p className="card-text py-2 m-0">Descripción</p>
                <h5 className="card-text py-2 m-0">Precio</h5>
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
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Nuevo producto
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label for="disabledTextInput" className="fs-5 form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    {...register("nombre")}
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
                    {...register("descripcion")}
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
                      {...register("precio")}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="fs-5 mb-1">Subir foto</label>
                  <button
                    className="btn p-1 d-block rounded-3 w-100"
                    id="boton-foto"
                  >
                    Subir Foto
                  </button>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn text-light">
                    Crear producto
                  </button>
                </div>
              </form>
            </div>
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
              <h5 className="modal-title" id="exampleModalLabel">
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
                    placeholder="Nombre existente"
                  />
                </div>
                <div className="mb-3">
                  <label for="disabledSelect" className="fs-5 form-label">
                    Categoría
                  </label>
                  <select id="disabledSelect" className="form-select">
                    <option>Categoría 1</option>
                    <option>Categoría 2</option>
                    <option>Categoría 3</option>
                    <option>Categoría 4</option>
                  </select>
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
                      placeholder="1234"
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

      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
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
                ¿Estás segur@ de eliminar{" "}
                <b className="text-danger">nombre del producto</b>?
              </h4>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn boton-logueado-eliminar text-light"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuarioLogueado;
