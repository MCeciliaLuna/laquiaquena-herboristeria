import React from 'react';
import './ModalRegistro.css'

const ModalRegistro = () => {
  return (
    <>
  <button type="button" className="btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
  CREAR USUARIO
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-modal">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">Creá tu usuario</h1>
      </div>
      <div className="modal-body">
      <form className="">
  <div className="mb-3">
    <input type="text" className="form-control mb-3" placeholder="NOMBRE" />
    <input type="text" className="form-control mb-3" placeholder="APELLIDO" />
    <input type="text" className="form-control mb-3" placeholder="DIRECCIÓN" />
    <select className="form-select mb-3" aria-label="Default select example">
  <option selected>Seleccioná tu drugstore más cercano</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    <input type="number" className="form-control mb-3" placeholder="TELÉFONO" />
    <input type="email" className="form-control mb-3" placeholder="EMAIL" />
    <input type="password" className="form-control mb-3" placeholder="CONTRASEÑA" />

  </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
        <button type="button" className="btn border-0 text-light">Crear usuario</button>
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