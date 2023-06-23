import React from "react";
import styles from "../styles/List.module.css";

function UnitList({ units, onEdit, onDelete }) {
  return (
    <div className={styles.TableContainer}>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Unit of Measure Name</th>
            <th>Base Unit</th>
            <th>Conversion Factor</th>
            <th>Short Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit, index) => (
            <tr key={unit.id}>
              <td>{index + 1}</td>
              <td>{unit.name}</td>
              <td>{unit.baseUnit}</td>
              <td>{unit.conversionFactor}</td>
              <td>{unit.shortName}</td>
              <td>
                <div className={styles.actionContainer}>
                  <button
                    className={`${styles.button} ${styles.editButton}`}
                    onClick={() => onEdit(unit)}
                  >
                    Edit
                  </button>
                  <button
                    className={`${styles.button} ${styles.deleteButton}`}
                    onClick={() => onDelete(unit)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UnitList;
