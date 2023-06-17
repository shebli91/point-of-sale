import React, { useState, useEffect, useContext } from "react";
import { CategoriesContext } from "../contexts/categoriesContext";
import CategoryList from "../components/CategoryList";
import CategoryModal from "../components/CategoryModal";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import SearchBar from "../components/SearchBar";

function Categories() {
  const { categories, deleteExistingCategory } = useContext(CategoriesContext);

  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [searchText, setSearchText] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOpenModal = (category) => {
    if (category && category.id) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
    setIsModalOpen(false);
  };

  const handleOpenDeleteModal = (category) => {
    setSelectedCategory(category);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedCategory(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteCategory = (category) => {
    deleteExistingCategory(category.id);
    handleCloseDeleteModal();
  };

  useEffect(() => {
    setFilteredCategories(
      categories.filter((category) =>
        category.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [categories, searchText]);

  return (
    <div>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <button onClick={() => handleOpenModal({})}>Add Category</button>
      <CategoryList
        categories={filteredCategories}
        onEdit={handleOpenModal}
        onDelete={handleOpenDeleteModal}
      />
      <CategoryModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        category={selectedCategory || {}}
        onClose={handleCloseModal}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onRequestClose={handleCloseDeleteModal}
        object={selectedCategory || {}}
        onDelete={handleDeleteCategory}
        objectType="category"
      />
    </div>
  );
}

export default Categories;
