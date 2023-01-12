import React from 'react';
import './TablePedidosAdmin.css'

const TablePedidosAdmin = () => {
  return (
    <div className="col d-flex justify-content-around flex-wrap">
      <div className="card col-3 text-center p-2 card-pedido-admin mx-1 mb-3">
  <div className="card-body">
    <h4 className="card-title">Apellido y Nombre</h4>
    <p className="card-text text-muted">Producto y precio</p>
    <h5 className="mb-2">$1234</h5>
    <h5 className="text-success">Pagado</h5>
    <h6 className="mb-2">Retiro del local</h6> <hr />
    <p className="card-link m-0 p-0">📍 Gobernador Gutierrez 1535</p> <br />
    <a href="https://api.whatsapp.com/send?phone=543816427068" target="new" className="card-link m-0 p-0">📱 3816427068</a>
  </div>
    <button className="btn text-light d-block mx-5 mt-1 mb-3">Entregado/Enviado</button>
</div>
<div className="card col-3 text-center p-2 card-pedido-admin mx-1 mb-3">
  <div className="card-body">
    <h4 className="card-title">Apellido y Nombre</h4>
    <p className="card-text text-muted">Producto y precio</p>
    <h5 className="mb-2">$1234</h5>
    <h5 className="text-success">No pagado</h5>
    <h6 className="mb-2">Retiro del local</h6> <hr />
    <p className="card-link m-0 p-0">📍 Gobernador Gutierrez 1535</p> <br />
    <a href="https://api.whatsapp.com/send?phone=543816427068" target="new" className="card-link m-0 p-0">📱 3816427068</a>
  </div>
  <button className="btn text-light d-block mx-5 mt-1 mb-3">Entregado/Enviado</button>
</div>
<div className="card col-3 text-center p-2 card-pedido-admin mx-1 mb-3">
  <div className="card-body">
    <h4 className="card-title">Apellido y Nombre</h4>
    <p className="card-text text-muted">Producto y precio</p>
    <h5 className="mb-2">$1234</h5>
    <h5 className="text-success">Pagado</h5>
    <h6 className="mb-2">Retiro del local</h6> <hr />
    <p className="card-link m-0 p-0">📍 Gobernador Gutierrez 1535</p> <br />
    <a href="https://api.whatsapp.com/send?phone=543816427068" target="new" className="card-link m-0 p-0">📱 3816427068</a>
  </div>
  <button className="btn text-light d-block mx-5 mt-1 mb-3">Entregado/Enviado</button>
</div>
</div>
  );
};

export default TablePedidosAdmin;