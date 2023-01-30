import '../CardProductoUser/CardProductoUser.css'

const CardProductoUser = ({producto}) => {

  return (
    <div className="card-producto d-flex justify-content-center align-items-around mx-2 mb-3 mt-3 rounded-3">
    <div className="bg-light text-center card-productoventa h-auto p-2 rounded-3">
    <img
      src={producto.image.secure_url}
      className="card-img-top"
      alt="nombre"
    />
    <div className="card-body">
      <h4 className="cardventa-titulo d-flex justify-content-center align-items-center card-title">{producto.nombre}</h4>
      <p className="text-muted text-categoria d-flex align-items-center justify-content-center"><i>{producto.categoria}</i></p>
      <h5 className="text-precio">$ {producto.precio}</h5>
      <div className="d-flex align-items-center justify-content-around">
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
        </div>
  );
};

export default CardProductoUser;