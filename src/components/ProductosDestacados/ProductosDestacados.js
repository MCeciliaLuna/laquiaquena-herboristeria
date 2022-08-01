import React from 'react';
import './ProductosDestacados.css';
import { Link } from 'react-router-dom';

const ProductosDestacados = () => {
  return (
    <div className="productos-destacados border-bottom bg-light">
    <h2 className="title-productosdestacados w-100 text-center fs-1 pt-4 pb-0">Productos Destacados</h2>
    <div className="productosdestacados-media d-flex align-items-center my-3">

<div className="div-productos">
<div className="div-margin-moviles g-4 d-flex justify-content-center">
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
  <div className="card-producto d-flex justify-content-center p-0 m-3 w-25">
    <div className="card">
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