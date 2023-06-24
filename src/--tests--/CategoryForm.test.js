import { render, fireEvent, screen } from "@testing-library/react";
import CategoryForm from "../components/CategoryForm";
import { CategoriesContext } from "../contexts/categoriesContext";

describe("CategoryForm", () => {
  const addNewCategory = jest.fn();
  const updateExistingCategory = jest.fn();
  const onRequestClose = jest.fn();
  const onClose = jest.fn();

  const renderComponent = (category = null) => {
    render(
      <CategoriesContext.Provider
        value={{ addNewCategory, updateExistingCategory }}
      >
        <CategoryForm
          category={category}
          onRequestClose={onRequestClose}
          onClose={onClose}
        />
      </CategoriesContext.Provider>
    );
  };

  test("renders correctly with initial data", () => {
    const category = { id: 1, name: "Test Category" };
    renderComponent(category);
    expect(screen.getByLabelText("Category Name:")).toHaveValue(category.name);
  });

  test("handles submit correctly", () => {
    const category = { id: 1, name: "Test Category" };
    renderComponent(category);

    fireEvent.click(screen.getByText("Submit"));
    expect(updateExistingCategory).toHaveBeenCalledWith(category.id, category);
    expect(onClose).toHaveBeenCalled();
  });

  test("handles submit for new category correctly", () => {
    const newCategory = { name: "New Category" };
    renderComponent();

    fireEvent.change(screen.getByLabelText("Category Name:"), {
      target: { value: newCategory.name },
    });
    fireEvent.click(screen.getByText("Submit"));
    expect(addNewCategory).toHaveBeenCalledWith(newCategory);
    expect(onClose).toHaveBeenCalled();
  });
});
