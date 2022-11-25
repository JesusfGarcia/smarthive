import React from "react";

export default function Secondary({
  label = "",
  placeholder = "",
  id = "",
  type = "text",
  value = "",
  onChange,
}) {
  return (
    <>
      <label className="secondaryLabel" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        className="secondaryInput"
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}
