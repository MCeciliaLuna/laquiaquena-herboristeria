import React from 'react';
import './ProductosDestacados.css';
import { Link } from 'react-router-dom';

const ProductosDestacados = () => {
  return (
    <div className="productos-destacados border-bottom bg-light">
    <h2 className="title-productosdestacados w-100 text-center fs-1 py-4">Productos Destacados</h2>
    <div className="dropdown dropdown-moviles px-5 pb-4">
      <div className="d-flex justify-content-center">
  <button className="btn btn-secondary dropdown-toggle w-75" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu w-75" aria-labelledby="dropdownMenuButton1">
  <a href="/#" className="list-group-item">Todos los productos</a>
  <a href="/#" className="list-group-item">Stevia</a>
  <a href="/#" className="list-group-item">Hierbas</a>
  <a href="/#" className="list-group-item">Harinas</a>
  <a href="/#" className="list-group-item">Maca</a>
  <a href="/#" className="list-group-item">Nuez de la india</a>
  <a href="/#" className="list-group-item">Pomadas</a>
  <a href="/#" className="list-group-item">Jarabe</a>
  <a href="/#" className="list-group-item">Jabones</a>
  <a href="/#" className="list-group-item">Té</a>
  <a href="/#" className="list-group-item">Aceites</a>
  <a href="/#" className="list-group-item">Sahumerios</a>
  <a href="/#" className="list-group-item">Indumentaria</a>
  </ul>
</div>
</div>
    <div className="productosdestacados-media d-flex justify-content-evenly align-items-center my-3">
      <div className="div-categorias w-25">
      <ul className="list-group list-group-flush">
  <a href="/#" className="list-group-item bg-light">Todos los productos</a>
  <a href="/#" className="list-group-item bg-light">Stevia</a>
  <a href="/#" className="list-group-item bg-light">Hierbas</a>
  <a href="/#" className="list-group-item bg-light">Harinas</a>
  <a href="/#" className="list-group-item bg-light">Maca</a>
  <a href="/#" className="list-group-item bg-light">Nuez de la india</a>
  <a href="/#" className="list-group-item bg-light">Pomadas</a>
  <a href="/#" className="list-group-item bg-light">Jarabe</a>
  <a href="/#" className="list-group-item bg-light">Jabones</a>
  <a href="/#" className="list-group-item bg-light">Té</a>
  <a href="/#" className="list-group-item bg-light">Aceites</a>
  <a href="/#" className="list-group-item bg-light">Sahumerios</a>
  <a href="/#" className="list-group-item bg-light">Indumentaria</a>
</ul>
</div>

<div className="div-productos w-50">
<div className="div-margin-moviles row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center">
  <div className="card-producto d-flex justify-content-center p-0 m-3 w-25">
    <div className="card">
      <img src="https://picsum.photos/400/?random=6" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 w-25">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=7" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
      </div>
    </div>
  </div>
  <div className="card-producto col d-flex justify-content-center p-0 m-3 w-25">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=8" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 w-25">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=12" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 w-25">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=13" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 w-25">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=14" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div className=" pb-4 px-5 d-flex aling-items-center">
  <Link to="/productos" className="w-100 btn text-light mb-0">
Ver todos los productos
</Link>
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

export default ProductosDestacados;