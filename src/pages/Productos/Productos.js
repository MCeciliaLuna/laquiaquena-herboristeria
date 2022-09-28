import React from 'react';
import './Productos.css';

const Productos = () => {

  return (
    <div className="productos-page bg-light d-flex">

<div className="div-productos-page d-flex flex-wrap align-items-center justify-content-center">
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


    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title titulo-modal-producto" id="exampleModalLabel">Nombre Producto</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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