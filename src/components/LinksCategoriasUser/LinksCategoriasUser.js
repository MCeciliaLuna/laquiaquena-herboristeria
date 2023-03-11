import React from 'react';
import './LinksCategoriasUser.css'

const LinksCategoriasUser = ({ setSelectedCategory }) => {

  return (
    <div className="d-flex justify-content-center align-items-center mt-4 py-4 flex-wrap links-admin-categoria">
    <button className="text-light mx-2 link-admin-categoria" onClick={() => setSelectedCategory('all')}>Todos los productos</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Aceites')} >Aceites</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Capsulas')}>Cápsulas</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Ensobre')}>En sobre</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Frascos')}>Frascos de vidrio</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Hierbas')}>Hierbas</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Jabones')}>Jabones</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Jarabe')}>Jarabe</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Maca')}>Maca</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Nuezdelaindia')}>Nuez de la India</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Pomadas')}>Pomadas</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Sahumerios')}>Sahumerios</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Stevia')} >Stevia</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Te')}>Té</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Yerbas')}>Yerbas</button>
    <button className="text-light mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Otros')}>Otros</button>
      </div>
  );
};

export default LinksCategoriasUser;