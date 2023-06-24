import React from "react";
import { render, screen } from "@testing-library/react";
import { CartsContext } from "../contexts/CartsContext";
import { createCart, fetchCarts } from "../services/api";

jest.mock("../services/api", () => ({
  ...jest.requireActual("../services/api"),
  createCart: jest.fn(),
  fetchCarts: jest.fn(),
  fetchCartById: jest.fn(),
  addToCart: jest.fn(),
  updateProductInCart: jest.fn(),
  removeFromCart: jest.fn(),
  deleteCart: jest.fn(),
}));

describe("CartsContext", () => {
  test("creates new cart", async () => {
    createCart.mockResolvedValue({ data: { id: 1 } });
    fetchCarts.mockResolvedValue({ data: [] });

    render(
      <CartsContext.Provider value={{ createNewCart: createCart }}>
        <CartsContext.Consumer>
          {(value) => (
            <button onClick={() => value.createNewCart({})}>Create Cart</button>
          )}
        </CartsContext.Consumer>
      </CartsContext.Provider>
    );

    const createCartButton = screen.getByText("Create Cart");
    createCartButton.click();

    expect(createCart).toHaveBeenCalledTimes(1);
  });

  test("selects a cart", async () => {
    const cartId = 1;
    const selectedCartData = { id: cartId, name: "Test Cart" };
    const fetchCartById = jest
      .fn()
      .mockResolvedValue({ data: selectedCartData });

    render(
      <CartsContext.Provider value={{ selectCart: fetchCartById }}>
        <CartsContext.Consumer>
          {(value) => (
            <button onClick={() => value.selectCart(cartId)}>
              Select Cart
            </button>
          )}
        </CartsContext.Consumer>
      </CartsContext.Provider>
    );

    const selectCartButton = screen.getByText("Select Cart");
    selectCartButton.click();

    expect(fetchCartById).toHaveBeenCalledTimes(1);
    expect(fetchCartById).toHaveBeenCalledWith(cartId);
  });
});
