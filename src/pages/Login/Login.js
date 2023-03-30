import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

const Login = () => {
  localStorage.clear();
  return (
    <div className="height-login">
      <LoginForm />
    </div>
  );
};

export default Login;
