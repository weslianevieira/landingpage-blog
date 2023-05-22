import axios from "axios";
import { useState } from "react";
import "./registerPage.css";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("https://orientalfisiodf-api.onrender.com/api/auth/register", {
        username,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
      <form className="register" onSubmit={handleSubmit}>
      <h1>Registrar Usuário</h1>
        <input
          type="text"
          placeholder="Nome do usuário"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="registerInput"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          Salvar
        </button>
        {error && <span style={{color:"red", marginTop:"10px"}}>Algo deu errado!</span>}
      </form>
    
      
  );
}
