import React from 'react';
import './LinksCategoriasUser.css'

const LinksCategoriasUser = ({ setSelectedCategory }) => {

  return (
    <div className="d-flex justify-content-center align-items-center mt-4 py-4 flex-wrap links-admin-categoria">
    <p className="text-light my-0 mx-2 link-admin-categoria" onClick={() => setSelectedCategory('all')}>Todos los productos</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Aceites')} >Aceites</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Capsulas')}>Cápsulas</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('En sobre')}>En sobre</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Frascos')}>Frascos de vidrio</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Hierbas')}>Hierbas</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Jabones')}>Jabones</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Jarabe')}>Jarabe</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Maca')}>Maca</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Nuez de la India')}>Nuez de la India</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Pomadas')}>Pomadas</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Sahumerios')}>Sahumerios</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Stevia')} >Stevia</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Te')}>Té</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Yerbas')}>Yerbas</p>
    <p className="text-light my-0 mx-2 link-admin-categoria"  onClick={() => setSelectedCategory('Otros')}>Otros</p>
      </div>
  );
};

export default LinksCategoriasUser;