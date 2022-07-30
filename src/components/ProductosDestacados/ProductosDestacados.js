import React from 'react';
import './ProductosDestacados.css';

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

<div className="div-productos w-50">
<div className="div-margin-moviles row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center">
  <div className="card-producto d-flex justify-content-center p-0 m-3 w-25">
    <div className="card">
      <img src="https://picsum.photos/400/?random=6" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <a href="/producto">
        <button type="button" className="boton-productos-destacados btn text-light">Comprar</button>
        </a>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 w-25">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=7" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <a href="/producto">
        <button type="button" className="boton-productos-destacados btn text-light">Comprar</button>
        </a>
      </div>
    </div>
  </div>
  <div className="card-producto col d-flex justify-content-center p-0 m-3 w-25">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=8" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <a href="/producto">
        <button type="button" className="boton-productos-destacados btn text-light">Comprar</button>
        </a>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 w-25">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=12" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <a href="/producto">
        <button type="button" className="boton-productos-destacados btn text-light">Comprar</button>
        </a>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 w-25">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=13" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <a href="/producto">
        <button type="button" className="boton-productos-destacados btn text-light">Comprar</button>
        </a>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 w-25">
    <div className="card ">
      <img src="https://picsum.photos/400/?random=14" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title m-0">Card title</h5>
        <p className="card-text py-2 m-0">Precio</p>
        <a href="/producto">
        <button type="button" className="boton-productos-destacados btn text-light">Comprar</button>
        </a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div className=" pb-4 px-5 d-flex aling-items-center">
<button type="button" className="w-100 btn text-light mb-0">Ver todos los productos</button>
</div>
    </div>
  );
};

export default ProductosDestacados;