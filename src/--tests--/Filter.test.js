import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

describe("Filter", () => {
  const options = ["Category 1", "Category 2", "Category 3"];
  const filter = "Category 1";
  const onFilterChange = jest.fn();

  test("renders select with options", () => {
    render(
      <Filter
        options={options}
        filter={filter}
        onFilterChange={onFilterChange}
      />
    );

    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test("calls onFilterChange when select value changes", () => {
    render(
      <Filter
        options={options}
        filter={filter}
        onFilterChange={onFilterChange}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Category 2" },
    });

    expect(onFilterChange).toHaveBeenCalledWith("Category 2");
  });

  test("select has correct value", () => {
    render(
      <Filter
        options={options}
        filter={filter}
        onFilterChange={onFilterChange}
      />
    );

    expect(screen.getByRole("combobox")).toHaveValue(filter);
  });
});
