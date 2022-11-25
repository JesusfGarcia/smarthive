import React from "react";

const tempMax = 38;
const tempMin = 35;
const humMax = 65;
const humMin = 40;

import { getDatabase, ref, onValue } from "firebase/database";

import { getAuth } from "firebase/auth";

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

export default function Home() {
  const [colmenas, setColmenas] = React.useState([]);
  const db = getDatabase();
  const auth = getAuth();
  const user = auth.currentUser;
  const hiveRef = ref(db, `${user.uid}`);

  React.useEffect(() => {
    onValue(hiveRef, (snapshot) => {
      const data = snapshot.val();
      const hives = [];
      for (let property in data) {
        hives.push({
          name: property,
          hume: data[property].hume,
          temp: data[property].temp,
        });
      }

      console.log(hives);
      setColmenas(hives);
    });
  }, []);

  return (
    <div className="view-container">
      <h1>Mis Colmenas</h1>
      <div className="card-container">
        {colmenas.map((item, idx) => {
          return (
            <div className="card" key={idx}>
              <span className="card-title">{item.name}</span>
              <div className="datos">
                <span
                  style={{ color: getTempColor(item.temp) }}
                  class="material-symbols-outlined big"
                >
                  device_thermostat
                </span>
                <span className="cuantity">{item.temp}</span>
                <span class="material-symbols-outlined big blue">
                  {`humidity_${getLevel(item.hume)}`}
                </span>
                <span className="cuantity">{item.hume}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
