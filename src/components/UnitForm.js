import React, { useState, useEffect, useContext } from "react";
import { UnitsOfMeasureContext } from "../contexts/unitsOfMeasureContext";
import styles from "./Form.module.css";

function UnitForm({ unit, onClose, onRequestClose }) {
  const { addNewUnit, updateExistingUnit } = useContext(UnitsOfMeasureContext);

  const [formUnit, setFormUnit] = useState(
    unit || {
      name: "",
      baseUnit: "",
      conversionFactor: "",
      shortName: "",
    }
  );

  useEffect(() => {
    setFormUnit(
      unit || {
        name: "",
        baseUnit: "",
        conversionFactor: "",
        shortName: "",
      }
    );
  }, [unit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formUnit.id) {
      updateExistingUnit(formUnit.id, formUnit);
    } else {
      addNewUnit(formUnit);
    }
    onClose();
  };

  const handleChange = (event) => {
    setFormUnit((prevUnit) => {
      const { name, value } = event.target;
      return {
        ...prevUnit,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles["input-group"]}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formUnit.name || ""}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles["input-group"]}>
        <label className={styles.label} htmlFor="baseUnit">
          Base Unit:
        </label>
        <input
          type="text"
          id="baseUnit"
          name="baseUnit"
          value={formUnit.baseUnit || ""}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles["input-group"]}>
        <label className={styles.label} htmlFor="conversionFactor">
          Conversion Factor:
        </label>
        <input
          type="text"
          id="conversionFactor"
          name="conversionFactor"
          value={formUnit.conversionFactor || ""}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles["input-group"]}>
        <label className={styles.label} htmlFor="shortName">
          Short Name:
        </label>
        <input
          type="text"
          id="shortName"
          name="shortName"
          value={formUnit.shortName || ""}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onRequestClose}
        >
          Close
        </button>
      </div>
    </form>
  );
}

export default UnitForm;
