import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import "./loginPage.css";

export default function LoginPage() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://orientalfisiodf-api.onrender.com/api/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Entrar</h1>
      <input type="text" placeholder="Nome do usuário" ref={userRef} />
      <input type="password" placeholder="Senha" ref={passwordRef} />
      <button type="submit" disabled={isFetching}>
        Entrar
      </button>
      {error && (
        <span className="alert">
         Dados incorretos{" "}
        </span>
      )}
    </form>
  );
}
/*


    
        
       
*/
