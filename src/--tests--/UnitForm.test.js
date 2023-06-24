import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UnitForm from "../components/UnitForm";
import { UnitsOfMeasureContext } from "../contexts/unitsOfMeasureContext";

test("renders UnitForm correctly", () => {
  const addNewUnit = jest.fn();
  const updateExistingUnit = jest.fn();

  render(
    <UnitsOfMeasureContext.Provider value={{ addNewUnit, updateExistingUnit }}>
      <UnitForm unit={null} onClose={jest.fn()} onRequestClose={jest.fn()} />
    </UnitsOfMeasureContext.Provider>
  );

  const nameInput = screen.getByLabelText("Name:");
  const baseUnitInput = screen.getByLabelText("Base Unit:");
  const conversionFactorInput = screen.getByLabelText("Conversion Factor:");
  const shortNameInput = screen.getByLabelText("Short Name:");
  const submitButton = screen.getByText("Submit");

  expect(nameInput).toBeInTheDocument();
  expect(baseUnitInput).toBeInTheDocument();
  expect(conversionFactorInput).toBeInTheDocument();
  expect(shortNameInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("submits form with addNewUnit when unit id is not present", () => {
  const addNewUnit = jest.fn();
  const updateExistingUnit = jest.fn();

  render(
    <UnitsOfMeasureContext.Provider value={{ addNewUnit, updateExistingUnit }}>
      <UnitForm unit={null} onClose={jest.fn()} onRequestClose={jest.fn()} />
    </UnitsOfMeasureContext.Provider>
  );

  const nameInput = screen.getByLabelText("Name:");
  const baseUnitInput = screen.getByLabelText("Base Unit:");
  const conversionFactorInput = screen.getByLabelText("Conversion Factor:");
  const shortNameInput = screen.getByLabelText("Short Name:");
  const submitButton = screen.getByText("Submit");

  fireEvent.change(nameInput, { target: { value: "Unit" } });
  fireEvent.change(baseUnitInput, { target: { value: "Base" } });
  fireEvent.change(conversionFactorInput, { target: { value: "2.5" } });
  fireEvent.change(shortNameInput, { target: { value: "U" } });

  fireEvent.click(submitButton);

  expect(addNewUnit).toHaveBeenCalledTimes(1);
  expect(addNewUnit).toHaveBeenCalledWith({
    name: "Unit",
    baseUnit: "Base",
    conversionFactor: "2.5",
    shortName: "U",
  });
});

test("submits form with updateExistingUnit when unit id is present", () => {
  const addNewUnit = jest.fn();
  const updateExistingUnit = jest.fn();

  const unit = {
    id: 1,
    name: "Unit",
    baseUnit: "Base",
    conversionFactor: "2.5",
    shortName: "U",
  };

  render(
    <UnitsOfMeasureContext.Provider value={{ addNewUnit, updateExistingUnit }}>
      <UnitForm unit={unit} onClose={jest.fn()} onRequestClose={jest.fn()} />
    </UnitsOfMeasureContext.Provider>
  );

  const submitButton = screen.getByText("Submit");

  fireEvent.click(submitButton);

  expect(updateExistingUnit).toHaveBeenCalledTimes(1);
  expect(updateExistingUnit).toHaveBeenCalledWith(1, unit);
});
