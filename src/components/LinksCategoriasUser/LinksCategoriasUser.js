import React from 'react';
import { Link } from 'react-router-dom';
import './LinksCategoriasUser.css'

const LinksCategoriasUser = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-4 py-4 flex-wrap links-admin-categoria">
    <Link className="text-light mx-2 link-admin-categoria" to="/productos">Todos los productos</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/aceites">Aceites</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/capsulas">Cápsulas</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/ensobre">En sobre</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/frascos">Frascos de vidrio</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/hierbas">Hierbas</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/jabones">Jabones</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/jarabe">Jarabe</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/maca">Maca</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/nuezdelaindia">Nuez de la India</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/pomadas">Pomadas</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/sahumerios">Sahumerios</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/stevia">Stevia</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/te">Té</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/yerbas">Yerbas</Link>
    <Link className="text-light mx-2 link-admin-categoria" to="/productos/otros">Otros</Link>
      </div>
  );
};

export default LinksCategoriasUser;