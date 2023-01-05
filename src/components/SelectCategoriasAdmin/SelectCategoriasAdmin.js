import React from 'react';

const SelectCategoriasAdmin = () => {
  return (
    <div>
      <select className="form-select ms-3 px-5" aria-label="Default select example" >
  <option selected>Todos los productos</option>
  <option value="Stevia">Stevia</option>
  <option value="Hierbas">Hierbas</option>
  <option value="Maca">Maca</option>
  <option value="Cápsulas">Cápsulas</option>
  <option value="Frascos de vidrio">Frascos de vidrio</option>
  <option value="Nuez de la india">Nuez de la india</option>
  <option value="En sobre">En sobre</option>
  <option value="Pomadas">Pomadas</option>
  <option value="Jarabe">Jarabe</option>
  <option value="Jabones">Jabones</option>
  <option value="Té">Té</option>
  <option value="Aceites">Aceites</option>
  <option value="Sahumerios">Sahumerios</option>
  <option value="Otros">Otros</option>
</select>
    </div>
  );
};

export default SelectCategoriasAdmin;