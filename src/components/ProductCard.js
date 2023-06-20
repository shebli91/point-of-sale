import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productImageContainer}>
        <img
          className={styles.productImage}
          src={product.images[0]}
          alt={product.name}
        />
      </div>
      <div className={styles.productDetailsContainer}>
        <h2>{product.name}</h2>
        <p>
          <span className={styles.details}>Description:</span>{" "}
          {product.description}
        </p>
        <div className={styles.pairContainer}>
          <p>
            <span className={styles.details}>Code:</span> {product.code}
          </p>
          <p>
            <span className={styles.details}>Category:</span> {product.category}
          </p>
        </div>
        <div className={styles.pairContainer}>
          <p>
            <span className={styles.details}>Unit:</span> {product.unit}
          </p>
          <p>
            <span className={styles.details}>Price:</span> ${product.price}
          </p>
        </div>
        <div className={styles.productButtons}>
          <button onClick={() => onEdit(product)}>Edit</button>
          <button onClick={() => onDelete(product)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
