import React from "react";
import Modal from "react-modal";
import UnitForm from "./UnitForm";

Modal.setAppElement("#root");

function UnitModal({ isOpen, onRequestClose, unit }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Unit Modal"
    >
      <h2>{unit && unit.id ? "Update Unit" : "Add Unit"}</h2>
      <UnitForm unit={unit} onClose={onRequestClose} />

      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default UnitModal;
