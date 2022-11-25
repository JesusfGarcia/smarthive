import React from "react";
import { useNavigate } from "react-router-dom";

import Bee from "../../assets/bee-png.png";
import Container from "../../components/Container";

import Input from "../../components/Input";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const SignIn = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("uid", response.user.uid);
      setIsLoading(false);
      navigate("/dashboard/home")
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div className="logo">
        <img src={Bee} />
        <span>SMART HIVE</span>
      </div>
      <h2>Login</h2>
      <div className="form">
        <Input
          label="Correo electrónico"
          placeholder="Ingrese su correo electrónico"
          id="email"
          value={email}
          onChange={(text) => setEmail(text)}
        />
        <Input
          label="Contraseña"
          placeholder="8 digitos"
          id="password"
          type="password"
          value={password}
          onChange={(text) => setPassword(text)}
        />
        <button onClick={SignIn}>
          {isLoading ? "Cargando..." : "Ingresar"}
        </button>

        {error && <span className="errorMsg">{error}</span>}
      </div>
      <div className="links">
        <span onClick={() => navigate("/registre")}>Crear Cuenta!</span>
        <span>Olvidé la Contraseña</span>
      </div>
    </Container>
  );
}
