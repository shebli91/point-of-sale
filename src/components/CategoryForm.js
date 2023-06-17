import React, { useState, useEffect, useContext } from "react";
import { CategoriesContext } from "../contexts/categoriesContext";

function CategoryForm({ category, onClose }) {
  const { addNewCategory, updateExistingCategory } =
    useContext(CategoriesContext);

  const [formCategory, setFormCategory] = useState(category || { name: "" });

  useEffect(() => {
    setFormCategory(category || { name: "" });
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formCategory.id) {
      updateExistingCategory(formCategory.id, formCategory);
    } else {
      addNewCategory(formCategory);
    }
    onClose();
  };

  const handleChange = (event) => {
    setFormCategory((prevCategory) => {
      const { name, value } = event.target;

      return {
        ...prevCategory,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category Name:
        <input
          name="name"
          value={formCategory.name || ""}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CategoryForm;
