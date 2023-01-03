import React from 'react';
import { useForm } from 'react-hook-form';
import ModalRegistro from '../ModalRegistro/ModalRegistro';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    const resp = await fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await resp.json();

    try {
      if (json.usuario.role === "ADMIN") {
        localStorage.setItem("access-token", json.token);
        localStorage.setItem("role", json.usuario.role);
        window.location.href = "/adminpage";
      } else if (json.usuario.role === "USER") {
        localStorage.setItem("access-token", json.token);
        localStorage.setItem("role", json.usuario.role);
        localStorage.setItem("usuario", JSON.stringify(json.usuario));
        window.location.href = "/home";
      }
    } catch (error) {
      alert("El usuario o la contraseña que ingresaste no es correcto");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center text-center w-100 h-100">
      <div className="mb-0 pb-0">
      <form className="pb-0 mt-5 mb-0" onSubmit={handleSubmit(handleLogin)}>
        <div className="pb-4">
    <h3 className="text-light">Bienvenid@ a</h3>
    <h1 className="text-light pb-2">🌿LA QUIAQUEÑA HERBORISTERÍA🌿</h1>
    <h4 className="text-light">Registrate para continuar</h4>
    </div>
  <div className="mb-3 w-100">
    <input type="email" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="EMAIL" {...register("email", { require: true })} required />
  </div>
  <div className="mb-2 w-100">
    <input type="password" className="form-control text-center" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="CONTRASEÑA" {...register("contraseña", { require: true })} required />
  </div>
  <button type="submit" className="btn border-0 text-light m-0">INGRESAR</button>
</form>
<ModalRegistro />
</div>
    </div>
  );
};

export default Login;