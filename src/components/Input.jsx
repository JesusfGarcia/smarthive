import React from "react";

export default function Input({
  label = "",
  placeholder = "",
  id = "",
  type = "text",
  value = "",
  onChange,
}) {
  return (
    <>
      <label className="myInputLabel" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        className="myInput"
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
