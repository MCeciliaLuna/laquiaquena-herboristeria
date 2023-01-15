import { useState, useEffect } from 'react';
import './TablePedidosAdmin.css';
import axios from 'axios';

const TablePedidosAdmin = () => {
  const [pedidos, setPedidos] = useState([]);
  const traerUsuarios = async () => {
    try {
      const info = await axios.get("http://localhost:8000/traerpedidos");
      setPedidos((info.data))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   traerUsuarios()
  }, []);

  const pedidoEnviado = async (_id) => {
    if (window.confirm("¿Estás seguro que se ha enviado/entregado este pedido?")) {
      await axios.delete(
        `http://localhost:8000/eliminarpedido/${_id}`
      );
      alert("¡Pedido entregado/enviado!");
      window.location.reload();
    }
  };
  
  return (
    <div className="col d-flex justify-content-around flex-wrap">
      {pedidos.map((pedido) => (
      <div className="card col-3 text-center p-2 card-pedido-admin mx-1 mb-3">
  <div className="card-body">
    <p>{pedido.datetime}</p>
    <h4 className="card-title">{pedido.nombre}</h4>
    <p className="card-text text-muted">{pedido.pedido}</p>
    <h5 className="mb-2">${pedido.precio}</h5>
    <h5 className="text-success">{pedido.pago}</h5>
    <h6 className="mb-2">{pedido.entrega}</h6> <hr />
    <p className="card-link m-0 p-0">📍 {pedido.direccion}</p> <br />
    <a href={`https://api.whatsapp.com/send?phone=${pedido.telefono}`} target="new" className="card-link m-0 p-0">📱 {pedido.telefono}</a>
  </div>
    <button className="btn text-light d-block mx-5 mt-1 mb-3" onClick={(_id) => pedidoEnviado(pedido._id)}>Entregado/Enviado</button>
</div>))}
</div>
  );
};

export default TablePedidosAdmin;