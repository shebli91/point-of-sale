import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";
import { CategoriesContext } from "../contexts/categoriesContext";
import { UnitsOfMeasureContext } from "../contexts/unitsOfMeasureContext";
import styles from "./ProductForm.module.css";

function ProductForm({ product, onClose, onRequestClose }) {
  const { addNewProduct, updateExistingProduct } = useContext(ProductsContext);

  const { categories } = useContext(CategoriesContext);
  const { units } = useContext(UnitsOfMeasureContext);

  const [formProduct, setFormProduct] = useState(
    product || {
      name: "",
      description: "",
      price: "",
      code: "",
      unit: "",
      category: "",
      images: [""],
    }
  );

  useEffect(() => {
    setFormProduct(
      product || {
        name: "",
        description: "",
        price: "",
        code: "",
        unit: "",
        category: "",
        images: [""],
      }
    );
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formProduct.id) {
      updateExistingProduct(formProduct.id, formProduct);
    } else {
      addNewProduct(formProduct);
    }
    onClose();
  };

  const handleChange = (event) => {
    setFormProduct((prevProduct) => {
      const { name, value } = event.target;

      if (name === "image") {
        return {
          ...prevProduct,
          images: [value], // wrap the value in an array
        };
      }

      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles["input-group"]}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          name="name"
          value={formProduct.name || ""}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles["input-group"]}>
        <label className={styles.label} htmlFor="description">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formProduct.description || ""}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles["input-group"]}>
        <label className={styles.label} htmlFor="code">
          Code:
        </label>
        <input
          id="code"
          name="code"
          value={formProduct.code || ""}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles["input-group"]}>
        <label className={styles.label} htmlFor="category">
          Category:
        </label>
        <select
          id="category"
          name="category"
          value={formProduct.category || ""}
          onChange={handleChange}
          required
          className={styles.input}
        >
          {categories &&
            categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
        </select>
      </div>

      <div className={styles["input-group"]}>
        <label className={styles.label} htmlFor="image">
          Image URL:
        </label>
        <input
          id="image"
          name="image"
          value={formProduct.images[0] || ""}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles["input-group"]}>
        <label className={styles.label} htmlFor="price">
          Price:
        </label>
        <input
          id="price"
          name="price"
          type="number"
          value={formProduct.price || ""}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles["input-group"]}>
        <label className={styles.label} htmlFor="unit">
          Unit of Measure:
        </label>
        <select
          id="unit"
          name="unit"
          value={formProduct.unit || ""}
          onChange={handleChange}
          required
          className={styles.input}
        >
          {units &&
            units.map((unit) => (
              <option key={unit.id} value={unit.name}>
                {unit.name}
              </option>
            ))}
        </select>
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

export default ProductForm;
