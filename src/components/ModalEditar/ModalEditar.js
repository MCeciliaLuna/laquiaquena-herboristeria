import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const ModalEditar = ({_id}) => {
    const { register, handleSubmit } = useForm();
    const [ nombre, setNombre ] = useState('')
    const [ descripcion, setDescripcion ] = useState('')
    const [ precio, setPrecio ] = useState('')
    // const [ image, setImage ] = useState('')
    const [ id, setId ] = useState('')

    const getProductoById = async () => {
      const res = await axios.get('https://laquiaquenaherboristeriabe.onrender.com/traerproductos')
      setNombre(res.data.nombre)
      setDescripcion(res.data.descripcion)
      setPrecio(res.data.precio)
      // setImage(res.data.image)
      setId(res.data._id)
    }

  const editarProducto = async (e, _id) => {
    e.preventDefault()
    await axios.put(`https://laquiaquenaherboristeriabe.onrender.com/eliminarproducto/${_id}`,{
      nombre: nombre,
      descripcion: descripcion,
      precio: precio
      // image: image
    })
  }

  useEffect(()=> {
    getProductoById()
  }, [])
  
  return (
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
              <form  onSubmit={handleSubmit(editarProducto)}>
                <div className="mb-3">
                  <label for="disabledTextInput" className="fs-5 form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    {...register("descripcion", { require: true })}
                    required
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
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    {...register("descripcion", { require: true })}
                    required
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
                      value="precio"
                      onChange={(e) => setPrecio(e.target.value)}
                      {...register("precio", { require: true })}
                    required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="fs-5 mb-1">Subir foto</label>
                  {/* <input
                    type="file"
                    className="p-1 d-block rounded-3 w-100"
                    id=""
                    {...register("image", { require: true })}
                    required
                  /> */}
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
  );
};

export default ModalEditar;