import React from 'react';

const ProductosDestacados = () => {
  return (
    <div className="w-100 d-flex justify-content-evenly align-items-center">

      <div className="w-25">
      <ul className="list-group list-group-flush">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>
</div>

<div className="w-50">
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="https://picsum.photos/400/?random=5" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-outline-success">Success</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://picsum.photos/400/?random=6" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-outline-success">Success</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://picsum.photos/400/?random=7" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <button type="button" class="btn btn-outline-success">Success</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://picsum.photos/400/?random=8" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <button type="button" class="btn btn-outline-success">Success</button>
      </div>
    </div>
  </div>
</div>
</div>

    </div>
  );
};

export default ProductosDestacados;