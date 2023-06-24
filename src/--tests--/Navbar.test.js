import { render, screen, fireEvent } from "@testing-library/react";
import { UserContext } from "../contexts/UserContext";
import { MemoryRouter, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/products",
  }),
}));

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: MemoryRouter });
};

describe("Navbar", () => {
  const setUser = jest.fn();

  test("renders Navbar with user", () => {
    renderWithRouter(
      <UserContext.Provider value={{ user: "Test User", setUser }}>
        <Navbar />
      </UserContext.Provider>,
      { route: "/products" }
    );

    expect(screen.getByText("Welcome, Test User!")).toBeInTheDocument();
    expect(screen.getByText("Products")).toHaveClass("active");
    expect(screen.getByText("Log Out")).toBeInTheDocument();
  });

  test("renders Navbar without user", () => {
    jest
      .spyOn(require("react-router-dom"), "useLocation")
      .mockReturnValue({ pathname: "/login" });

    renderWithRouter(
      <UserContext.Provider value={{ user: null, setUser }}>
        <Navbar />
      </UserContext.Provider>,
      { route: "/login" }
    );

    expect(screen.getByText("Login")).toHaveClass("active");
  });

  test("logout function is called when Log Out button is clicked", () => {
    jest
      .spyOn(require("react-router-dom"), "useLocation")
      .mockReturnValue({ pathname: "/pos" });

    const setUser = jest.fn();

    renderWithRouter(
      <UserContext.Provider value={{ user: "Test User", setUser }}>
        <Navbar />
      </UserContext.Provider>,
      { route: "/pos" }
    );

    fireEvent.click(screen.getByText("Log Out"));
    expect(setUser).toHaveBeenCalledWith(null);
  });
});
