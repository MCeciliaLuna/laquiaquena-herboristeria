import React from 'react';
import './Productos.css';
import { Link } from 'react-router-dom';

const Productos = () => {
  return (
    <div className="productos-page bg-light d-flex">
      <div className="w-25 d-flex align-items-start bg-light py-5 ps-5 categorias-productos">
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

<div class="dropdown d-flex justify-content-center pt-4 pb-2">
  <button class="btn text-light dropdown-toggle fs-4 w-75" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categorías 
  </button>
<div className="w-75 dropdown-menu fs-4">
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
</div>

<div className="div-productos-page w-75 d-flex flex-wrap align-items-center justify-content-center">
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card">
      <img src="https://picsum.photos/400/?random=6" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=7" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
        
      </div>
    </div>
  </div>
  <div className="card-producto col d-flex justify-content-center p-0 m-3 col-2">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=8" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
        
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=12" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
        
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=13" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
        
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=14" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
        
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=15" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
        
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=16" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
        
      </div>
    </div>
  </div>
    </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title titulo-modal-producto" id="exampleModalLabel">Nombre Producto</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="text-center p-3">
      <img src="https://picsum.photos/400/?random=16" className="card-img" alt="..." />
      <div className="card-body p-2">
        <p className="card-title m-0 fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h4 className="card-text py-2 m-0">Precio</h4>
        <a href="https://wa.me/c/5493812183467" target="new">
        <button type="button" className="boton-productos-destacados btn text-light p-3 w-50">Comprar</button>
        </a>
        
        </div>
  </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Productos;