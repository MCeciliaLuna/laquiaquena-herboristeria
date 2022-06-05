import React from 'react';
import './ProductosDestacados.css';

const ProductosDestacados = () => {
  return (
    <div className="border-top border-bottom">
    <h2 className="w-100 text-center pt-4">Productos Destacados</h2>
    <div className="d-flex justify-content-evenly align-items-center my-5">
      <div className="w-25">
      <ul className="list-group list-group-flush">
  <a href="/#" className="list-group-item">An item</a>
  <a href="/#" className="list-group-item">A second item</a>
  <a href="/#" className="list-group-item">A third item</a>
  <a href="/#" className="list-group-item">A fourth item</a>
  <a href="/#" className="list-group-item">And a fifth one</a>
</ul>
</div>

<div className="w-50">
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="card-producto d-flex justify-content-center p-0 w-25">
    <div className="card w-75">
      <img src="https://picsum.photos/400/?random=5" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title">Card title</h5>
        <p className="card-text"></p>
        <button type="button" class="btn btn-outline-success">Success</button>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 w-25">
    <div className="card w-75">
      <img src="https://picsum.photos/400/?random=6" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title">Card title</h5>
        <p className="card-text"></p>
        <button type="button" class="btn btn-outline-success">Success</button>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 w-25">
    <div className="card w-75">
      <img src="https://picsum.photos/400/?random=7" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title">Card title</h5>
        <p className="card-text"></p>
        <button type="button" class="btn btn-outline-success">Success</button>
      </div>
    </div>
  </div>
  <div className="card-producto col d-flex justify-content-center p-0 w-25">
    <div className="card w-75">
      <img src="https://picsum.photos/400/?random=8" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h5 className="card-title">Card title</h5>
        <p className="card-text"></p>
        <button type="button" class="btn btn-outline-success">Success</button>
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