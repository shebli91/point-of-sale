import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchText, setSearchText }) => {
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
