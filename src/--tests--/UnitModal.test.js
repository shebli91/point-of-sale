import React from "react";
import { render, screen } from "@testing-library/react";
import UnitModal from "../components/UnitModal";
import { UnitsOfMeasureContextProvider } from "../contexts/unitsOfMeasureContext";

jest.mock("react-modal", () => {
  const MockModal = ({ isOpen, onRequestClose, children }) => {
    if (!isOpen) return null;
    return (
      <div>
        <div>{children}</div>
      </div>
    );
  };

  MockModal.setAppElement = jest.fn();

  return MockModal;
});

test("renders UnitModal correctly", () => {
  const onClose = jest.fn();
  const onRequestClose = jest.fn();
  const unit = { id: 1, name: "Unit 1" };

  render(
    <UnitsOfMeasureContextProvider>
      <UnitModal
        isOpen={true}
        onRequestClose={onRequestClose}
        unit={unit}
        onClose={onClose}
      />
    </UnitsOfMeasureContextProvider>
  );

  const headerText = screen.getByText("Update Unit");
  expect(headerText).toBeInTheDocument();
});
