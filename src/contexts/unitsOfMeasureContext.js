import React, { createContext, useState, useEffect } from "react";
import { fetchUnits, addUnit, updateUnit, deleteUnit } from "../services/api";

export const UnitsOfMeasureContext = createContext();

export const UnitsOfMeasureContextProvider = (props) => {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUnits();
  }, []);

  const getUnits = async () => {
    setLoading(true);
    try {
      const response = await fetchUnits();
      setUnits(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch units.", error);
      setLoading(false);
    }
  };

  const addNewUnit = async (unit) => {
    try {
      const response = await addUnit(unit);
      setUnits((prevUnits) => [...prevUnits, response.data]);
    } catch (error) {
      console.error("Failed to add unit.", error);
    }
  };

  const updateExistingUnit = async (id, updatedUnit) => {
    try {
      const response = await updateUnit(id, updatedUnit);
      setUnits((prevUnits) =>
        prevUnits.map((unit) => (unit.id === id ? response.data : unit))
      );
    } catch (error) {
      console.error("Failed to update unit.", error);
    }
  };

  const deleteExistingUnit = async (id) => {
    try {
      await deleteUnit(id);
      setUnits((prevUnits) => prevUnits.filter((unit) => unit.id !== id));
    } catch (error) {
      console.error("Failed to delete unit.", error);
    }
  };

  return (
    <UnitsOfMeasureContext.Provider
      value={{
        units,
        loading,
        getUnits,
        addNewUnit,
        updateExistingUnit,
        deleteExistingUnit,
      }}
    >
      {props.children}
    </UnitsOfMeasureContext.Provider>
  );
};
