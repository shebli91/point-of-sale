import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function DeleteConfirmationModal({ isOpen, onRequestClose, object, onDelete }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Confirmation Modal"
    >
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete {object.name}?</p>
      <button onClick={() => onDelete(object)}>Yes</button>
      <button onClick={onRequestClose}>No</button>
    </Modal>
  );
}

export default DeleteConfirmationModal;
