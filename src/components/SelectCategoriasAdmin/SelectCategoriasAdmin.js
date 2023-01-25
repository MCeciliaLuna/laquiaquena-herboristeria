import React from 'react';
import { Link } from 'react-router-dom';
import './SelectCategoriasAdmin.css'

const SelectCategoriasAdmin = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-4 py-4 flex-wrap links-admin-categoria">
  <Link className="text-light mx-2 link-admin-categoria" to="/productosadmin">Todos los productos</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminaceites">Aceites</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/admincapsulas">Cápsulas</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminensobre">En sobre</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminfrascos">Frascos de vidrio</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminhierbas">Hierbas</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminjabones">Jabones</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminjarabe">Jarabe</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminmaca">Maca</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminnuezdelaindia">Nuez de la India</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminpomadas">Pomadas</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminsahumerios">Sahumerios</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminstevia">Stevia</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminte">Té</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminyerbas">Yerbas</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/adminotros">Otros</Link>
    </div>
  );
};

export default SelectCategoriasAdmin;