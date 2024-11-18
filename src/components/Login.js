import React, { useState } from "react";
import './Login.css';


const Login = ({ manejarToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  

  const handleLogin = async () => {
    try{
    const response = await fetch(
      "https://poo2024.unsada.edu.ar/cuentas/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error desconocido');
    }
    
   const data = await response.json();
     manejarToken(data); 
} catch (error) {
    setError(error.message); 
  }
  };

  return (
    <div className="capa">
      <h2>Iniciar sesión</h2>
      <input
        className="loginInput"
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="loginInput"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="loginBtn" onClick={handleLogin}>Iniciar sesión</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
