import React from "react";

function UnitList({ units, onEdit, onDelete }) {
  return (
    <table>
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
              <button onClick={() => onEdit(unit)}>Edit</button>
              <button onClick={() => onDelete(unit)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UnitList;
