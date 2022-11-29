import React from "react";

import { getDatabase, ref, onValue } from "firebase/database";

import { getAuth } from "firebase/auth";

import Hive from "../../components/Hive";

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
        hives.push(property);
      }

      setColmenas(hives);
    });
  }, []);

  return (
    <div className="view-container">
      <h1>Mis Colmenas</h1>
      <div className="card-container">
        {colmenas.map((item, idx) => {
          return <Hive key={idx} name={item} />;
        })}
      </div>
    </div>
  );
}
