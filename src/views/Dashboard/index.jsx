import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Home from "../Home";
import Nuevo from "../Nuevo";

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <div className="dashboard-container">
      <Header
        showSidebar={showSidebar}
        toggleMenu={() => setShowSidebar(!showSidebar)}
      />
      <div className="content">
        <Sidebar showSidebar={showSidebar} />
        <div className="content-container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/nuevo" element={<Nuevo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
