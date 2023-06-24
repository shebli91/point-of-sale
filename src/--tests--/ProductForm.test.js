import React from "react";
import { render, screen } from "@testing-library/react";
import ProductForm from "../components/ProductForm";
import { ProductsContextProvider } from "../contexts/productsContext";
import { CategoriesContextProvider } from "../contexts/categoriesContext";
import { UnitsOfMeasureContextProvider } from "../contexts/unitsOfMeasureContext";

test("renders ProductForm correctly", () => {
  const product = {
    id: 1,
    name: "Product 1",
    description: "Description 1",
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
          <ProductForm
            product={product}
            onClose={() => {}}
            onRequestClose={() => {}}
          />
        </UnitsOfMeasureContextProvider>
      </CategoriesContextProvider>
    </ProductsContextProvider>
  );

  expect(screen.getByLabelText("Name:")).toBeInTheDocument();
  expect(screen.getByLabelText("Description:")).toBeInTheDocument();
  expect(screen.getByLabelText("Code:")).toBeInTheDocument();
  expect(screen.getByLabelText("Category:")).toBeInTheDocument();
  expect(screen.getByLabelText("Image URL:")).toBeInTheDocument();
  expect(screen.getByLabelText("Price:")).toBeInTheDocument();
  expect(screen.getByLabelText("Unit of Measure:")).toBeInTheDocument();

  expect(screen.getByText("Submit")).toBeInTheDocument();
});
