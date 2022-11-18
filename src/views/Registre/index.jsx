import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import Input from "../../components/Input";

import Bee from "../../assets/bee-png.png";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Registre() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const navigate = useNavigate();

  const SignUp = async () => {
    try {
      setIsLoading(true);
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      setIsSuccess(true);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <Container>
      <div className="logo">
        <img src={Bee} />
        <span>SMART HIVE</span>
      </div>
      <h2>Registro</h2>
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
        <button onClick={SignUp}>
          {isLoading ? "Cargando..." : "Registrarme"}
        </button>
      </div>
      {error && <span className="errorMsg">{error}</span>}
      <div className="links">
        <span onClick={() => navigate("/")}>Ya tengo una cuenta</span>
      </div>
    </Container>
  );
}
