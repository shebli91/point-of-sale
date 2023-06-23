import React from "react";
import Modal from "react-modal";
import ProductForm from "./ProductForm";
import styles from "../styles/Modal.module.css";

Modal.setAppElement("#root");

function ProductModal({ isOpen, onRequestClose, product, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Modal"
      overlayClassName={styles.ReactModal__Overlay}
      className={styles.ReactModal__Content}
    >
      <h2 className={styles["modal-header"]}>
        {product && product.id ? "Update Product" : "Add Product"}
      </h2>
      <ProductForm
        product={product}
        onClose={onClose}
        onRequestClose={onRequestClose}
      />
    </Modal>
  );
}

export default ProductModal;
