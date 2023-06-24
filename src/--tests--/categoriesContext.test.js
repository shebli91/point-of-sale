import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import {
  CategoriesContextProvider,
  CategoriesContext,
} from "../contexts/categoriesContext";
import * as api from "../services/api";

jest.mock("../services/api");

describe("CategoriesContext", () => {
  test("adds a new category", async () => {
    const newCategory = { id: 2, name: "New Category" };
    api.addCategory.mockResolvedValue({ data: newCategory });

    render(
      <CategoriesContextProvider>
        <CategoriesContext.Consumer>
          {(value) => (
            <button onClick={() => value.addNewCategory(newCategory)}>
              Add Category
            </button>
          )}
        </CategoriesContext.Consumer>
      </CategoriesContextProvider>
    );

    const addCategoryButton = screen.getByText("Add Category");
    addCategoryButton.click();

    await waitFor(() => {
      expect(api.addCategory).toHaveBeenCalledTimes(1);
      expect(api.addCategory).toHaveBeenCalledWith(newCategory);
    });
  });

  test("updates an existing category", async () => {
    const categoryId = 1;
    const updatedCategory = { id: categoryId, name: "Updated Category" };
    api.updateCategory.mockResolvedValue({ data: updatedCategory });

    render(
      <CategoriesContextProvider>
        <CategoriesContext.Consumer>
          {(value) => (
            <button
              onClick={() =>
                value.updateExistingCategory(categoryId, updatedCategory)
              }
            >
              Update Category
            </button>
          )}
        </CategoriesContext.Consumer>
      </CategoriesContextProvider>
    );

    const updateCategoryButton = screen.getByText("Update Category");
    updateCategoryButton.click();

    await waitFor(() => {
      expect(api.updateCategory).toHaveBeenCalledTimes(1);
      expect(api.updateCategory).toHaveBeenCalledWith(
        categoryId,
        updatedCategory
      );
    });
  });

  test("deletes an existing category", async () => {
    const categoryId = 1;
    api.deleteCategory.mockResolvedValue();

    render(
      <CategoriesContextProvider>
        <CategoriesContext.Consumer>
          {(value) => (
            <button onClick={() => value.deleteExistingCategory(categoryId)}>
              Delete Category
            </button>
          )}
        </CategoriesContext.Consumer>
      </CategoriesContextProvider>
    );

    const deleteCategoryButton = screen.getByText("Delete Category");
    deleteCategoryButton.click();

    await waitFor(() => {
      expect(api.deleteCategory).toHaveBeenCalledTimes(1);
      expect(api.deleteCategory).toHaveBeenCalledWith(categoryId);
    });
  });
});
