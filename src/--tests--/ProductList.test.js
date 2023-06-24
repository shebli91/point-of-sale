import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "../components/ProductList";

test("renders product list correctly", () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
      code: "Code 1",
      category: "Category 1",
      unit: "Unit 1",
      price: 10,
      images: ["image-url"],
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
      code: "Code 2",
      category: "Category 2",
      unit: "Unit 2",
      price: 20,
      images: ["image-url"],
    },
  ];

  render(<ProductList products={products} />);

  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("Description 1")).toBeInTheDocument();
  expect(screen.getByText("Code 1")).toBeInTheDocument();
  expect(screen.getByText("Category 1")).toBeInTheDocument();
  expect(screen.getByText("Unit 1")).toBeInTheDocument();
  expect(screen.getByText("$10")).toBeInTheDocument();

  expect(screen.getByText("Product 2")).toBeInTheDocument();
  expect(screen.getByText("Description 2")).toBeInTheDocument();
  expect(screen.getByText("Code 2")).toBeInTheDocument();
  expect(screen.getByText("Category 2")).toBeInTheDocument();
  expect(screen.getByText("Unit 2")).toBeInTheDocument();
  expect(screen.getByText("$20")).toBeInTheDocument();
});
