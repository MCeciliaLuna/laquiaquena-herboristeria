import React from 'react';

const TablePedido = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const usuarioNombre = JSON.stringify(`${usuario.nombre} ${usuario.apellido}`).replace(
    /['"]+/g,
    ""
  );
  const usuarioDireccion = JSON.stringify(`${usuario.direccion}`).replace(/['"]+/g, "");
  const usuarioTelefono = JSON.stringify(`${usuario.telefono}`).replace(/['"]+/g, "");
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
<div className="w-100 text-center">
<button className="btn text-light">Enviar</button>
</div>
</form>
</div>
    </div>
  );
};

export default TablePedido;