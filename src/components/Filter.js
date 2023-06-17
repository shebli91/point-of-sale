import React from "react";

function Filter({ options, filter, onFilterChange }) {
  const handleChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <select value={filter} onChange={handleChange}>
      <option value="">All Categories</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Filter;
