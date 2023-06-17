import React, { useState, useEffect, useContext } from "react";
import { UnitsOfMeasureContext } from "../contexts/unitsOfMeasureContext";

function UnitForm({ unit, onClose }) {
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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formUnit.name || ""}
          onChange={handleChange}
        />
      </label>

      <label>
        Base Unit:
        <input
          type="text"
          name="baseUnit"
          value={formUnit.baseUnit || ""}
          onChange={handleChange}
        />
      </label>

      <label>
        Conversion Factor:
        <input
          type="text"
          name="conversionFactor"
          value={formUnit.conversionFactor || ""}
          onChange={handleChange}
        />
      </label>

      <label>
        Short Name:
        <input
          type="text"
          name="shortName"
          value={formUnit.shortName || ""}
          onChange={handleChange}
        />
      </label>

      <button type="submit">submit</button>
    </form>
  );
}

export default UnitForm;
