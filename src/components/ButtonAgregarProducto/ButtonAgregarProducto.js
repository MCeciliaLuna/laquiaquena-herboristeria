import React from 'react';
import { useForm } from "react-hook-form";

const ButtonAgregarProducto = () => {
  const { register, handleSubmit} = useForm()
  const onSubmit = async (data) => {
    const formData = new FormData()
  
    for(const name in data) {
      if (name === 'image') {
        formData.append(name, data[name][0])
      } else {
        formData.append(name, data[name])
      }
    }

    const resp = await fetch('http://localhost:8000/crearproducto',
    {
    method: 'POST',
    body: formData
    }
    )
    const json = await resp.json();
      alert(`¡Producto agregado exitosamente!`)
      window.location.href = '/productosadmin'
  }
  return (
    <div>
    <div className="d-flex justify-content-center">
    <button
      type="button"
      className="text-center rounded-circle btn text-light p-3"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
    </button>
  </div>
  <div
  className="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content fondo-modal-logueado">
      <div className="modal-header">
        <h5 className="modal-title text-light" id="exampleModalLabel">
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
        <form onSubmit={handleSubmit(onSubmit)} id="form">
          <div className="mb-3">
            <label for="disabledTextInput" className="fs-5 form-label text-light">
              Nombre
            </label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control input-nombreproducto"
              maxLength="40"
              placeholder="ingresá tipo + nombre"
              {...register("nombre", { required: true })} required
            />
          </div>
          <div className="mt-4 mb-3">
          <select className="form-select" aria-label="Default select example" {...register("categoria", { required: true })} required >
  <option selected>Todos los productos</option>
  <option value="Stevia">Stevia</option>
  <option value="Hierbas">Hierbas</option>
  <option value="Maca">Maca</option>
  <option value="Cápsulas">Cápsulas</option>
  <option value="Frascos de vidrio">Frascos de vidrio</option>
  <option value="Nuez de la india">Nuez de la india</option>
  <option value="En sobre">En sobre</option>
  <option value="Pomadas">Pomadas</option>
  <option value="Jarabe">Jarabe</option>
  <option value="Jabones">Jabones</option>
  <option value="Té">Té</option>
  <option value="Aceites">Aceites</option>
  <option value="Sahumerios">Sahumerios</option>
  <option value="Otros">Otros</option>
</select>
</div>
          <div className="mb-3">
            <label for="disabledTextInput" className="fs-5 form-label text-light">
              Descripción
            </label>
            <textarea
              type="text"
              id="disabledTextInput"
              className="form-control"
              maxLength="100"
              placeholder="agregá tipo + propiedades brevemente"
              rows="3"
              {...register("descripcion", { required: true })} required
            />
          </div>
          <div className="mb-3">
            <label for="disabledTextInput" className="fs-5 form-label text-light">
              Precio
            </label>
            <div className="d-flex">
          <div className="d-flex align-items-center">
            <p className="text-light fs-5 m-2">$</p>
          <input
              type="number"
              id="disabledTextInput"
              className="form-control input-nombreproducto"
              maxLength="10"
              placeholder="ingresá el precio"
              {...register("precio", { required: true })} required
            />
            </div>  
            </div>
          </div>
           <div className="mb-3">
            <label className="fs-5 mb-1 text-light">Subir foto (debe ser cuadrada)</label>
            <input
              type="file"
              className="btn p-1 d-block rounded-3 w-100"
              {...register("image", { required: true })} required
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

export default ButtonAgregarProducto;