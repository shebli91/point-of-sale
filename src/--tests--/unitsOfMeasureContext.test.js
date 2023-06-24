import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import {
  UnitsOfMeasureContextProvider,
  UnitsOfMeasureContext,
} from "../contexts/unitsOfMeasureContext";
import * as api from "../services/api";

jest.mock("../services/api");

describe("UnitsOfMeasureContext", () => {
  test("adds a new unit", async () => {
    const newUnit = { id: 2, name: "New Unit" };
    api.addUnit.mockResolvedValue({ data: newUnit });

    render(
      <UnitsOfMeasureContextProvider>
        <UnitsOfMeasureContext.Consumer>
          {(value) => (
            <button onClick={() => value.addNewUnit(newUnit)}>Add Unit</button>
          )}
        </UnitsOfMeasureContext.Consumer>
      </UnitsOfMeasureContextProvider>
    );

    const addUnitButton = screen.getByText("Add Unit");
    addUnitButton.click();

    await waitFor(() => {
      expect(api.addUnit).toHaveBeenCalledTimes(1);
      expect(api.addUnit).toHaveBeenCalledWith(newUnit);
    });
  });

  test("updates an existing unit", async () => {
    const unitId = 1;
    const updatedUnit = { id: unitId, name: "Updated Unit" };
    api.updateUnit.mockResolvedValue({ data: updatedUnit });

    render(
      <UnitsOfMeasureContextProvider>
        <UnitsOfMeasureContext.Consumer>
          {(value) => (
            <button
              onClick={() => value.updateExistingUnit(unitId, updatedUnit)}
            >
              Update Unit
            </button>
          )}
        </UnitsOfMeasureContext.Consumer>
      </UnitsOfMeasureContextProvider>
    );

    const updateUnitButton = screen.getByText("Update Unit");
    updateUnitButton.click();

    await waitFor(() => {
      expect(api.updateUnit).toHaveBeenCalledTimes(1);
      expect(api.updateUnit).toHaveBeenCalledWith(unitId, updatedUnit);
    });
  });

  test("deletes an existing unit", async () => {
    const unitId = 1;
    api.deleteUnit.mockResolvedValue();

    render(
      <UnitsOfMeasureContextProvider>
        <UnitsOfMeasureContext.Consumer>
          {(value) => (
            <button onClick={() => value.deleteExistingUnit(unitId)}>
              Delete Unit
            </button>
          )}
        </UnitsOfMeasureContext.Consumer>
      </UnitsOfMeasureContextProvider>
    );

    const deleteUnitButton = screen.getByText("Delete Unit");
    deleteUnitButton.click();

    await waitFor(() => {
      expect(api.deleteUnit).toHaveBeenCalledTimes(1);
      expect(api.deleteUnit).toHaveBeenCalledWith(unitId);
    });
  });
});
