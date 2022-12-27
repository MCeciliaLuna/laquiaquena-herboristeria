import React from 'react';

const UsuariosTable = () => {
  return (
    <div className="m-5">
      <table className="table table-striped bg-light rounded-3 border-0">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Dirección</th>
      <th scope="col">Teléfono</th>
      <th scope="col">Dirección</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apellido y nombre</td>
      <td>Dirección 1234</td>
      <td>3816555444</td>
      <td>Dirección 1234</td>
      <td>Usuario@mail.com</td>
      <td>
        <button className="btn">X</button>
      </td>
    </tr>
  </tbody>
</table>
</div>
  );
};

export default UsuariosTable;