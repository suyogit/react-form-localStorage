import React from "react";

const Input = ({ label, id, name, value, onChange, error, type }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        id={label}
        // type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
      />
      <p className="error">{error}</p>
    </div>
  );
};

export default Input;
