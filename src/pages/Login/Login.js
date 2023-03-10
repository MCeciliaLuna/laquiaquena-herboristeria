import React from "react";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

const Login = () => {
  localStorage.clear();
  return (
    <div className="height-login">
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
