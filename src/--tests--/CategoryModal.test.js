import { render, screen, fireEvent } from "@testing-library/react";
import CategoryModal from "../components/CategoryModal";
import { CategoriesContext } from "../contexts/categoriesContext";

jest.mock("react-modal", () => {
  const Modal = function ({ children, isOpen }) {
    return isOpen ? <div>{children}</div> : null;
  };

  Modal.setAppElement = jest.fn();

  return Modal;
});

describe("CategoryModal", () => {
  const category = { id: 1, name: "Test Category" };
  const onRequestClose = jest.fn();
  const onClose = jest.fn();

  test("renders CategoryForm correctly", () => {
    render(
      <CategoriesContext.Provider
        value={{ addNewCategory: jest.fn(), updateExistingCategory: jest.fn() }}
      >
        <CategoryModal
          isOpen={true}
          onRequestClose={onRequestClose}
          category={category}
          onClose={onClose}
        />
      </CategoriesContext.Provider>
    );

    expect(screen.getByLabelText("Category Name:")).toHaveValue(category.name);
  });

  test("calls onRequestClose when close button is clicked", () => {
    render(
      <CategoriesContext.Provider
        value={{ addNewCategory: jest.fn(), updateExistingCategory: jest.fn() }}
      >
        <CategoryModal
          isOpen={true}
          onRequestClose={onRequestClose}
          category={category}
          onClose={onClose}
        />
      </CategoriesContext.Provider>
    );

    fireEvent.click(screen.getByText("Close"));
    expect(onRequestClose).toHaveBeenCalledTimes(1);
  });

  test("does not render when isOpen is false", () => {
    render(
      <CategoriesContext.Provider
        value={{ addNewCategory: jest.fn(), updateExistingCategory: jest.fn() }}
      >
        <CategoryModal
          isOpen={false}
          onRequestClose={onRequestClose}
          category={category}
          onClose={onClose}
        />
      </CategoriesContext.Provider>
    );

    expect(screen.queryByLabelText("Category Name:")).toBeNull();
  });
});
