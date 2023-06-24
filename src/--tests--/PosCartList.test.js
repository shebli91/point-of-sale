import { render, screen, fireEvent } from "@testing-library/react";
import { CartsContext } from "../contexts/cartsContext";
import PosCartList from "../components/PosCartList";

jest.mock("react-modal", () => {
  const originalModule = jest.requireActual("react-modal");
  originalModule.setAppElement = jest.fn();
  return originalModule;
});

describe("PosCartList", () => {
  const selectCart = jest.fn();

  const mockCarts = [
    { id: 1, client: { firstName: "mohammed", lastName: "shebli" } },
    { id: 2, client: { firstName: "sarah", lastName: "shebli" } },
  ];

  const selectedCart = mockCarts[0];

  const renderComponent = () => {
    render(
      <CartsContext.Provider
        value={{ carts: mockCarts, selectCart, selectedCart }}
      >
        <PosCartList />
      </CartsContext.Provider>
    );
  };

  test("renders cart list correctly", () => {
    renderComponent();
    mockCarts.forEach((cart) => {
      expect(
        screen.getByText(
          `${cart.client.firstName} ${cart.client.lastName}'s Cart`
        )
      ).toBeInTheDocument();
    });
  });

  test("calls selectCart function on cart click", () => {
    renderComponent();
    fireEvent.click(
      screen.getByText(
        `${mockCarts[0].client.firstName} ${mockCarts[0].client.lastName}'s Cart`
      )
    );
    expect(selectCart).toHaveBeenCalledWith(mockCarts[0].id);
  });

  test("renders Add New Cart button", () => {
    renderComponent();
    expect(screen.getByText("Add New Cart")).toBeInTheDocument();
  });
});
