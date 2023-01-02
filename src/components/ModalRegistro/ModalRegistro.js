import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ModalRegistro.css';
import axios from 'axios';

const ModalRegistro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [agregarUsuario, setAgregarUsuario] = useState();

  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:8000/crearusuario", data)
      .then((resp) => {
        setAgregarUsuario(resp.data);
      });
    alert("El usuario ha sido creado exitosamente. Ahora ingresá con él a nuestra plataforma");
    window.location.reload();
  };

  return (
    <>
  <button type="button" className="btn mt-1 mx-5 text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
  CREAR USUARIO
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-modal">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">Creá tu usuario</h1>
      </div>
      <div className="modal-body">
      <form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <input type="text" className="form-control mt-1" placeholder="NOMBRE" {...register("nombre", {
                      required: true,
                      maxLength: 20,
                      minLength: 1,
                    })}
                    required
                    maxLength="20"
                    minLength="3"/>
    <input type="text" className="form-control mt-3" placeholder="APELLIDO" {...register("apellido", {
                      required: true,
                      maxLength: 35,
                      minLength: 1,
                    })}
                    required
                    maxLength="35"
                    minLength="3"/>
    <input type="text" className="form-control mt-3" placeholder="DIRECCIÓN"  {...register("direccion", {
                      required: true,
                      maxLength: 50,
                      minLength: 5,
                    })}
                    required
                    maxLength="50"
                    minLength="5"/>
    <input type="number" className="form-control mt-3" placeholder="TELÉFONO" {...register("telefono", {
                      required: true,
                      maxLength: 20,
                      minLength: 9,
                    })}
                    required
                    maxLength="20"
                    minLength="9"/>
                    {errors.telefono && (
                    <span className="text-light mb-5">
                      ⚠️ El número ingresado es demasiado corto. Ingréselo con
                      código de área
                    </span>
                  )}
    <input type="email" className="form-control mt-3" placeholder="EMAIL"  {...register("email", {
                      required: true,
                      maxLength: 50,
                      minLength: 10,
                      pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                    })}
                    required
                    maxLength="50"
                    minLength="10"/>
                    {errors.email && (
                    <span className="text-light mb-5">
                      ⚠️ Debe respetar el formato nombre@mail.com
                    </span>
                  )}
    <input type="password" className="form-control mt-3" placeholder="CONTRASEÑA" {...register("contraseña", {
                      required: true,
                      maxLength: 20,
                      minLength: 8,
                      pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    })}
                    required
                    maxLength="20"
                    minLength="8"/>
                    {errors.contraseña && (
                    <span className="text-light mb-5">
                      ⚠️ Debe tener al menos 1 dígito, 1 mayúscula y 1 minúscula
                    </span>
                  )}

  </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary me-1" data-bs-dismiss="modal">Volver</button>
        <button type="submit" className="btn border-0 text-light">Crear usuario</button>
      </div>
</form>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default ModalRegistro;