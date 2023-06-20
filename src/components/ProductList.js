import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProductList;
