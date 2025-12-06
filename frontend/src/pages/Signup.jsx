import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "../css/Signup.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await api.post("/auth/signup", { username, email, password });
      alert("Usuario creado");
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data.detail) {
        alert(err.response.data.detail);
      } else {
        alert("Signup failed");
      }
    }
  };

  return (
    <>
      {/* NAVBAR (idéntica al login) */}
      <nav className="wb-signup-navbar">
        <h1 className="wb-signup-logo">WorkBank</h1>

        <div className="wb-signup-nav-links">
          <span onClick={() => navigate("/login")}>Login</span>
          <span onClick={() => navigate("/signup")}>Registro</span>
        </div>
      </nav>

      {/* MAIN */}
      <div className="wb-signup-page-wrapper">
        <div className="wb-signup-container">
          <h2>Crear cuenta</h2>

          <input
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSignup}>Registrarse</button>

          <p className="wb-signup-login-text">
            ¿Ya tienes cuenta?
            <span
              className="wb-signup-login-link"
              onClick={() => navigate("/login")}
            >
              &nbsp;Inicia sesión
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
