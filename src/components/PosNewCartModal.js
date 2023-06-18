import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { CartsContext } from "../contexts/cartsContext";

Modal.setAppElement("#root");

function PosNewCartModal({ isOpen, onRequestClose }) {
  const { createNewCart } = useContext(CartsContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createNewCart({
      firstName,
      lastName,
      address,
      description,
    });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="New Cart Modal"
    >
      <h2>Add New Cart</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Address
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Description (optional)
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onRequestClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
}

export default PosNewCartModal;
