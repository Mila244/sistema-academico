import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (rol) => {
    if (rol === "estudiante") navigate("/estudiante");
    else if (rol === "admin") navigate("/admin");
  };

  return (
    <div>
      <h2>Login simulado</h2>
      <button onClick={() => handleLogin("estudiante")}>Ingresar como Estudiante</button>
      <button onClick={() => handleLogin("admin")}>Ingresar como Admin</button>
    </div>
  );
}

export default Login;
