import React, { createContext, useState, useEffect } from "react";
import {
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../services/api";

export const CategoriesContext = createContext();

export const CategoriesContextProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    setLoading(true);
    try {
      const response = await fetchCategories();
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch categories.", error);
      setLoading(false);
    }
  };

  const addNewCategory = async (category) => {
    try {
      const response = await addCategory(category);
      setCategories((prevCategories) => [...prevCategories, response.data]);
    } catch (error) {
      console.error("Failed to add category.", error);
    }
  };

  const updateExistingCategory = async (id, updatedCategory) => {
    try {
      const response = await updateCategory(id, updatedCategory);
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === id ? response.data : category
        )
      );
    } catch (error) {
      console.error("Failed to update category.", error);
    }
  };

  const deleteExistingCategory = async (id) => {
    try {
      await deleteCategory(id);
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete category.", error);
    }
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        loading,
        getCategories,
        addNewCategory,
        updateExistingCategory,
        deleteExistingCategory,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};
