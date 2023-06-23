import React from "react";
import styles from "../styles/Filter.module.css";

function Filter({ options, filter, onFilterChange }) {
  const handleChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <select
        className={styles.filterSelect}
        value={filter}
        onChange={handleChange}
      >
        <option value="">All Categories</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
