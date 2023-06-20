import React from "react";
import Modal from "react-modal";
import styles from "./DeleteConfirmationModal.module.css";

Modal.setAppElement("#root");

function DeleteConfirmationModal({ isOpen, onRequestClose, object, onDelete }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Confirmation Modal"
      className={styles.modalContainer}
      overlayClassName={styles.Overlay}
    >
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete {object.name}?</p>
      <div className={styles.buttonContainer}>
        <button onClick={() => onDelete(object)}>Yes</button>
        <button onClick={onRequestClose}>No</button>
      </div>
    </Modal>
  );
}

export default DeleteConfirmationModal;
