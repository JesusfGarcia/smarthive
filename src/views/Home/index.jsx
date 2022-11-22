import React from "react";

const tempMax = 38;
const tempMin = 35;
const humMax = 65;
const humMin = 40;

const colmenas = [
  {
    temp: "35",
    hume: "45",
    name: "colmena 1",
  },
  {
    temp: "36",
    hume: "70",
    name: "colmena 2",
  },
  {
    temp: "39",
    hume: "50",
    name: "colmena 3",
  },
  {
    temp: "36",
    hume: "30",
    name: "colmena 4",
  },
];

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
