import React from "react";

import Secondary from "../../components/SecondaryInput";

import { getDatabase, set, ref } from "firebase/database";

import "./styles.css";

import { getAuth } from "firebase/auth";

export default function Nuevo() {
  const [name, setName] = React.useState("");

  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [reload, setReload] = React.useState(0);

  const auth = getAuth();

  const writeUserData = async () => {
    try {
      setLoading(true);
      const db = getDatabase();
      const user = auth.currentUser;

      await set(ref(db, `${user.uid}/${name}`), {
        temp: 0,
        hume: 0,
      });
      setLoading(false);
      alert("Colmena Registrada con éxito");
      setReload(reload + 1);
    } catch (error) {
      setLoading(false);
      setError("Ocurrió un error tratando de conectar con la base de datos");
    }
  };

  React.useEffect(() => {
    if (reload !== 0) {
      setLoading(false);
      setError(null);
      setName("");
    }
  }, [reload]);

  return (
    <div className="view-container">
      <h2>Agregar Colmena</h2>
      <Secondary
        onChange={(e) => setName(e.target.value)}
        label="nombre de colmena"
        placeholder="COLMENA 1"
        type="text"
        value={name}
      />
      {error && <span>{error}</span>}
      <button onClick={writeUserData} className="buttonAgregar">
        {isLoading ? "Cargando. . . " : "Guardar"}
      </button>
    </div>
  );
}
