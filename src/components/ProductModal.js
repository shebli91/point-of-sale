import React from "react";
import Modal from "react-modal";
import ProductForm from "./ProductForm";

Modal.setAppElement("#root");

function ProductModal({ isOpen, onRequestClose, product, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Modal"
    >
      <h2>{product && product.id ? "Update Product" : "Add Product"}</h2>
      <ProductForm product={product} onClose={onClose} />

      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default ProductModal;
