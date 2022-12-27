import React from 'react';

const TablePedido = () => {
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
<form className="">

  <input type="text" className="text-center form-control d-block mb-1" value="Nombre" />
  <input type="text" className="text-center form-control d-block mb-1" value="Dirección" />
  <input type="number" className="text-center form-control d-block mb-1" value="3814555666" />
  <input type="text" className="text-center form-control d-block mb-1" value="Drugstore más cercano" />
  <input type="text" className="text-center form-control d-block mb-1" value="Teléfono" />
  <div className="m-3">
  <div className="form-check mb-2">
  <input className="form-check-input" name="checkbox" type="radio" value="Retiro del local" id="flexCheckDefault" />
  <label className="form-check-label text-light" for="flexCheckDefault">
    Retiro del local
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" name="checkbox" type="radio" value="Envío" id="flexCheckChecked" />
  <label className="form-check-label text-light" for="flexCheckChecked">
    Envío
  </label>
</div>
</div>
<div className="w-100 text-center">
<button className="btn text-light">Enviar</button>
</div>
</form>
</div>
    </div>
  );
};

export default TablePedido;