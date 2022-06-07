import React from 'react';
import './ProductosDestacados.css';

const ProductosDestacados = () => {
  return (
    <div className="border-top border-bottom">
    <h2 className="w-100 text-center pt-4">Productos Destacados</h2>
    <div className="productosdestacados-media d-flex justify-content-evenly align-items-center my-5">
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
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="card-producto d-flex justify-content-center p-0 w-25">
    <div className="card w-75">
      <img src="https://picsum.photos/400/?random=5" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title">Card title</h5>
        <p className="card-text"></p>
        <button type="button" class="boton-productos-destacados btn btn-outline-success">Success</button>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 w-25">
    <div className="card w-75">
      <img src="https://picsum.photos/400/?random=6" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title">Card title</h5>
        <p className="card-text"></p>
        <button type="button" class="boton-productos-destacados btn btn-outline-success">Success</button>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 w-25">
    <div className="card w-75">
      <img src="https://picsum.photos/400/?random=7" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title">Card title</h5>
        <p className="card-text"></p>
        <button type="button" class="boton-productos-destacados btn btn-outline-success">Success</button>
      </div>
    </div>
  </div>
  <div className="card-producto col d-flex justify-content-center p-0 w-25">
    <div className="card w-75">
      <img src="https://picsum.photos/400/?random=8" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title">Card title</h5>
        <p className="card-text"></p>
        <button type="button" class="boton-productos-destacados btn btn-outline-success">Success</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div className="pb-4 px-5 d-flex aling-items-center">
<button type="button" class="w-100 btn btn-success mb-0">Ver todos los productos</button>
</div>
    </div>
  );
};

export default ProductosDestacados;