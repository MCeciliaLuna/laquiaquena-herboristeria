import React from 'react';
import './Clientes.css';

const Clientes = () => {
  return (
    <div className="card-group pt-2 pb-5">
      <h2 className="w-100 text-center py-4">Nuestros Clientes</h2>
      <div className="w-100 d-flex justify-content-evenly d-inline-flex">
    <div className="image-marcas border-0">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCl76HSmvoqVc_8z5WHtfkFVGt6pHzeUWYVG4iUyuk2VBsV_aHl0lRL5ZZIiY69i9tp18&usqp=CAU" className="card-img-top rounded-circle" alt="..." />
    <div class="card-testimonio card">
    <div class="texto-testimonio card-body">
    <h5>Alejandro</h5>
    <h6>"Tengo diabetes y siempre encuentro en La Quiaqueña Herboristería un producto que me ayuda a estar mejor"</h6>
  </div>
</div>
  </div>
  <div className="image-marcas border-0">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrIPUVHe81YZpOiRUNwRq32b7QEpEVP6YeuAImz3FaOtVYPTNNkRveATsieLpH2_kr4g&usqp=CAU" className="card-img-top rounded-circle" alt="..." />
    <div class="card-testimonio card">
    <div class="texto-testimonio card-body">
    <h5>Lucía</h5>
    <h6>"Los productos de La Quiaqueña Herboristería son, sin dudas, los mejores; además, muy buena la atención"</h6>
  </div>
</div>
  </div>
  <div className="image-marcas border-0">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHjMzM5qzBjS64SJEIyCQkLgXODzDLznFPOt54tmyPNXP3BQ78_AN83FAlbeGujmuPCg&usqp=CAU" className="card-img-top rounded-circle" alt="..." />
    <div class="card-testimonio card">
  <div class="texto-testimonio card-body">
    <h5>Eduardo</h5>
    <h6>"Los productos de La Quiaqueña Herboristería han mejorado notablemente mi salud"</h6>
  </div>
</div>
</div>
  </div>
  </div>
  );
};

export default Clientes;