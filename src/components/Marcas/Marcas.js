import React from 'react';
import './Marcas.css';

const Marcas = () => {
  return (
    <div className="card-group">
      <h2 className="w-100 text-center">Marcas con las que trabajamos</h2>
      <div className="w-100 d-flex justify-content-around">
    <div className="image-marcas border-0">
    <img src="https://picsum.photos/300/?random=1" className="card-img-top rounded-circle border-buttom-0" alt="..." />
  </div>
  <div className="image-marcas border-0">
    <img src="https://picsum.photos/300/?random=2" className="card-img-top rounded-circle" alt="..." />
  </div>
  <div className="image-marcas border-0">
    <img src="https://picsum.photos/300/?random=3" className="card-img-top rounded-circle" alt="..." />
  </div>
  </div>
</div>
  );
};

export default Marcas;