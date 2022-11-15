import React from "react";
import Hive from "./assets/hive.jpeg";
import Bee from "./assets/bee-png.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="backgroundimage" src={Hive} />
      <div className="logo">
        <img src={Bee} />
        <span>SMART HIVE</span>
      </div>

      <div className="form">
        <label htmlFor="email">Correo</label>
        <input id="email" placeholder="ejemplo@gmail.com" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" placeholder="8 caracteres" />
        <button>Ingresar</button>
      </div>
      <div className="links">
        <span>Crear Cuenta!</span>
        <span>Olvidé la Contraseña</span>
      </div>
    </div>
  );
}

export default App;
