import React from 'react';

const TablePedido = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const usuarioNombre = JSON.stringify(`${usuario.nombre} ${usuario.apellido}`).replace(
    /['"]+/g,
    ""
  );
  const usuarioDireccion = JSON.stringify(`${usuario.direccion}`).replace(/['"]+/g, "");
  const usuarioTelefono = JSON.stringify(`${usuario.telefono}`).replace(/['"]+/g, "");

  const copiarCbu = (copycbu) => {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(copycbu).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.exeCommand("copy");
    document.body.removeChild(aux)
  }

  return (
    <div className="m-5">
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
      <td>Producto</td>
      <td>$123</td>
      <td>
        <button className="btn">X</button>
      </td>
    </tr>
  </tbody>
</table>
<h4 className="text-center text-light mb-4">Total:$1234</h4>
<div className="d-flex justify-content-center">
<form className="w-50">

  <input type="text" className="text-center form-control d-block mb-1" defaultValue={usuarioNombre} required />
  <input type="text" className="text-center form-control d-block mb-1" defaultValue={usuarioDireccion} required />
  <input type="number" className="text-center form-control d-block mb-1" defaultValue={usuarioTelefono} required />
  <select className="form-select text-center mb-1" aria-label="Default select example" required>
  <option value="Retiro del local">Retiro del local</option>
  <option value="Envío">Envío</option>
</select>
<div className="d-flex justify-content-center align-items-center d-block my-2">
  <div className="d-flex">
<input type="text" className="form-control text-center w-75 p-0" value="21938729084940013" id="copycbu"/>
<button onclick={copiarCbu} className="ms-1 btn text-light">Copiar</button>
</div>
<div class="form-check text-center text-light d-block ms-3 ps-0">
  <input className="me-2" type="checkbox" value="pagado por transferencia" id="flexCheckDefault" />
  <label className="mb-0 fs-5" for="flexCheckDefault">
    Pagado
  </label>
</div>
</div>
<div className="w-100 text-center mt-4">
<button className="btn text-light">Enviar</button>
</div>
</form>
</div>
    </div>
  );
};

export default TablePedido;