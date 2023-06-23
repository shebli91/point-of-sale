import React, { useContext, useState, useEffect } from "react";
import { UnitsOfMeasureContext } from "../contexts/unitsOfMeasureContext";
import SearchBar from "../components/SearchBar";
import UnitList from "../components/UnitList";
import UnitModal from "../components/UnitModal";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import styles from "../styles/Page.module.css";

function UnitsPage() {
  const {
    units,
    loading,
    getUnits,
    addNewUnit,
    updateExistingUnit,
    deleteExistingUnit,
  } = useContext(UnitsOfMeasureContext);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [filteredUnits, setFilteredUnits] = useState(units);

  useEffect(() => {
    if (loading) {
      getUnits();
    }
  }, [loading, getUnits]);

  useEffect(() => {
    setFilteredUnits(
      units.filter((unit) =>
        unit.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [units, searchText]);

  const handleSubmit = (unit) => {
    if (unit.id) {
      updateExistingUnit(unit.id, unit);
    } else {
      addNewUnit(unit);
    }
    setIsModalOpen(false);
    setSelectedUnit(null);
  };

  const handleDelete = (unit) => {
    deleteExistingUnit(unit.id);
    setIsDeleteModalOpen(false);
    setSelectedUnit(null);
  };

  const handleOpenModal = (unit) => {
    if (unit && unit.id) {
      setSelectedUnit(unit);
    } else {
      setSelectedUnit(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUnit(null);
    setIsModalOpen(false);
  };

  const handleOpenDeleteModal = (unit) => {
    setSelectedUnit(unit);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedUnit(null);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.topActions}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <button onClick={() => handleOpenModal({})}>Add New Unit</button>
      </div>
      <UnitList
        units={filteredUnits}
        onEdit={handleOpenModal}
        onDelete={handleOpenDeleteModal}
      />
      <UnitModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        unit={selectedUnit || {}}
        onSubmit={handleSubmit}
        onClose={handleCloseModal}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onRequestClose={handleCloseDeleteModal}
        object={selectedUnit || {}}
        onDelete={handleDelete}
        objectType="unit"
      />
    </div>
  );
}

export default UnitsPage;
