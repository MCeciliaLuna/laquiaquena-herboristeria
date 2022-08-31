import React from 'react';
import './UsuarioLogueado.css';
import { Link } from 'react-router-dom';

const UsuarioLogueado = () => {
  return (
    <div className="page-usuariologueado bg-light">
      <h2 className="text-center p-3">Page UsuarioLogueado</h2>
      <div className="d-flex justify-content-center">
<button type="button" class="text-center btn text-light p-3 mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
  AGREGAR NUEVO PRODUCTO
</button>
</div>
<div className="d-flex">
<div className="w-25 bg-light py-5 ps-5 categorias-productos">
      <ul class="list-group list-group-flush w-100">
      <Link to="/productos" className="list-group-item bg-light">Todos los productos</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Stevia</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Hierbas</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Harinas</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Maca</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Nuez de la india</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Pomadas</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Jarabe</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Jabones</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Té</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Aceites</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Sahumerios</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Indumentaria</Link>
</ul>
</div>
<div className="div-productos-page w-75 d-flex flex-wrap align-items-center justify-content-center">
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=55" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=56" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=57" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=58" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=59" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=60" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=61" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=62" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nuevo producto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn text-light">Guardar</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn text-light">Guardar</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Eliminar</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn bg-danger text-light">Eliminar</button>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default UsuarioLogueado;