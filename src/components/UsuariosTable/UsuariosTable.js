import { useState, useEffect } from 'react';
import axios from 'axios';
import './UsuariosTable.css'

const UsuariosTable = () => {
  const eliminarUsuario = async (_id) => {
    if (window.confirm("¿Estás seguro que deseás eliminar este usuario?")) {
      await axios.delete(
        `https://laquiaquenaherboristeriabe.onrender.com/eliminarusuario/${_id}`
      );
      alert("Usuario eliminado correctamente");
      window.location.reload();
    }
  };

  const [usuarios, setUsuarios] = useState([]);
  const traerUsuarios = async () => {
    try {
      const info = await axios.get("https://laquiaquenaherboristeriabe.onrender.com/traerusuarios");
      setUsuarios((info.data))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   traerUsuarios()
  }, []);

  const usuariosFiltrados = usuarios.filter((usuario) => usuario.role === "USER");
  const aux = usuariosFiltrados.sort((a, b) => {
    if (a.apellido > b.apellido) {
      return 1;
    }
    if (a.apellido < b.apellido) {
      return -1;
    }
    return 0;
  });

  const [usuariosOrganizados, setUsuariosOrganizados] = useState([]);
  useEffect(() => {
    setUsuariosOrganizados(aux);
  }, [aux]);
  
  return (
    <div className="col d-flex flex-wrap justify-content-around">
      {usuariosOrganizados.map((usuario) => (
      <div className="card col-3 text-center mx-1 mb-3 card-usuarios">
  <div className="card-body">
    <h4 className="card-title">{usuario.apellido} {usuario.nombre}</h4>
    <p className="card-text text-muted"></p>
    <h6 className="mb-2">{usuario.email}</h6> <hr />
    <p className="card-link m-0 p-0">📍 {usuario.direccion}</p> <br />
    <a href={`https://api.whatsapp.com/send?phone=${usuario.telefono}`} target="new" className="card-link m-0 p-0">📱 {usuario.telefono}</a>
  </div>
    <button className="btn text-light d-block mx-5 mt-1 mb-3" onClick={(_id) => eliminarUsuario(usuario._id)}>Eliminar</button>
</div>))}
</div>
  );
};

export default UsuariosTable;