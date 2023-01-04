import { useForm } from "react-hook-form";
import "./ModalEditar.css";
import { useState } from "react";
import axios from "axios";

const ModalEditar = ({ producto, id }) => {
  const { register, handleSubmit } = useForm();
  const [editarProducto, setEditarProducto] = useState();

  const idProductoEdit = `#producto${id}`;
  const productoIdModalEdit = `producto${id}`;

  const editProducto = async (data) => {
    if (
      window.confirm(`¿Estás seguro de la modificación de ${producto.nombre}?`)
    ) {
      await axios.put("http://localhost:8000/modificarproducto", data);
      setEditarProducto(data);
      alert(`Menú ${producto.nombre} modificado exitosamente`);
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        type="button" class="btn" data-bs-toggle="modal" data-bs-target={idProductoEdit}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-pencil-fill text-light"
          viewBox="0 0 16 16"
        >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
      </button>
      <div
        class="modal fade" id={productoIdModalEdit} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content fondo-modal-editar" >
            <div className="modal-header">
              <h5 className="modal-title text-light" id="exampleModalLabel1">
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
              <form id="form" onSubmit={handleSubmit(editProducto)}>
                <div className="d-flex justify-content-end">
                  <label className="form-label m-0 fs-6 text-dark">ID:</label>
                  <input
                    type="text"
                    value={producto._id}
                    {...register("_id", { required: true })}
                    className="w-50 ps-2 text-start bg-success border-0 rounded-0 fs-6"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="disabledTextInput"
                    className="fs-5 form-label text-light"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control input-nombreproducto"
                    maxLength="40"
                    defaultValue={producto.nombre}
                    {...register("nombre", { required: true })}
                    required
                  />
                </div>
                <div className="mt-4 mb-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue={producto.categoria}
                    {...register("categoria", { required: true })}
                    required
                  >
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
                  <label
                    for="disabledTextInput"
                    className="fs-5 form-label text-light"
                  >
                    Descripción
                  </label>
                  <textarea
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    maxLength="100"
                    defaultValue={producto.descripcion}
                    rows="3"
                    {...register("descripcion", { required: true })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="disabledTextInput"
                    className="fs-5 form-label text-light"
                  >
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
                        defaultValue={producto.precio}
                        {...register("precio", { required: true })}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn text-light">
                    Modificar producto
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

export default ModalEditar;
