import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

test("renders product card correctly", () => {
  const product = {
    name: "Product 1",
    description: "Description 1",
    code: "Code 1",
    category: "Category 1",
    unit: "Unit 1",
    price: 10,
    images: ["image-url"],
  };

  render(<ProductCard product={product} />);

  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(
    screen.getByText("Description:", { exact: false })
  ).toBeInTheDocument();
  expect(screen.getByText("Description 1")).toBeInTheDocument();
  expect(screen.getByText("Code:", { exact: false })).toBeInTheDocument();
  expect(screen.getByText("Code 1")).toBeInTheDocument();
  expect(screen.getByText("Category:", { exact: false })).toBeInTheDocument();
  expect(screen.getByText("Category 1")).toBeInTheDocument();
  expect(screen.getByText("Unit:", { exact: false })).toBeInTheDocument();
  expect(screen.getByText("Unit 1")).toBeInTheDocument();
  expect(screen.getByText("Price:", { exact: false })).toBeInTheDocument();
  expect(screen.getByText("$10")).toBeInTheDocument();
});

test("calls onEdit when Edit button is clicked", () => {
  const mockProduct = {
    id: "1",
    name: "Product 1",
    description: "Description 1",
    code: "Code 1",
    category: "Category 1",
    unit: "Unit 1",
    price: 10,
    images: ["image-url"],
  };

  const mockOnEdit = jest.fn();

  render(
    <ProductCard
      product={mockProduct}
      onEdit={mockOnEdit}
      onDelete={jest.fn()}
    />
  );

  const editButton = screen.getByRole("button", { name: "Edit" });
  fireEvent.click(editButton);

  expect(mockOnEdit).toHaveBeenCalledWith(mockProduct);
});

test("calls onDelete when Delete button is clicked", () => {
  const mockProduct = {
    id: "1",
    name: "Product 1",
    description: "Description 1",
    code: "Code 1",
    category: "Category 1",
    unit: "Unit 1",
    price: 10,
    images: ["image-url"],
  };

  const mockOnDelete = jest.fn();

  render(
    <ProductCard
      product={mockProduct}
      onEdit={jest.fn()}
      onDelete={mockOnDelete}
    />
  );

  const deleteButton = screen.getByRole("button", { name: "Delete" });
  fireEvent.click(deleteButton);

  expect(mockOnDelete).toHaveBeenCalledWith(mockProduct);
});
