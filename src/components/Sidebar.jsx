import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ showSidebar }) {
  const navigate = useNavigate();
  return (
    <div className={`${showSidebar ? "sidebar" : "hidden"}`}>
      <span onClick={() => navigate("/dashboard/home")} className="side-item">
        Mis Colmenas
      </span>
      <span onClick={() => navigate("/dashboard/nuevo")} className="side-item">
        Registrar Colmena
      </span>
    </div>
  );
}
