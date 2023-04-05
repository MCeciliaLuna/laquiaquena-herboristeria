import { useEffect } from "react";
import "./LinksCategoriasUser.css";

const LinksCategoriasUser = ({ setSelectedCategory }) => {
  useEffect(() => {
    setSelectedCategory("Todos");
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center mt-4 py-4 flex-wrap links-admin-categoria">
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        onClick={() => setSelectedCategory("Todos")}
      >
        Todos los productos
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        id="primer-enlace"
        value="Aceites"
        onClick={() => setSelectedCategory("Aceites")}
      >
        Aceites
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Cápsulas"
        onClick={() => setSelectedCategory("Cápsulas")}
      >
        Cápsulas
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="En sobre"
        onClick={() => setSelectedCategory("En sobre")}
      >
        En sobre
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Frascos de vidrio"
        onClick={() => setSelectedCategory("Frascos de vidrio")}
      >
        Frascos de vidrio
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Hierbas"
        onClick={() => setSelectedCategory("Hierbas")}
      >
        Hierbas
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Jabones"
        onClick={() => setSelectedCategory("Jabones")}
      >
        Jabones
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Jarabe"
        onClick={() => setSelectedCategory("Jarabe")}
      >
        Jarabe
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Maca"
        onClick={() => setSelectedCategory("Maca")}
      >
        Maca
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Nuez de la India"
        onClick={() => setSelectedCategory("Nuez de la india")}
      >
        Nuez de la India
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Pomadas"
        onClick={() => setSelectedCategory("Pomadas")}
      >
        Pomadas
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Sahumerios"
        onClick={() => setSelectedCategory("Sahumerios")}
      >
        Sahumerios
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Stevia"
        onClick={() => setSelectedCategory("Stevia")}
      >
        Stevia
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Té"
        onClick={() => setSelectedCategory("Té")}
      >
        Té
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Yerbas"
        onClick={() => setSelectedCategory("Yerbas")}
      >
        Yerbas
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Otros"
        onClick={() => setSelectedCategory("Otros")}
      >
        Otros
      </a>
    </div>
  );
};

export default LinksCategoriasUser;
