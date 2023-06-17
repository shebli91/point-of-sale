import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";
import { CategoriesContext } from "../contexts/categoriesContext";
import { UnitsOfMeasureContext } from "../contexts/unitsOfMeasureContext";

function ProductForm({ product, onClose }) {
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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          value={formProduct.name || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          value={formProduct.description || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Code:
        <input
          name="code"
          value={formProduct.code || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formProduct.category || ""}
          onChange={handleChange}
          required
        >
          {categories &&
            categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
        </select>
      </label>

      <label>
        Image URL:
        <input
          name="image"
          value={formProduct.images[0] || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Price:
        <input
          name="price"
          type="number"
          value={formProduct.price || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Unit of Measure:
        <select
          name="unit"
          value={formProduct.unit || ""}
          onChange={handleChange}
          required
        >
          {units &&
            units.map((unit) => (
              <option key={unit.id} value={unit.name}>
                {unit.name}
              </option>
            ))}
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;
