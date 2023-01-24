import React from 'react';
import { Link } from 'react-router-dom';

const SelectCategoriasAdmin = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
  <Link className="text-light mx-2" to="/productosadmin">Todos los productos</Link>
  <Link className="text-light mx-2" to="/adminaceites">Aceites</Link>
  <Link className="text-light mx-2" to="/admincapsulas">Cápsulas</Link>
  <Link className="text-light mx-2" to="/adminensobre">En sobre</Link>
  <Link className="text-light mx-2" to="/adminfrascos">Frascos de vidrio</Link>
  <Link className="text-light mx-2" to="/adminhierbas">Hierbas</Link>
  <Link className="text-light mx-2" to="/adminjabones">Jabones</Link>
  <Link className="text-light mx-2" to="/adminjarabe">Jarabe</Link>
  <Link className="text-light mx-2" to="/adminmaca">Maca</Link>
  <Link className="text-light mx-2" to="/adminnuezdelaindia">Nuez de la India</Link>
  <Link className="text-light mx-2" to="/adminpomadas">Pomadas</Link>
  <Link className="text-light mx-2" to="/adminsahumerios">Sahumerios</Link>
  <Link className="text-light mx-2" to="/adminstevia">Stevia</Link>
  <Link className="text-light mx-2" to="/adminte">Té</Link>
  <Link className="text-light mx-2" to="/adminyerbas">Yerbas</Link>
  <Link className="text-light mx-2" to="/adminotros">Otros</Link>
    </div>
  );
};

export default SelectCategoriasAdmin;