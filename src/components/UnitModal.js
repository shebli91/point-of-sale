import React from "react";
import Modal from "react-modal";
import UnitForm from "./UnitForm";
import styles from "./Modal.module.css";

Modal.setAppElement("#root");

function UnitModal({ isOpen, onRequestClose, unit, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Unit Modal"
      overlayClassName={styles.ReactModal__Overlay}
      className={styles.ReactModal__Content}
    >
      <h2 className={styles["modal-header"]}>
        {unit && unit.id ? "Update Unit" : "Add Unit"}
      </h2>
      <UnitForm unit={unit} onClose={onClose} onRequestClose={onRequestClose} />
    </Modal>
  );
}

export default UnitModal;
