import React from "react";
import banner from "../assets/images/banner.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Carousel = () => {
  const pushProductos = () => {
    Swal.fire({
      color: "#161a1d",
      title:
        "Presioná en la foto para ver las características de cada producto",
      showConfirmButton: true,
      confirmButtonText: "Entendido",
      confirmButtonColor: "#7fab1f",
    });
  };
  return (
    <div className="carousel">
      <div className="banner-carousel d-flex justify-content-center align-items-center">
        <img src={banner} alt="logo" className="w-100" />
        <Link to="/productos">
          <button
            className="button-carousel btn text-light"
            onClick={pushProductos}
          >
            <h3 className="mb-0 p-1">PRODUCTOS</h3>
          </button>
        </Link>
      </div>
      <div className="carousel-inner carousel-padre"></div>
    </div>
  );
};

export default Carousel;
