import React from "react";

export default function Header({ toggleMenu, showSidebar }) {
  return (
    <div className="header">
      <span onClick={toggleMenu} class={`material-symbols-outlined`}>
        {`${showSidebar ? "close" : "menu"}`}
      </span>
      <h3>Smart Hive</h3>
    </div>
  );
}
