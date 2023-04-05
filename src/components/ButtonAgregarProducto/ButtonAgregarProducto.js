import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ButtonAgregarProducto = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    Swal.fire({
      color: "#161a1d",
      text: "📣 ¿𝗔𝗚𝗥𝗘𝗚𝗔𝗠𝗢𝗦 este producto? 🤔",
      showDenyButton: true,
      denyButtonText: "NO",
      confirmButtonText: "SÍ",
      confirmButtonColor: "#b00215",
      denyButtonColor: "#7fab1f",
    }).then((response) => {
      if (response.isConfirmed) {
        const formData = new FormData();

        for (const name in data) {
          if (name === "image") {
            formData.append(name, data[name][0]);
          } else {
            formData.append(name, data[name]);
          }
        }

        fetch("https://laquiaquenaherboristeriabe.onrender.com/crearproducto", {
          method: "POST",
          body: formData,
        }).then(() => {
          Swal.fire({
            color: "#161a1d",
            title: "El producto fue creado exitosamente! Espera un momento...",
            showConfirmButton: false,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        });
      }
    });
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="text-center rounded-circle btn text-light p-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
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
              <h4 className="modal-title text-light" id="exampleModalLabel">
                NUEVO PRODUCTO 🌿
              </h4>
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
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control input-nombreproducto"
                    maxLength="40"
                    placeholder="nombre del producto"
                    {...register("nombre", { required: true })}
                    required
                  />
                </div>
                <div className="mt-1 mb-3">
                  <label
                    for="disabledTextInput"
                    className="fs-5 form-label text-light"
                  >
                    Categoría
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    {...register("categoria", { required: true })}
                    required
                  >
                    <option value="Aceites" selected>
                      Aceites
                    </option>
                    <option value="Cápsulas">Cápsulas</option>
                    <option value="En sobre">En sobre</option>
                    <option value="Frascos de vidrio">Frascos de vidrio</option>
                    <option value="Hierbas">Hierbas</option>
                    <option value="Jabones">Jabones</option>
                    <option value="Jarabe">Jarabe</option>
                    <option value="Maca">Maca</option>
                    <option value="Nuez de la india">Nuez de la india</option>
                    <option value="Pomadas">Pomadas</option>
                    <option value="Sahumerios">Sahumerios</option>
                    <option value="Stevia">Stevia</option>
                    <option value="Té">Té</option>
                    <option value="Yerbas">Yerbas</option>
                    <option value="Otros">Otros</option>
                  </select>
                </div>
                <div className="mb-3">
                  <textarea
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    maxLength="100"
                    placeholder="Contanos brevemente sobre el producto (propiedades, ingredientes, beneficios)"
                    rows="3"
                    {...register("descripcion", { required: true })}
                    required
                  />
                </div>
                <div className="mb-3 text-center">
                  <div className="d-flex">
                    <div className="d-flex align-items-center input-center">
                      <p className="text-light fs-5 m-2">$</p>
                      <input
                        type="number"
                        id="disabledTextInput"
                        className="form-control input-nombreproducto"
                        maxLength="10"
                        placeholder="ingresá el precio"
                        {...register("precio", { required: true })}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="fs-5 mb-1 text-light">
                    Subir foto (debe ser cuadrada)
                  </label>
                  <input
                    type="file"
                    className="btn p-1 d-block rounded-3 w-100"
                    {...register("image", { required: true })}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn rounded-circle m-0 p-2 text-light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
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
