import React from "react";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/administrador";
  const cerrarSesion = () => {
    Swal.fire({
      color: "#161a1d",
      title: "¿Querés volver al inicio?",
      showDenyButton: true,
      denyButtonText: "NO",
      confirmButtonText: "SÍ",
      confirmButtonColor: "#b00215",
      denyButtonColor: "#7fab1f",
    }).then((resp) => {
      if (resp.isConfirmed) {
        window.location.href = "/";
      }
    });
  };
  return (
    <div className="navbar-completo d-block text-center pb-0">
      <nav className="navbar navbar-expand-lg">
        {isHomePage && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            fill="currentColor"
            onClick={cerrarSesion}
            class="salir-icon text-light pb-0 ms-3 my-3 bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        )}
        <div className="container-fluid d-flex align-items-center justify-content-between navbar-ipad">
          <div className="w-100">
            <div
              className="d-flex justify-content-center"
              id="navbarSupportedContent"
            >
              <p className="nombre-navbar nav-link text-light fs-5 mb-0 py-3">
                ¡Todo 100% Natural!
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
