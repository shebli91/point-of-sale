import React from "react";
import Modal from "react-modal";
import CategoryForm from "./CategoryForm";

Modal.setAppElement("#root");

function CategoryModal({ isOpen, onRequestClose, category, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Category Modal"
    >
      <h2>{category && category.id ? "Update Category" : "Add Category"}</h2>
      <CategoryForm category={category} onClose={onClose} />

      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default CategoryModal;
