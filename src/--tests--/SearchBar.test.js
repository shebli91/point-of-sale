import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("handles search text change correctly", () => {
  const searchText = "initial text";
  const setSearchText = jest.fn();

  render(<SearchBar searchText={searchText} setSearchText={setSearchText} />);

  const inputElement = screen.getByPlaceholderText("Search...");

  fireEvent.change(inputElement, { target: { value: "new text" } });

  expect(setSearchText).toHaveBeenCalledTimes(1);
  expect(setSearchText).toHaveBeenCalledWith("new text");
});
