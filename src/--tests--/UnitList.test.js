import React from "react";
import { render, screen } from "@testing-library/react";
import UnitList from "../components/UnitList";

test("renders UnitList correctly", () => {
  const units = [
    {
      id: 1,
      name: "Unit 1",
      baseUnit: "Base 1",
      conversionFactor: 1,
      shortName: "U1",
    },
    {
      id: 2,
      name: "Unit 2",
      baseUnit: "Base 2",
      conversionFactor: 2,
      shortName: "U2",
    },
  ];

  render(<UnitList units={units} onEdit={() => {}} onDelete={() => {}} />);

  expect(screen.getByText("Unit of Measure Name")).toBeInTheDocument();
  expect(screen.getByText("Base Unit")).toBeInTheDocument();
  expect(screen.getByText("Conversion Factor")).toBeInTheDocument();
  expect(screen.getByText("Short Name")).toBeInTheDocument();
  expect(screen.getByText("Actions")).toBeInTheDocument();

  const numberElements = screen.getAllByText("1");
  expect(numberElements.length).toBe(2);

  expect(screen.getByText("Unit 1")).toBeInTheDocument();
  expect(screen.getByText("Base 1")).toBeInTheDocument();
  expect(numberElements[0]).toBeInTheDocument();
  expect(screen.getByText("U1")).toBeInTheDocument();

  expect(screen.getByText("Unit 2")).toBeInTheDocument();
  expect(screen.getByText("Base 2")).toBeInTheDocument();
  expect(numberElements[1]).toBeInTheDocument();
  expect(screen.getByText("U2")).toBeInTheDocument();
});
