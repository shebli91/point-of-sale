import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductModal from "../components/ProductModal";
import {
  ProductsContext,
  ProductsContextProvider,
} from "../contexts/productsContext";
import {
  CategoriesContext,
  CategoriesContextProvider,
} from "../contexts/categoriesContext";
import {
  UnitsOfMeasureContext,
  UnitsOfMeasureContextProvider,
} from "../contexts/unitsOfMeasureContext";
import Modal from "react-modal";

jest.mock("react-modal", () => {
  const Modal = function ({ children, isOpen }) {
    return isOpen ? <div>{children}</div> : null;
  };

  Modal.setAppElement = jest.fn();

  return Modal;
});

test("renders add product modal correctly", () => {
  const onRequestClose = jest.fn();
  const onClose = jest.fn();

  render(
    <ProductsContextProvider>
      <CategoriesContextProvider>
        <UnitsOfMeasureContextProvider>
          <ProductModal
            isOpen={true}
            onRequestClose={onRequestClose}
            product={null}
            onClose={onClose}
          />
        </UnitsOfMeasureContextProvider>
      </CategoriesContextProvider>
    </ProductsContextProvider>
  );

  const headerText = screen.getByText("Add Product");
  expect(headerText).toBeInTheDocument();
});

test("renders update product modal correctly", () => {
  const onRequestClose = jest.fn();
  const onClose = jest.fn();
  const existingProduct = {
    id: 1,
    name: "Existing Product",
    description: "Existing Description",
    price: "10.99",
    code: "ABC123",
    unit: "Unit",
    category: "Category",
    images: ["image-url"],
  };

  render(
    <ProductsContextProvider>
      <CategoriesContextProvider>
        <UnitsOfMeasureContextProvider>
          <ProductModal
            isOpen={true}
            onRequestClose={onRequestClose}
            product={existingProduct}
            onClose={onClose}
          />
        </UnitsOfMeasureContextProvider>
      </CategoriesContextProvider>
    </ProductsContextProvider>
  );

  const headerText = screen.getByText("Update Product");
  expect(headerText).toBeInTheDocument();
});
