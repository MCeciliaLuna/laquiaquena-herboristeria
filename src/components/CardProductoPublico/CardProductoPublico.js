import '../CardProductoPublico/CardProductoPublico.css'

const CardProductoPublico = ({producto}) => {

  return (
          <div className="card-producto d-flex justify-content-center col-2 mx-1 mb-3 mt-3 rounded-3">
          <div className="card h-auto text-center">
            <div className="card-image-producto">
            <img
              src={producto.image.secure_url}
              className="card-img-top"
              alt={producto.nombre}
            /> 
            </div>
            <div className="card-body card-height">
              <h4 id="nombre" className="d-flex justify-content-center align-items-around card-title">{producto.nombre}</h4>
              <p><i>{producto.categoria}</i></p>
              <p className="cardpublico-descripcion d-flex justify-content-center align-items-center card-text">{producto.descripcion}</p>
              <p id="precio"><b>${producto.precio}</b></p>
              <button
                  type="button"
                  className="btn button-destacados-comprar text-light mt-3 align-items-end"
                  onClick={(_id)=> localStorage.setItem('pedido', JSON.stringify(producto))}
                > 
                  Comprar
                </button>
            </div>
          </div>
        </div>
  );
};

export default CardProductoPublico;