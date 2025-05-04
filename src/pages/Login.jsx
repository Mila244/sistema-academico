import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

function Login() {
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (usuario.toLowerCase().includes("admin")) {
          navigate("/admin");
        } else {
          navigate("/estudiante");
        }
      };
    
      return (
        <div className="login-container">
          <div className="login-card">
            <img
              src="https://www.ulima.edu.pe/sites/all/themes/ulima/logo.png"
              alt="Logo Universidad"
              className="login-logo"
            />
            <h2>Iniciar Sesión</h2>
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
            <button onClick={handleLogin}>Ingresar</button>
          </div>
        </div>
      );
    }
    
    export default Login;