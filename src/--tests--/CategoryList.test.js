import { render, fireEvent, screen } from "@testing-library/react";
import CategoryList from "../components/CategoryList";

describe("CategoryList", () => {
  const categories = [
    { id: 1, name: "Test Category 1" },
    { id: 2, name: "Test Category 2" },
  ];

  const onEdit = jest.fn();
  const onDelete = jest.fn();

  test("renders correctly with given data", () => {
    render(
      <CategoryList
        categories={categories}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
    categories.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
    });
  });

  test("calls onEdit and onDelete when respective buttons are clicked", () => {
    render(
      <CategoryList
        categories={categories}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getAllByText("Edit")[0]);
    expect(onEdit).toHaveBeenCalledWith(categories[0]);

    fireEvent.click(screen.getAllByText("Delete")[0]);
    expect(onDelete).toHaveBeenCalledWith(categories[0]);
  });
});
