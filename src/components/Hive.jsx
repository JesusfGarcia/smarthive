import React from "react";

import { getDatabase, ref, onValue } from "firebase/database";

const tempMax = 38;
const tempMin = 35;
const humMax = 65;
const humMin = 40;

const getLevel = (hume) => {
  if (hume >= humMax) return "high";
  if (hume > humMin && hume < humMax) return "mid";
  if (hume <= humMin) return "low";
};

const getTempColor = (temp) => {
  if (temp >= tempMax) return "#c14a4a";
  if (temp > tempMin && temp < tempMax) return "#41a33a";
  if (temp <= tempMin) return "#2272d4";
};

export default function Hive({ name }) {
  const [hive, setHive] = React.useState({
    humedad: 0,
    temperatura: 0,
  });

  const db = getDatabase();
  const hiveRef = ref(db, `colmenas/`);

  React.useEffect(() => {
    onValue(hiveRef, (snapshot) => {
      const data = snapshot.val();
      if (data[name]) {
        setHive(data[name]);
      }
    });
  }, []);


  return (
    <div className="card">
      <span className="card-title">{name}</span>
      <div className="datos">
        <span
          style={{ color: getTempColor(Math.abs(hive.temperatura)) }}
          class="material-symbols-outlined big"
        >
          device_thermostat
        </span>
        <span className="cuantity">{Math.abs(hive.temperatura)}</span>
        <span class="material-symbols-outlined big blue">
          {`humidity_${getLevel(hive.humedad / 2)}`}
        </span>
        <span className="cuantity">{hive.humedad / 2}</span>
      </div>
    </div>
  );
}
