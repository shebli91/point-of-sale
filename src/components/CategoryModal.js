import React from "react";
import Modal from "react-modal";
import CategoryForm from "./CategoryForm";
import styles from "./CategoryModal.module.css";

Modal.setAppElement("#root");

function CategoryModal({ isOpen, onRequestClose, category, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Category Modal"
      overlayClassName={styles.ReactModal__Overlay}
      className={styles.ReactModal__Content}
    >
      <h2 className={styles["modal-header"]}>
        {category && category.id ? "Update Category" : "Add Category"}
      </h2>
      <CategoryForm
        category={category}
        onClose={onClose}
        onRequestClose={onRequestClose}
      />
    </Modal>
  );
}

export default CategoryModal;
