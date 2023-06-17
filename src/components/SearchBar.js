import React from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchText}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
