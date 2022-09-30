import "./UsuarioLogueado.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProductoVenta from "../../components/CardProductoVenta/CardProductoVenta";

const UsuarioLogueado = () => {
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const info = await axios.get('http://localhost:8000/traerproductos');
      setProductos(info.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProductos()
  }, [])

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
    window.location.href = '/usuariologueado'
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
        <div className="div-productos-page">
          <CardProductoVenta productos={productos} />
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
    </div>
  );
};

export default UsuarioLogueado;
