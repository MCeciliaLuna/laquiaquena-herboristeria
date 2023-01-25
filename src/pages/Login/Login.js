import React from "react";
import BotonWhatsapp from "../../components/BotonWhatsapp/BotonWhatsapp";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

const Login = () => {
  localStorage.clear();
  return (
    <div className="height-login">
      <BotonWhatsapp />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
