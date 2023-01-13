import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './TablePedido.css'

const TablePedido = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const producto = JSON.parse(localStorage.getItem("pedido"));

  const usuarioNombre = JSON.stringify(`${usuario.nombre} ${usuario.apellido}`).replace(
    /['"]+/g,
    ""
  );
  const usuarioDireccion = JSON.stringify(`${usuario.direccion}`).replace(/['"]+/g, "");
  const usuarioTelefono = JSON.stringify(`${usuario.telefono}`).replace(/['"]+/g, "");

  const removeItem = () =>{
    localStorage.removeItem('producto')
    window.location.reload()
  }

  const [copied, setCopied] = useState(false)
  const copiedCbu = (event) => {
    setCopied(true)
    event.preventDefault()
  }
  

  return (
    <div className="m-3">
      <table className="table table-striped bg-light rounded-3 border-0">
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="fs-4">{producto.nombre}</td>
      <td className="fs-4">${producto.precio}</td>
      <td>
        <button className="btn" key={producto._id} onClick={removeItem}>X</button>
      </td>
    </tr>
  </tbody>
</table>
<div className="height-pedidos">
<h4 className="text-center text-light mb-4">Total:$1234</h4>
<div className="d-flex justify-content-center">
<form className="w-50 form-width">

  <input type="text" className="text-center form-control d-block mb-1" defaultValue={usuarioNombre} required />
  <input type="text" className="text-center form-control d-block mb-1" defaultValue={usuarioDireccion} required />
  <input type="number" className="text-center form-control d-block mb-1" defaultValue={usuarioTelefono} required />
  <select className="form-select text-center mb-1" aria-label="Default select example" required>
  <option value="Retiro del local">Retiro del local</option>
  <option value="Envío">Envío</option>
</select>
<div className="d-flex justify-content-center align-items-center d-block my-2">
    <CopyToClipboard text="21938729084940013">
  <div className="d-flex align-items-center">
<button className="m-1 btn text-light d-flex align-items-center" onClick={copiedCbu}>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-credit-card-fill me-2" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"/>
</svg>
  Pagá transfiriendo a nuestro CBU
  </button>
</div>
</CopyToClipboard>
<p className="mb-0">{copied && <span className="text-light text-center fs-6 px-1 d-flex align-items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clipboard-check-fill mx-2" viewBox="0 0 16 16">
  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
</svg>
  CBU copiado al portapapeles
  </span>}</p>
</div>
<div className="form-check text-center text-light d-block ms-3 ps-0">
  <input className="me-2" type="checkbox" value="pagado por transferencia" id="flexCheckDefault" />
  <label className="mb-0 fs-5" for="flexCheckDefault">
    Pagado
  </label>
</div>
<div className="w-100 text-center mt-4">
<button className="btn text-light">Enviar</button>
</div>
</form>
</div>
    </div>
    </div>
  );
};

export default TablePedido;