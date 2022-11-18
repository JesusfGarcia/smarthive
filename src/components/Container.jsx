import React from "react";

import Hive from "../assets/hive.jpeg";

export default function Container({ children }) {
  return (
    <div className="App">
      <img className="backgroundimage" src={Hive} />
      {children}
    </div>
  );
}
