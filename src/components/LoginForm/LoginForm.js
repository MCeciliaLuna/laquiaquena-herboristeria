import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    const resp = await fetch(
      "https://laquiaquenaherboristeriabe.onrender.com/login",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await resp.json();

    try {
      if (json.usuario.role === "ADMIN") {
        sessionStorage.setItem("access-token", json.token);
        sessionStorage.setItem("role", json.usuario.role);
        window.location.href = "/administrador";
      }
    } catch (error) {
      Swal.fire({
        color: "#161a1d",
        title: "Contraseña o usuario incorrectas",
        timer: 1000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center text-center w-100 h-100">
      <div className="mb-0 pb-0">
        <div className="pb-2">
          <h3 className="text-title text-light">Bienvenid@ a</h3>
          <h1 className="text-title-principal text-light pb-2">
            🌿LA QUIAQUEÑA HERBORISTERÍA🌿
          </h1>
          <h4 className="text-registro text-light">
            Registrate para continuar:
          </h4>
        </div>
        <form
          className="d-flex flex-column justify-content-center align-items-center mt-1 mb-0"
          onSubmit={handleSubmit(handleLogin)}
        >
          <input
            type="email"
            className="form-control text-center input-login w-75"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="EMAIL"
            {...register("email", { require: true })}
            required
          />
          <input
            type="password"
            className="form-control text-center input-login mt-2 w-75"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="CONTRASEÑA"
            {...register("contraseña", { require: true })}
            required
          />
          <button
            type="submit"
            className="boton-login btn border-0 text-light p-2 mt-2"
          >
            INGRESAR
          </button>
        </form>
        <Link to="/">
          <button className="btn btn-login text-light mt-3 fs-6">Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
