import React, { useState, useEffect, useContext } from "react";
import { CategoriesContext } from "../contexts/categoriesContext";
import styles from "./CategoryForm.module.css";

function CategoryForm({ category, onClose, onRequestClose }) {
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
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles["input-group"]}>
        <label className={styles.label} htmlFor="name">
          Category Name:
        </label>
        <input
          id="name"
          name="name"
          value={formCategory.name || ""}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onRequestClose}
        >
          Close
        </button>
      </div>
    </form>
  );
}

export default CategoryForm;
