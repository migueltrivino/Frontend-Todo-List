import { useState } from "react";
import api from "../services/api";
import "../css/Login.css";
import { saveToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { username, password });
      saveToken(res.data.access_token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="wb-login-navbar">
        <h1 className="wb-login-logo">WorkBank</h1>

        <div className="wb-login-nav-links">
          <span onClick={() => navigate("/login")}>Login</span>
          <span onClick={() => navigate("/signup")}>Registro</span>
        </div>
      </nav>

      {/* MAIN */}
      <div className="wb-login-page">
        <div className="wb-login-container">
          <h2>Iniciar Sesión</h2>

          <input
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Entrar</button>

          <p className="wb-login-signup-text">
            ¿No tienes cuenta?{" "}
            <span
              className="wb-login-signup-link"
              onClick={() => navigate("/signup")}
            >
              Regístrate
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
