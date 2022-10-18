import "./UsuarioLogueado.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProductoVenta from "../../components/CardProductoVenta/CardProductoVenta";
// import { Link } from "react-router-dom";

const UsuarioLogueado = () => {
  const token = localStorage.getItem('access-token')
  if (!token) {
    window.location.href = '/'
  }

  
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const info = await axios.get('https://laquiaquenaherboristeriabe.onrender.com/traerproductos');
      setProductos(info.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProductos()
  }, [])

  
  const { register, handleSubmit} = useForm()
  
  const changeImage = () => {
    const formData = new FormData();
    const image = document.getElementById("image")
    formData.append("image", image.files[0])
  }

  const onSubmit = async (data) => {
    const resp = await fetch('https://laquiaquenaherboristeriabe.onrender.com/crearproducto',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    )
   const json = await resp.json();
    console.log(json)
    //window.location.href = '/usuariologueado'
    
  }
  
  return (
    <div className="page-usuariologueado pt-4">
      <div className="w-100">
      <h2 className="title-logueado text-center pt-3 d-block text-light">¡Bienvenid@!</h2>
      <div className="d-block text-center w-100 mb-3">
      <a href="/">
      <button
          id="cerrarsesionbtn"
          type="button"
          className="btn text-light botonsalirsesion"
        >
          Salir
        </button>
        </a>
        </div>
        </div>
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
                    className="form-control input-nombreproducto"
                    maxLength="35"
                    placeholder="ingresá tipo + nombre + marca"
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
                    maxLength="50"
                    placeholder="describí brevemente las propiedades"
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
                  <input
                    type="file"
                    className="btn p-1 d-block rounded-3 w-100"
                    id="image"
                    name="image"
                    onChange={changeImage}
                    {...register("image")}
                   />
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
