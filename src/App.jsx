import React from "react";

import "./App.css";

import Login from "./views/Login";
import Registre from "./views/Registre";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { initializeApp } from "firebase/app";
import Dashboard from "./views/Dashboard";

const firebaseConfig = {
  apiKey: "AIzaSyA9Fg1TG7L0hClpFnsRRW_ps1Fn-2tghI0",
  authDomain: "smarthive-cf25a.firebaseapp.com",
  projectId: "smarthive-cf25a",
  storageBucket: "smarthive-cf25a.appspot.com",
  messagingSenderId: "220265270421",
  appId: "1:220265270421:web:ba802dd312e01048239f9c",
};

export const app = initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registre" element={<Registre />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
