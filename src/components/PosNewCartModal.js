import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { CartsContext } from "../contexts/cartsContext";
import Styles from "../styles/Modal.module.css";
import styles from "../styles/Form.module.css";

Modal.setAppElement("#root");

function PosNewCartModal({ isOpen, onRequestClose }) {
  const { createNewCart } = useContext(CartsContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [discountRate, setDiscountRate] = useState(0);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setAddress("");
    setDescription("");
    setDiscountRate("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createNewCart({
      firstName,
      lastName,
      address,
      description,
      discountRate,
    });

    resetForm();
    onRequestClose();
  };

  const handleClose = () => {
    resetForm();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="New Cart Modal"
      overlayClassName={Styles.ReactModal__Overlay}
      className={Styles.ReactModal__Content}
    >
      <h2 className={Styles["modal-header"]}>Add New Cart</h2>
      <form onSubmit={handleFormSubmit} className={styles.container}>
        <div className={styles["input-group"]}>
          <label className={styles.label} htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles["input-group"]}>
          <label className={styles.label}>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles["input-group"]}>
          <label className={styles.label}>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles["input-group"]}>
          <label className={styles.label}>Description (optional)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles["input-group"]}>
          <label className={styles.label}>Discount Rate (%)</label>
          <input
            type="number"
            value={discountRate}
            onChange={(e) => setDiscountRate(e.target.value)}
            className={styles.input}
            min="0"
            max="100"
          />
        </div>

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default PosNewCartModal;
