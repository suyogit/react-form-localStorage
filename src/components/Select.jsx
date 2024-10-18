import React from "react";

const Select = ({
  label,
  id,
  name,
  value,
  onChange,
  defaults,
  option,
  error,
}) => {
  return (
    <div className="input-container">
      <label htmlFor="category">Category</label>
      <select id="category" name="category" value={value} onChange={onChange}>
        {defaults && (
          <option value="" hidden>
            {defaults}
          </option>
        )}
        {option.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};

export default Select;