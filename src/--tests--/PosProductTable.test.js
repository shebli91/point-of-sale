import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PosProductTable from "../components/PosProductTable";
import { ProductsContext } from "../contexts/productsContext";
import { CartsContext } from "../contexts/cartsContext";
import { CategoriesContext } from "../contexts/categoriesContext";

jest.mock("../services/api");

const mockProducts = [
  { id: "1", name: "Product 1", price: 10, category: "Category 1", images: "" },
  { id: "2", name: "Product 2", price: 20, category: "Category 2", images: "" },
];

const mockCategories = [
  { id: "1", name: "Category 1" },
  { id: "2", name: "Category 2" },
];

const mockAddProductToCart = jest.fn();

const renderComponent = () => {
  render(
    <ProductsContext.Provider value={{ products: mockProducts }}>
      <CartsContext.Provider
        value={{
          addProductToCart: mockAddProductToCart,
          selectedCart: { id: "cart-id" },
        }}
      >
        <CategoriesContext.Provider value={{ categories: mockCategories }}>
          <PosProductTable />
        </CategoriesContext.Provider>
      </CartsContext.Provider>
    </ProductsContext.Provider>
  );
};

test("renders product table correctly", () => {
  renderComponent();

  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("Product 2")).toBeInTheDocument();
});

test("filters products based on category", () => {
  renderComponent();

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Category 1" },
  });

  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
});

test("filters products based on search text", () => {
  renderComponent();

  fireEvent.change(screen.getByPlaceholderText("Search..."), {
    target: { value: "Product 1" },
  });

  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
});

test("adds product to cart when Add to Cart button is clicked", () => {
  renderComponent();

  fireEvent.click(screen.getAllByRole("button", { name: "Add to cart" })[0]);

  expect(mockAddProductToCart).toHaveBeenCalledWith("cart-id", mockProducts[0]);
});
