import { render, screen, fireEvent } from "@testing-library/react";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";

jest.mock("react-modal", () => {
  const Modal = function ({ children, isOpen }) {
    return isOpen ? <div>{children}</div> : null;
  };

  Modal.setAppElement = jest.fn();

  return Modal;
});

describe("DeleteConfirmationModal", () => {
  const object = { id: 1, name: "Test Object" };
  const onRequestClose = jest.fn();
  const onDelete = jest.fn();

  test("renders correctly", () => {
    render(
      <DeleteConfirmationModal
        isOpen={true}
        onRequestClose={onRequestClose}
        object={object}
        onDelete={onDelete}
      />
    );

    expect(screen.getByText("Confirm Deletion")).toBeInTheDocument();
    expect(
      screen.getByText(`Are you sure you want to delete ${object.name}?`)
    ).toBeInTheDocument();
  });

  test("calls onDelete when Yes button is clicked", () => {
    render(
      <DeleteConfirmationModal
        isOpen={true}
        onRequestClose={onRequestClose}
        object={object}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByText("Yes"));
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(object);
  });

  test("calls onRequestClose when No button is clicked", () => {
    render(
      <DeleteConfirmationModal
        isOpen={true}
        onRequestClose={onRequestClose}
        object={object}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByText("No"));
    expect(onRequestClose).toHaveBeenCalledTimes(1);
  });

  test("does not render when isOpen is false", () => {
    render(
      <DeleteConfirmationModal
        isOpen={false}
        onRequestClose={onRequestClose}
        object={object}
        onDelete={onDelete}
      />
    );

    expect(screen.queryByText("Confirm Deletion")).toBeNull();
    expect(
      screen.queryByText(`Are you sure you want to delete ${object.name}?`)
    ).toBeNull();
  });
});
